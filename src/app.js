const express = require('express');
require("./db/connection");
const app = express();
const port = process.env.port || 3000;

app.get("/",(req, res) =>{
    res.send("Hello get..");
})

app.post("\students",(req, res) => {
    res.send("Hello from the other side..");
});

app.listen(port, () =>{
    console.log(`connection is setup ${port}`);
});   