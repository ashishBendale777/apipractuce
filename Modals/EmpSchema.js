const mongoose = require("mongoose")

const EmpSchema = mongoose.Schema({
    EmpName: String,
    EmpDept: String,
    EmpSalary: Number
})

module.exports = mongoose.model("Emp", EmpSchema)