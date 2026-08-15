
function listDecoder(inputList, mappingTable) {
    return inputList.map(item => 
        parseFloat(valueDecoder(item, mappingTable))
    );
}

function valueDecoder(inputString, mappingTable) {
    return Array.from(inputString)
        .map(char => mappingTable[char])
        .join('');
}

module.exports = {
    listDecoder
}