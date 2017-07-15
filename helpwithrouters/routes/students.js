/**
 * Created by Pranshu Panwar on 15-07-2017.
 */

const route = require('express').Router();


let students = [
    {name: "abhinav", age:20},
    {name : "khushal", age: 23},
    {name : "mohan" , age : 18}
];

route.get('/',function(req,res,next){
    res.send(students);

});

route.get('/:id',function(req,res,next){
    if(isNaN(parseInt(req.params.id))){
        next();
    }
    res.send(students[req.params.id-1])
});

route.post('/new', function(req,res){
    students.push({name: req.body.name,
    age : req.body.age})

    res.redirect(req.baseUrl)

});





module.exports=route;
