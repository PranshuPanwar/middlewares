/**
 * Created by Pranshu Panwar on 15-07-2017.
 */

const express = require('express');
const path = require('path');
const bp = require('body-parser');

const app = express();

const route = {
    student: require("./routes/students.js"),
    teacher : require('./routes/teachers.js')
};

app.use(bp.json());
app.use(bp.urlencoded({extended : true}));


app.use('/students',route.student);
app.use('/teachers', route.teacher);






app.listen(3200,function(req,res,next){
    console.log("Your server is hosting on http://localhost:3200")
});
