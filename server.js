const express = require("express")
const bodyparser = require("body-parser")
const mongoose = require("mongoose")

const server = new express()
server.use(bodyparser.json())

mongoose.connect("mongodb://127.0.0.1:27017/practdb", {
    useNewUrlParser: true
}).then((result) => {
    console.log("DB Connected")
}).catch((err) => {
    console.log("Not Connected")
});

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

//setting routes
const routes = require("./Routes/Routes")
server.use("/api/", routes)

server.listen(5000, () => {
    console.log("Sercer Started")
})
