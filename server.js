const express = require("express")
const bodyparser = require("body-parser")

const server = new express()
server.use(bodyparser.json())

server.get("/", (req, res) => {
    res.send("hello...")
})

server.get("/allusers", (req, res) => {
    const users = ["Ashish", "Swati"]
    res.send(users)
})

server.post('/adduser', (req, res) => {
    const userName = req.body.uname
    const userPass = req.body.password

    console.log(userName, userPass)
    res.send("OK")
})

server.listen(5000, () => {
    console.log("Sercer Started")
})
