const fs = require('fs');
const pathModule = require('path');
const parser = require('@babel/parser');
const t = require('@babel/types');
const generate = require('@babel/generator').default;

const extractData = require('./identifier.js');
const {listDecoder} = require('./helpers.js');



function extractFileHash(
    fileContent
) {
    // Extract the data
    const result = extractData(fileContent);
    const ast = parser.parse(fileContent, {
    });

    const vm = require('vm');
    const context = vm.createContext({
        window: {
            charCodeAt: String.prototype.charCodeAt,
            charAt: String.prototype.charAt,
            String: String,
            Array: Array,
            Object: Object,
            Function: Function,
            Boolean: Boolean,
            Number: Number,
            Math: Math,
            BigInt: BigInt,
            Buffer: Buffer,
            process: process,
            console: console,
            require: require,
            module: module,
            exports: exports,
            parseFloat: parseFloat,
        },
    });

    let expressionStatement = ast.program.body[1].expression.callee.body.body;

    // Execute statements by type in a specific order
    const statementTypes = [
        { type: t.isVariableDeclaration, name: 'VariableDeclaration' },
        { type: t.isFunctionDeclaration, name: 'FunctionDeclaration' },
        { type: t.isExpressionStatement, name: 'ExpressionStatement' },
        { 
            type: (statement) => t.isReturnStatement(statement) && t.isCallExpression(statement.argument),
            name: 'ReturnStatement',
            errorHandling: true
        }
    ];
    statementTypes.forEach(({ type, name, errorHandling }) => {
        if (errorHandling) {
            expressionStatement.forEach(statement => {
                if (type(statement)) {
                    try {
                        vm.runInContext(generate(statement.argument).code, context);
                    } catch (error) {
                        // Silently handle execution errors
                    }
                }
            });
        } else {
            expressionStatement.forEach(statement => {
                if (type(statement)) {
                    vm.runInContext(generate(statement).code, context);
                }
            });
        }
    });
    vm.runInContext(result.legenda.code, context);
    return listDecoder(result.list, context[result.legenda.name])[context[result.index]]
}

module.exports = {
    extractFileHash
}