const sql = require('mssql');

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    options:{
        encrypt: true,
        trustServerCertificate: true
    }
};

const connectDB = async () => {
    try{
        const pool = await sql.connect(config);
        console.log('MS SQL dataBase Connected');
        return pool;
    } catch (error){
        console.error("SQL Connection Failed:",error);
        throw error;
    }
};

module.exports = {sql,connectDB};