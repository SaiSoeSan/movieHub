const loginService = require('./LoginSignup/LoginServer')
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB URL
const client = new MongoClient(url);

const express = require('express')
const app = express();
let path = require('path')
const cors = require('cors');


// // Server port
const PORT = process.env.PORT || 8000;

const options = {
  origin: 'http://localhost:3000',
  method: 'POST,GET,DELETE,PUT',
  allowedHeaders: 'Content-Type'
};

// //use cors
app.use(cors(options));


// //get parameter from request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// // use static for react
app.use(express.static(path.join(__dirname, "../client/build")))

// // app.use('*',(req,res) => {
// //     res.sendFile(path.join(__dirname,"../client/build","index.html"))
// // })

// app.get('/',(req,res) => {
//     res.send("hello")
// })

app.listen(PORT, (req, res) => {
  console.log(`Server is running on localhost:${PORT}`)
})

require('dotenv').config()
// const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = process.env.CONNECTION_STRING

// const client = new MongoClient(uri);
// console.log(client)

async function run() {
  try {
    // const database = client.db('sample_mflix');
    // const movies = database.collection('movies');

    // // Query for a movie that has the title 'Back to the Future'
    // const query = { title: 'Back to the Future' };
    // const movie = await movies.findOne(query);

    // console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
// run().catch(console.dir);


app.post('/login', (req, res) => {
  loginService.login(req.body.userId, req.body.password)
    .then(response => {
      res.send(response);
    });
})

//my dummy data
const myData = {
  username: 'username',
  password: 'my-password123',
}


//profile
app.get('/profile', (req, res) => {
  res.json(myData)
})

//update password
app.post('/updatePassword', (req, res) => {
  console.log('post', req.body)
  myData.password = req.body.updatePassword
  res.json({ 'update': 'completed' })
})

