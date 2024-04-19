const express=require('express')
require("dotenv").config();
const app=express()
const dbConfig=require("./Config/dbConfig");
const portfolioRoute = require("./routes/portfolioRoute")
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://frabjous-parfait-15b9c9.netlify.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.json());
app.use("https://avish-portfolio.onrender.com/api/portfolio",portfolioRoute);
const port=process.env.PORT || 5000;
const path = require("path");

// if(process.env.NODE_ENV === "production"){
//     app.use(express.static(path.join(__dirname,"client/build")));
//     app.get("*",(req,res)=>{
//         res.sendFile(path.join(__dirname,"client/build/index.html"))
//     })
// }

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
