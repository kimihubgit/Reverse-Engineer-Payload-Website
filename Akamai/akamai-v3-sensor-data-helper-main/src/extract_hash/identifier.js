const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generate = require('@babel/generator').default;

function identifyIndex(ast) {
    // Array to store the found patterns
    const foundPatterns = [];

    var result = {};
    // Store the function name we need to find
    let targetFunctionName = null;
    // Store the important value name we need to find its declaration
    let importantValueName = null;

    // First pass: Find the variable declaration pattern
    traverse(ast, {
        VariableDeclarator(path) {
            const node = path.node;

            // Check if the initialization is a logical OR expression
            if (t.isLogicalExpression(node.init) && node.init.operator === '||') {
                const left = node.init.left;
                const right = node.init.right;

                // Check if the right side is a call expression
                if (t.isCallExpression(right)) {
                    // Check if the left side is a simple identifier (not a complex expression)
                    if (t.isIdentifier(left)) {
                        // This matches our exact pattern: var variableName = anotherVariable || functionCall()
                        foundPatterns.push({
                            variableName: node.id.name,
                            leftOperand: generate(left).code,
                            rightOperand: generate(right).code,
                            location: {
                                start: node.loc ? node.loc.start : 'unknown',
                                end: node.loc ? node.loc.end : 'unknown'
                            }
                        });

                        // Store the function name we need to find
                        if (t.isIdentifier(right.callee)) {
                            targetFunctionName = right.callee.name;
                        }
                    }
                }
            }
        }
    });

    if (!targetFunctionName) {
        return null;
    }
    
    let functionDeclaration = null;

    // Second pass: Find the function declaration
    traverse(ast, {
        FunctionDeclaration(path) {
            const node = path.node;
            if (node.id && node.id.name === targetFunctionName) {
                functionDeclaration = node;
                path.stop(); // Stop traversing once we find the function
            }
        },
        VariableDeclarator(path) {
            const node = path.node;
            if (t.isIdentifier(node.id) && node.id.name === targetFunctionName &&
                t.isFunctionExpression(node.init)) {
                functionDeclaration = node;
                path.stop(); // Stop traversing once we find the function
            }
        }
    });

    if (!functionDeclaration) {
        return null;
    }

    // Generate the code for the function
    const functionCode = generate(functionDeclaration).code;

    // Now parse the function.js file to find the array declaration
    const functionAst = parser.parse(functionCode, {
        sourceType: 'module',
        plugins: ['jsx']
    });

    let importantValue = null;

    // Find the array declaration within the function
    traverse(functionAst, {
        VariableDeclarator(nodePath) {
            const node = nodePath.node;

            // Check if the initialization is an array expression with at least 2 elements
            if (t.isArrayExpression(node.init) && node.init.elements.length >= 2) {
                // Get the second element of the array
                const secondElement = node.init.elements[1];

                if (t.isIdentifier(secondElement)) {
                    importantValue = secondElement.name;
                    importantValueName = secondElement.name; // Store for later use
                }
            }
        }
    });

    if (!importantValue) {
        return null;
    }

    // Third pass: Find the declaration of the important value
    traverse(ast, {
        VariableDeclarator(nodePath) {
            const node = nodePath.node;

            // Check if this is the declaration we're looking for
            if (t.isIdentifier(node.id) && node.id.name === importantValueName) {
                console.log(`Found declaration of ${importantValueName}`);

                // Function to recursively find the last member expression in the arguments
                function findLastMemberExpression(node) {
                    if (!node) return null;

                    // If this is a call expression, check its arguments
                    if (t.isCallExpression(node)) {
                        const args = node.arguments;
                        if (args.length > 0) {
                            // Check the last argument
                            const lastArg = args[args.length - 1];
                            if (t.isMemberExpression(lastArg)) {
                                return lastArg;
                            }
                            // Recursively check the last argument
                            return findLastMemberExpression(lastArg);
                        }
                    }

                    // If this is a member expression, check its object and property
                    if (t.isMemberExpression(node)) {
                        return node;
                    }

                    // For other types of nodes, check their properties
                    for (const key of Object.keys(node)) {
                        if (node[key] && typeof node[key] === 'object') {
                            const result = findLastMemberExpression(node[key]);
                            if (result) return result;
                        }
                    }

                    return null;
                }

                // Find the last member expression in the initialization
                const lastMemberExpr = findLastMemberExpression(node.init);

                if (lastMemberExpr) {
                    let element = node.init.arguments[0].arguments[0];
                    result = {
                        list: element.object.name,
                        index: element.property.name
                    }
                }
            }
        }
    });

    return result.index;

}

