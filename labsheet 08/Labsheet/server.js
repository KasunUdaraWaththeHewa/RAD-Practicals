const express = require("express");
const app=express();

app.get('/',(req,res)=>{
    res.send("Successful Response");
});

app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

const port=3000;
app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`);
});