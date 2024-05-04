const express = require('express')
const app = express()


app.use(express.json())
app.use('/employee',require("./routers/employeeRoute"))
app.use('/department',require("./routers/departmentRoute"))



app.listen(8080,()=>{
    console.log('Server is started on port 8080')
})