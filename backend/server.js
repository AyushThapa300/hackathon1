const express = require('express');
const cors = require('cors');
require('dotenv').config();

const {connectDB} = require('./db');

const candidateRoutes = require('./routes/candidateRoutes');
const jobRoutes = require('./routes/jobRoutes');
const interviewRoutes = require('./routes/interviewRoutes');
const aiRoutes = require('./routes/aiRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Connect SQL 
// connectDB();

//Routes
app.use('/api/candidates',candidateRoutes);
// app.use('/api/jobs',jobRoutes);
// app.use('api/interviews',interviewRoutes);
// app.use('/api/ai',aiRoutes);

app.get('/',(req,res)=>{
    res.send("HireMindAI Backend is running");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});