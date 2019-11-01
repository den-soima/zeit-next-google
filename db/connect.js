const {Client} = require('pg');
const process = require('process');

export class DbRequest {
    constructor(connection) {
        this.connectionString = {
            user: connection.user,
            host: connection.host,
            database: connection.database,
            password: connection.password,
            port: connection.port,
        };

        console.log(this.connectionString);

        this.query = connection.query;

        console.log(this.query);
        this.run = this.run.bind(this);
    }

    run(callBack) {
        const client = new Client(this.connectionString);
        const start = process.hrtime();
        client.connect();
        client.query(this.query, (error, result) => {
            if (error) {
                console.log(error);
                result = {
                    rows: {
                        error: {
                            type: 'Run query',
                            message : 'Error, please, check settings',
                            query: this.query,
                        }
                    }
                }
                
            }
                const end = process.hrtime(start);
                callBack(result, {seconds: end[0], nanoseconds: end[1]});
            
            client.end();
        });
    }
}