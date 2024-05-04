const {  addEmployee,getAllEmployees, editEmployee,deleteEmployee,getHighestSalaryByDepartment,getSalaryRangeCount,getYoungestEmployeesByDepartment } = require('../services/employeeService')


const createEmployee = async (req,res)=>{
    try {
    const { name,department_id,dob,phone,email,photo,salary,status } = req.body;
    const data = await addEmployee(name,department_id,dob,phone,email,photo,salary,status)
    res.status(201).send(data)
    } catch (error) {
        return res.status(400).json({ message: `Error creating Employee `,error });
    }
}

const updateEmployee = async (req,res)=>{
    try {
    const id = req.params.id;
    const { name,department_id,dob,phone,email,photo,salary,status } = req.body;
    const data = await editEmployee(name,department_id,dob,phone,email,photo,salary,status,id)
    res.status(201).send(data)
    } catch (error) {
        return res.status(400).json({ message: `Error updating Employee `,error });
    }
}


const getEmployee = async (req,res)=>{
    try {
        const { page, pageSize} = req.body
        const data = await getAllEmployees(page,pageSize)
        res.send(data)
    } catch (error) {
        return res.status(400).json({ message: `Error getting Employee `,error });
    }
}



const deleteEmploye = async (req,res)=>{
    try {
            const id = req.params.id;
            const data = await deleteEmployee(id)
            res.send(data)
    } catch (error) {
        return res.status(400).json({ message: `Error deleting a Employee `,error });
    }
}


const getHighestSalary = async (req,res)=>{
    try {
            const data = await getHighestSalaryByDepartment()
            console.log("data",data)
            res.send(data)
    } catch (error) {
        return res.status(400).json({ message: `Error  getHighestSalary `,error });
    }
}

const getSalaryRange = async (req,res)=>{
    try {
            const id = req.params.id;
            const data = await getSalaryRangeCount()
            res.send(data)
    } catch (error) {
        return res.status(400).json({ message: `Error getSalaryRange `,error });
    }
}

const getYoungestEmployees = async (req,res)=>{
    try {
            const data = await getYoungestEmployeesByDepartment()
            res.send(data)
    } catch (error) {
        return res.status(400).json({ message: `Error getYoungestEmployees `,error });
    }
}

module.exports = { createEmployee,updateEmployee,getEmployee,deleteEmploye,getHighestSalary,getSalaryRange,getYoungestEmployees }