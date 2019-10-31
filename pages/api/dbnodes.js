import {EditNode} from "../../storage/dbnode-handler";

const dbNodes = require('../../storage/dbnodes');


export default (req, res) => {
    switch (req.method) {
        case 'POST': {
            const {body: {id, connection}} = req;
            EditNode(id, connection, (err) => {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = err ? 500 : 200;
                res.end(JSON.stringify({
                    id: id,
                    message: err ? "Error editing db node" : "Successfully modified",
                }));
            });
            break;
        }
        case 'GET': {
            res.status(200).json(dbNodes);
            break;
        }
        default:
    }
}