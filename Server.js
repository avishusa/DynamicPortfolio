const express=require('express')
require("dotenv").config();
const app=express()
const dbConfig=require("./Config/dbConfig");
const portfolioRoute = require("./routes/portfolioRoute")
app.use(express.json());
app.use("/api/portfolio",portfolioRoute);
const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})