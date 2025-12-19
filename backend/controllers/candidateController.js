const {connectDB} = require('../db');
const queries = require('../queries/candidateQueries');

exports.addCandidate = async (req, res) => {
    try{
        const pool = await connectDB();
        await queries.createCandidate(pool, req.body);
        res.status(201).json({message: "Canidate added"});
    }catch(err){
        res.status(500).json({error: err.message });
    }
};

exports.getAllCandidates = async (req,res) =>{
    try{
        const pool = await connectDB();
        const result = await queries.getCandidates(pool);
        res.json(result.recordset);
    }catch(err){
        res.status(500).json({error: err.message });
    }
};