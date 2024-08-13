const loginService = require('./LoginSignup/LoginServer')
const profileService = require('./Profile/Profile')

const express = require('express')
const app = express();
let path = require('path')
const cors = require('cors');


// Server port
const PORT = process.env.PORT || 8000;

const options = {
  origin: 'http://localhost:3000',
  method: 'POST,GET,DELETE,PUT',
  allowedHeaders: 'Content-Type'
};

// use cors
app.use(cors(options));


// get parameter from request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



// // use static for react
app.use(express.static(path.join(__dirname, "../client/build")))


// // // app.use('*',(req,res) => {
// // //     res.sendFile(path.join(__dirname,"../client/build","index.html"))
// // // })

// // app.get('/',(req,res) => {
// //     res.send("hello")
// // })

app.listen(PORT, (req, res) => {
  console.log(`Server is running on localhost:${PORT}`)
})

// require('dotenv').config()
// const { MongoClient } = require("mongodb");

// // Replace the uri string with your connection string.
// const uri = process.env.CONNECTION_STRING

const { MongoClient } = require("mongodb");
const databaseUrl = "mongodb://127.0.0.1:27017";
const client = new MongoClient(databaseUrl);

const database = client.db('mflix');

// app.post('/login',(req, res) => {
//   loginService.login(req.body.userId, req.body.password)
//   .then(response => {
//     res.send(response);
//   });
// })


app.get('/api/genres', async (req,res) => {
    try {
        const genres = database.collection('genres');
        const cursor = await genres.find(); 
        const allGenres = await cursor.toArray();
        res.json(allGenres)
    } catch (error) {
        
    }
app.post('/login', (req, res) => {
  loginService.login(req.body.email, req.body.password)
    .then(response => {
      res.send(response);
    });
})


//profile
app.post('/profile', (req, res) => {
  profileService.getUserInfoByEmail(req.body.email)
  .then((response) => {
    res.send(response)
  })
})

//update password
app.post('/updatePassword', (req, res) => {
  profileService.updatePasswordByEmail(req.body.userData.email,req.body.updatePassword)
  .then(response=>{
    res.send(response)
  })
})