const loginService = require('./LoginSignup/LoginServer')

const express = require('express')
const app = express();
let path = require('path')
const cors = require('cors');

//movie schema
//const Movie = require('./movieSchema.js')

// // Server port
const PORT = process.env.PORT || 8000;

const options = {
    origin : 'http://localhost:3000',
    method : 'POST,GET,DELETE,PUT',
    allowedHeaders : 'Content-Type'
};

// //use cors
app.use(cors(options));


// //get parameter from request
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// // use static for react
app.use(express.static(path.join(__dirname,"../client/build")))

// // app.use('*',(req,res) => {
// //     res.sendFile(path.join(__dirname,"../client/build","index.html"))
// // })

// app.get('/',(req,res) => {
//     res.send("hello")
// })

app.listen(PORT,(req,res) => {
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


// // get all movies
// app.get('/movies', async (req, res) => {
//     try {
//         const movies = await Movie.find();
//         res.json(movies);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// // get single movie
// app.get('/movies/:id', async (req, res) => {
//     try {
//         const movie = await Movie.findById(req.params.id);
//         res.json(movie);
//     } catch (error) {
//         res.status(404).send("Movie not found");
//     }
// });


let sampleMovie =
{
    id: 1,
    mainMovieName: 'Terminator 2',
    subMovieName: 'Judgment Day',
    mainCast: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Edward Furlong'],
    movieType: 'Action',
    releaseYear: 1991,
    times: '137 mins',
    rating: 'R',
    description: 'Two Terminators travel from the future to track down Sarah Connor\'s young son, John: One machine is programmed to kill him, the other to protect him.',
    subtitles: ['English', 'Spanish (Latin America)'],
    audio: ['English - Audio Description', 'English [Original]', 'Spanish (Latin America)'],
    genres: ['Sci-Fi', 'Classic', 'Action & Adventure'],
    comment: 'Violent'
};

app.get('/api/movie/detail', (req,res)=>{
  res.json(sampleMovie);
})

app.get('/login',(req, res) => {

  loginService.login()
  .then(response => {
    res.send(response);
  });
})