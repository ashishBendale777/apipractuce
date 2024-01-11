const express = require("express")
const bodyparser = require("body-parser")
const mongoose = require("mongoose")

const multer = require('multer')
const path = require('path')



const server = new express()
server.use(bodyparser.json())

mongoose.connect("mongodb://127.0.0.1:27017/practdb", {
    useNewUrlParser: true
}).then((result) => {
    console.log("DB Connected")
}).catch((err) => {
    console.log("Not Connected")
});

//storage config
const fileStorage = multer.diskStorage({
    destination: 'Uploads',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

//upload config
const uploadConfig = multer({
    storage: fileStorage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new Error('Upload Correct file'))
        }
        cb(undefined, true)
    }
})

server.post('/uploadfile', uploadConfig.single('image'), (req, res) => {
    res.status(200).json({
        filepath: "/images/".concat(req.file.filename),
        uploaded: true
    })
}, (err, req, res, next) => {
    res.status(400).send({ error: err.message })
})


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

server.use(express.static("Uploads"));
server.use("/images", express.static("Uploads"));


server.listen(5000, () => {
    console.log("Sercer Started")
})
