const express = require('express')
const app = express();
let path = require('path')
const cors = require('cors');

// Server port
const PORT = process.env.PORT || 8000;

const options = {
    origin : 'http://localhost:3000',
    method : 'POST,GET,DELETE,PUT',
    allowedHeaders : 'Content-Type'
};

//use cors
app.use(cors(options));


//get parameter from request
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// use static for react
// app.use(express.static(path.join(__dirname,"../client/build")))

// app.use('*',(req,res) => {
//     res.sendFile(path.join(__dirname,"../client/build","index.html"))
// })

app.get('/',(req,res) => {
    res.send("hello")
})

app.listen(PORT,(req,res) => {
    console.log(`Server is running on localhost:${PORT}`)
})