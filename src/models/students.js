const mongoose = require("mongoose");
const validateData = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true, 
        minLength: 3
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    phone: {
        type: String,
        minLength:9, 
        maxLength:11,
        required: true
    },
    address:{
        type: String,
        require: true
    }
})

// Created the model for schema..
const student = new mongoose.model('Student',studentSchema);
module.exports = student;