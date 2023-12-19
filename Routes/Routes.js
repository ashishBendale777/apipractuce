const express = require("express")
const router = express.Router()

const EmpController = require("../Conreollers/EmpController")

router.post("/addemp", EmpController.addEmp)
router.get("/allemps", EmpController.getAllEmps)


module.exports = router
