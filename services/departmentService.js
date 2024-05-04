const  { pool } = require('../database') 


const addDepartment = async (name,status)=>{
    const data = await pool.query(`INSERT INTO department (name,status) VALUES(?,?)`,[name,status])
    return data
}

const getAllDepartment = async ()=>{
    const [rows] = await pool.query(`SELECT * FROM department`)
    return rows
}


module.exports  = { addDepartment ,getAllDepartment }