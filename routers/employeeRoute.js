const express = require('express');
const router = express.Router();
const { createEmployee,updateEmployee,getEmployee,deleteEmploye,getHighestSalary,getSalaryRange,getYoungestEmployees} = require('../controllers/employeeController')



router.route('/').post(createEmployee);
router.route('/').get(getEmployee);
router.route('/:id').put(updateEmployee);
router.route('/:id').delete(deleteEmploye);
router.route('/getHighestSalary').get(getHighestSalary);
router.route('/getSalaryRange').get(getSalaryRange);
router.route('/getYoungestEmployees').get(getYoungestEmployees);






module.exports = router; 