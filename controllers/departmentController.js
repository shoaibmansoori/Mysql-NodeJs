const {  addDepartment ,getAllDepartment } = require('../services/departmentService')


const createDepartment = async (req,res)=>{
    try {
    const { name,status } = req.body;
    const data = await addDepartment(name,status)
    res.status(201).send(data)
    } catch (error) {
        return res.status(400).json({ message: `Error creating Employee `,error });
    }
}

const getDepartment = async (req,res)=>{
    try {
        // const { page, pageSize} = req.body
        const data = await getAllDepartment()
        res.send(data)
    } catch (error) {
        return res.status(400).json({ message: `Error getting Employee `,error });
    }
}

module.exports = {createDepartment,getDepartment}