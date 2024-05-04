const express = require('express');
const router = express.Router();
const { createDepartment,getDepartment} = require('../controllers/departmentController')



router.route('/').post(createDepartment);
router.route('/').get(getDepartment);
// router.route('/:id').put(updateEmployee);
// router.route('/:id').delete(deleteEmploye);
// router.route('/getHighestSalary/:id').get(getHighestSalary);
// router.route('/:getSalaryRange').get(getSalaryRange);
// router.route('/getYoungestEmployees/:id').get(getYoungestEmployees);

// router.route('/:id').put(loginUser);
// router.route('/:id').delete(loginUser);




module.exports = router; 