const express = require("express")

const server = new express()

server.get("/", (req, res) => {
    res.send("hello...")
})

server.get("/allusers",(req,res)=>{
    const users=["Ashish","Swati"]
    res.send(users)
})

server.listen(5000, () => { 
    console.log("Sercer Started")
})
