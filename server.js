const express = require('express') //API HTTP methods (POST, GET, PUT, DELETE)
const app= express()

//endpoints //role ni waiter
app.get('/', (req,res) => {
    res.send("<H1> Sinigeng </H1>")
}) 

//PORT
app.listen(777, () => {
    console.log('Server is running in port 777')
})