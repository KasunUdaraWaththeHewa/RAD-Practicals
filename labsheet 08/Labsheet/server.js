const express = require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send("Successful Response");
});

const port=3000;
app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});