function findObjectsWithHexKeys(ast) {
    let result = null;

    traverse(ast, {
        VariableDeclarator(path) {
            try {
                if (path.node.init && path.node.init.type === 'ObjectExpression') {
                    const obj = path.node.init;
                    let hexKeys = 0;
                    let functionCalls = 0;

                    obj.properties.forEach(prop => {
                        try {
                            if (prop.key && prop.key.type === 'StringLiteral') {
                                const key = prop.key.value;
                                if (key && key.length === 1 && /[\x20-\x7F]/.test(key)) {
                                    hexKeys++;
                                }
                            }

                            if (prop.value) {
                                const value = prop.value;
                                if (value.type === 'CallExpression' ||
                                    (value.type === 'ConditionalExpression' &&
                                        (value.consequent && value.consequent.type === 'CallExpression' ||
                                            value.alternate && value.alternate.type === 'CallExpression')) ||
                                    (value.type === 'LogicalExpression' &&
                                        (value.left && value.left.type === 'CallExpression' ||
                                            value.right && value.right.type === 'CallExpression'))) {
                                    functionCalls++;
                                }
                            }
                        } catch (error) {
                            console.error('Error processing property:', error);
                        }
                    });

                    if (hexKeys === 11 && functionCalls >= 11) {
                        const objectJson = {};
                        obj.properties.forEach(prop => {
                            try {
                                const key = prop.key && prop.key.type === 'StringLiteral' ? prop.key.value :
                                    prop.key && prop.key.type === 'Identifier' ? prop.key.name :
                                        'unknown';
                                const hexKey = key.length === 1 ? `\\x${key.charCodeAt(0).toString(16).padStart(2, '0')}` : key;
                                objectJson[hexKey] = prop.value ? generate(prop.value).code : 'unknown';
                            } catch (error) {
                                console.error('Error processing property for JSON:', error);
                            }
                        });
                        result = {
                            node: path.node,
                            legenda: {
                                name: path.node.id.name,
                                code: generate(path.node).code
                            }
                        };
                        path.stop();
                    }
                }
            } catch (error) {
                console.error('Error processing variable declarator:', error);
            }
        }
    });

    return result;
}

function findListArray(ast) {
    let result = null;

    traverse(ast, {
        AssignmentExpression(path) {
            const node = path.node;
            if (node.right && node.right.type === 'CallExpression' &&
                node.right.arguments && node.right.arguments[1] &&
                node.right.arguments[1].type === 'ArrayExpression') {
                const arrayArg = node.right.arguments[1];
                if (arrayArg.elements && arrayArg.elements.length > 0 &&
                    arrayArg.elements[0].type === 'ArrayExpression') {
                    const innerArray = arrayArg.elements[0];
                    if (
                        innerArray.elements && 
                        innerArray.elements.every(el => el.type === 'StringLiteral') &&
                        innerArray.elements.length >= 10
                    ) {
                        result = {
                            index: node.left.name,
                            list: innerArray.elements.map(el => el.value)
                        };
                        path.stop();
                    }
                }
            }
        }
    });

    return result;
}

function main(code) {
    try {
        const ast = typeof code === 'string' ? parser.parse(code) : code;
        const hexObject = findObjectsWithHexKeys(ast);
        const listData = findListArray(ast);

        if (!hexObject || !listData) {
            throw new Error('Could not find all required elements');
        }

        return {
            index: identifyIndex(ast),
            list: listData.list,
            legenda: hexObject.legenda
        };
    } catch (error) {
        throw error;
    }
}

module.exports = main;
