// const express = require('express')
// const app = express();
// let path = require('path')
// const cors = require('cors');

// // Server port
// const PORT = process.env.PORT || 8000;

// const options = {
//     origin : 'http://localhost:3000',
//     method : 'POST,GET,DELETE,PUT',
//     allowedHeaders : 'Content-Type'
// };

// //use cors
// app.use(cors(options));


// //get parameter from request
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))


// // use static for react
// // app.use(express.static(path.join(__dirname,"../client/build")))

// // app.use('*',(req,res) => {
// //     res.sendFile(path.join(__dirname,"../client/build","index.html"))
// // })

// app.get('/',(req,res) => {
//     res.send("hello")
// })

// app.listen(PORT,(req,res) => {
//     console.log(`Server is running on localhost:${PORT}`)
// })

require('dotenv').config()
const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
// const uri = "mongodb+srv://saisoesan:oeUF6oTbrCqLMx2r@movieprojectcluster.bwogg.mongodb.net/?retryWrites=true&w=majority&appName=MovieProjectCluster";

const uri = process.env.CONNECTION_STRING

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);