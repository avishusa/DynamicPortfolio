const express=require('express')
require("dotenv").config();
const app=express()
const dbConfig=require("./Config/dbConfig");
const portfolioRoute = require("./routes/portfolioRoute")
app.use(express.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use("/api/portfolio",portfolioRoute);
const port=process.env.PORT || 5000;
const path = require("path");

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
