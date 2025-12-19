const { sql } = require('../db');

const createCandidate = async (pool, data) => {
    return await pool.request()
        .input('fullName', sql.VarChar, data.fullName)
        .input('email', sql.VarChar, data.email)
        .query(`INSERT INTO Candidates (fullName, email) VALUES (@fullName, @email)`
    );
};

const getCandidates = async (pool) =>{
    return pool.request().query("SELECT * FROM Candidates");
};

module.exports ={
    createCandidate,
    getCandidates
};