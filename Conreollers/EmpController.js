const Employee = require("../Modals/EmpSchema")

exports.addEmp = (req, res) => {
    const emp = new Employee({
        EmpName: req.body.EmpName,
        EmpDept: req.body.EmpDept,
        EmpSalary: req.body.EmpSalary
    })
    
    emp.save().then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        res.status(500).send(err)
    });
}

exports.getAllEmps = (req, res) => {
    Employee.find()
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            res.status(500).send(err)
        });
}