const express = require('express');
require("./db/connection");
const student = require("./models/students");

const app = express();
const port = process.env.port || 3000;
app.use(express.json());

app.get("/students", async(req, res) =>{
    
    try{
        const studentList = await student.find();
        res.status(201).send(studentList);

    } catch (e){
        res.status(400).send(e)
    }
})

// Student api to fill data...
app.post("/students",async(req, res) => {
    console.log(req.body);
    try{
        const user = new student(req.body);
        const saveData = await user.save();
        res.status(201).send(saveData);
    
    } catch(e){
        res.status(400).send(e);

    }
    
   /** 
    user.save().then(() => {
        res.status(201);
        res.send(user);
    }).catch((e)=> {
        res.status(400);
        res.send(e);
    })
    */
    //res.send("Hello from the other side..");
});

app.listen(port, () =>{
    console.log(`connection is setup ${port}`);
});   