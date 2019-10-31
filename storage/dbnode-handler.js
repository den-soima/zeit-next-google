
const path = require('path');
const DbNodes = require('./dbnodes');
const fs = require('fs');

export function EditNode(id, connection, callback) {
    DbNodes.nodes.forEach(node => {
        if (node.id === id) {
            node.connection = connection
        }
    });
    
    let json = JSON.stringify(DbNodes, null, 1);
    
    fs.writeFile('./storage/dbnodes.json', json, 'utf8', callback);
}

export function AddNode(node) {

}