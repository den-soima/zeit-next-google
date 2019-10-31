import {DbRequest} from '../../../db/connect';

export default (request, response) => {
    if (request.method === 'POST') {
        const {
            query: {nodeid},
            body: {connection}
        } = request;
        const dbRequest = new DbRequest(connection);
        dbRequest.run((result, time) => {
            response.setHeader('Content-Type', 'application/json');
            response.statusCode = 200;
            response.end(JSON.stringify({
                node: nodeid,
                result: result.rows,
                processTime: time,
            }))
        })
    } else {
        response.status(500).json('Wrong request type');
    }
};