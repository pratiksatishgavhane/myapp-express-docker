const express=require("express")
const db=require("../db")
const utils= require("../utils")
const router=express();

router.use(express.json())
router.get("/", (request, response)=>
{
    var connection = db.connect();
    const query= "select * from Emp"

    connection.query(query, (err,data)=>
    {
        connection.end();
        response.send(utils.createResult(err,data))
    })
    
});


router.post("/", (request, response)=>
{
    var connection = db.connect();
    const{No, Name, Age}=request.body;
    const query= `insert into Emp(No,Name,Age) values(${No},'${Name}', ${Age})`;
    connection.query(query, (err,data)=>
    {    
        connection.end();
        response.send(utils.createResult(err,data))
    })

});

module.exports= router;