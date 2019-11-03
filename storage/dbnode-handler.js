
const path = require('path');
const dbnodes = require('./dbnodes');
const fs = require('fs');

export function EditNode(id, connection, callback) {
    dbnodes.nodes.forEach(node => {
        if (node.id === id) {
            node.connection = connection
        }
    });
    
    let json = JSON.stringify(dbnodes, null, 1);
    
    fs.writeFile('./storage/dbnodes.json', json, 'utf8', (err)=>{
        callback(err)
    });
}

export function AddNode(node) {

}