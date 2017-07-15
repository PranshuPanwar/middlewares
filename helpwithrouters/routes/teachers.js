/**
 * Created by Pranshu Panwar on 15-07-2017.
 */
const route = require('express').Router();


let teachers =[
    {name:"rahul", age:34},
    {name : "aman", age:23},
    {name : 'ayush',age:20}
];

route.get('/',(req,res)=>{
    res.send(teachers);

})


route.get('/:id',(req,res)=>{

if(isNaN(parseInt(req.params.id))){
    next();}

    res.send(teachers[req.params.id-1]);

});

module.exports=route;