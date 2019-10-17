const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: '35.246.140.248',
    database: 'googletest',
    password: 'user',
    port: 5432,
})

export default function handle(req, res) {
    pool.query('SELECT * FROM testdata', (error, result) => {
        if (error){
            throw error
        }
        res.status(200).json({
            status: 'success',
            data: result.rows
        });
    })
}