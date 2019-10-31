const { Pool } = require('pg');
const pool = new Pool({
    user: 'eydoewva',
    host: 'dumbo.db.elephantsql.com',
    database: 'eydoewva',
    password: 'cC-HyNcrlOa4nWa9kstq2Zi7oCfHKvbz',
    port: 5432,
});

export default (req, res) => {
    pool.query('SELECT * FROM testdata', (error, result) => {
        if (error) {
            throw error
        }
        res.status(200).json({
            status: 'success',
            data: result.rows
        });
    })
}