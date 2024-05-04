const  { pool } = require('../database') 

const getAllEmployees = async (page, pageSize) => {
    const offset = (page - 1) * pageSize;
    const [rows] = await pool.query(`SELECT * FROM employee LIMIT ?, ?`, [offset, pageSize]);
    return rows;
};


const addEmployee = async (name,department_id,dob,phone,email,photo,salary,status)=>{
    const data = await pool.query(`INSERT INTO employee (name,department_id,dob,phone,email,photo,salary,status) VALUES(?,?,?,?,?,?,?,?)`,[name,department_id,dob,phone,email,photo,salary,status])
    return data
}

const editEmployee = async (name,department_id, dob, phone, email, photo, salary, status,id) => {
    const data = await pool.query(`UPDATE employee SET name = ?, department_id = ?,dob = ?, phone = ?, email = ?, photo = ?, salary = ?, status = ? WHERE id = ?`, [name,department_id, dob, phone, email, photo, salary, status, id]);
    return data;
};

const deleteEmployee = async (id) => {
    const data = await pool.query(`DELETE FROM employee WHERE id = ?`, [id]);
    return data;
};


// i. Department-wise highest salary of employees
const getHighestSalaryByDepartment = async () => {
    const highestSalaryByDepartment = await pool.query(`
        SELECT department_id, MAX(salary) AS highest_salary 
        FROM employee 
        GROUP BY department_id
    `);
    return highestSalaryByDepartment[0];
};

// ii. Salary range-wise employee count
const getSalaryRangeCount = async () => {
    const salaryRangeCount = await pool.query(`
        SELECT 
            CASE 
                WHEN salary BETWEEN 0 AND 50000 THEN '0-50000'
                WHEN salary BETWEEN 50001 AND 100000 THEN '50001-100000'
                ELSE '100000+' 
            END AS salary_range,
            COUNT(*) AS count
        FROM employee 
        GROUP BY salary_range
    `);
    return salaryRangeCount[0];
};

// iii. Name and age of the youngest employee of each department
const getYoungestEmployeesByDepartment = async () => {
    const youngestEmployeesByDepartment = await pool.query(`
        SELECT 
            department_id,
            MIN(dob) AS youngest_dob,
            name 
        FROM employee 
        GROUP BY department_id
    `);
    return youngestEmployeesByDepartment[0];
};

module.exports = { getAllEmployees,addEmployee,editEmployee,deleteEmployee,getHighestSalaryByDepartment,getSalaryRangeCount,getYoungestEmployeesByDepartment }