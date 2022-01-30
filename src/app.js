const express = require('express');
require("./db/connection");
const student = require("./models/students");

const app = express();
const port = process.env.port || 3000;
app.use(express.json());

app.get("/",(req, res) =>{
    res.send("Hello get..");
})

// Student api to fill data...
app.post("/students",(req, res) => {
    console.log(req.body);
    const user = new student(req.body);
    user.save().then(() => {
        res.status(201);
        res.send(user);
    }).catch((e)=> {
        res.status(400);
        res.send(e);
    })
    //res.send("Hello from the other side..");
});

app.listen(port, () =>{
    console.log(`connection is setup ${port}`);
});   