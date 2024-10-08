const loginService = require('./LoginSignup/LoginServer')
const signupService = require('./LoginSignup/SignupServer')
const profileService = require('./Profile/Profile')
const movieServce = require('./Movie/Movie')
const genres = require('./Movie/Genres')
const movie = require('./Movie/Movie')

const express = require('express')
const app = express();
let path = require('path')
const cors = require('cors');
var allMovies;

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



// use static for react
app.use(express.static(path.join(__dirname, "../client/build")))

app.listen(PORT, (req, res) => {
  console.log(`Server is running on localhost:${PORT}`)
})

const { log } = require('console');
const { ObjectId } = require('mongodb')

app.get('/api/genres', async (req, res) => {
  genres.getAllGenres()
    .then(response => {
      res.send(response)
    });
})

app.post('/login', (req, res) => {
  loginService.login(req.body.email, req.body.password)
    .then(response => {
      res.send(response);
    });
})

app.post('/signup', (req, res) => {
  signupService.signup(req.body.email, req.body.password, req.body.name)
    .then(response => {
      res.send(response);
    });
})

app.get('/api/allmovies', async (req, res) => {
  // const database = client.db('mflix');
  // const movies = database.collection('movies');
  // const total = await movies.countDocuments(); 

  // res.json(total);


  movie.getMoviesCount()
    .then(response => {
      res.json(response)
    });
})

app.get('/api/movies', async (req, res) => {
  // const page = parseInt(req.query.page) || 0;
  // const pageSize = parseInt(req.query.pageSize) || 4; 

  // try {
  //   const database = client.db('mflix');
  //   //console.log(database);
  //   const movies = database.collection('movies');
  //   //const movies = db.collection('movies');

  //   const cursor = movies.find({})
  //                        .skip(page * pageSize)
  //                        .limit(pageSize);
  //   const allMovies = await cursor.toArray();
  //   //console.log(allMovies);
  //   res.json(allMovies);
  // } catch (error) {
  //   console.error("Failed to fetch movies", error);
  //   res.status(500).send("Error fetching movies");
  // }
  movie.getAllMovies()
    .then(response => {
      res.send(response)
    });
});

app.get('/api/movie/detail/:_id', async (req, res) => {
  const { _id } = req.params;
  // console.log("fetch detail");
  // console.log(_id);

  // try {
  //   const database = client.db('mflix');
  //   //console.log(database);
  //   const movies = database.collection('movies');
  //   //const movies = db.collection('movies');
  //   const query = { _id: new ObjectId(_id) };
  //   const movie = await movies.findOne(query);
  //   console.log(movie);
  //   // const query = { _id: new ObjectId(queryID) };
  //   // const movie = await movies.findOne(query);
  //   // const allMovies = await cursor.toArray();
  //   // console.log(allMovies);
  //   res.json(movie);
  // } catch (error) {
  //   console.error("Failed to fetch movies", error);
  //   res.status(500).send("Error fetching movies");
  // }

  movie.getMovieDetails({ _id: new ObjectId(_id) })
    .then(response => {
      res.send(response)
    });

});

app.get('/api/movies/genre/:genre', async (req, res) => {
  const genre = req.params.genre;
 
  const movies = await movie.getMoviesByGenre(genre);
  if (movies.length > 0) {
      res.json(movies);
  } else {
      res.status(404).send({ message: 'No movies found for this genre' });
  }
});

//profile
app.post('/profile', (req, res) => {
  profileService.getUserInfoByEmail(req.body.email)
    .then((response) => {
      res.send(response)
    })
})

//update password
app.post('/updatePassword', (req, res) => {
  profileService.updatePasswordByEmail(req.body.userData.email, req.body.updatePassword)
    .then(response => {
      res.send(response)
    })
})

//add favorite
app.post('/addFavorite', (req, res) => {
  //check is favorite
  movieServce.addFavoriteByEmailAndMovieId(req.body.email, req.body.movieId)
    .then(response => {
      res.send(response)
    })
})

//is favorite
app.post('/isFavorite', (req, res) => {
  movieServce.isFavorite(req.body.email, req.body.movieId)
    .then(response => response.data)
    .then(data => res.send(data == null ? false : true))
})

//remove favorite
app.post('/removeFavorite', (req, res) => {
  movieServce.removeFavoriteByEmailAndMovieID(req.body.email, req.body.movieId)
    .then(response => {
      res.send(response)
    })
})

//favorite
app.post('/favorite', async (req, res) => {
  try {
    // Step 1: Fetch the favorite movies for the user by their email
    const favorites = await movie.getFavorite();

    // Step 2: Extract the movie IDs for the given user
    const movieIds = favorites
      .filter(item => item.email === req.body.email)
      .map(i => i.movieId);

    // Step 3: Get all movies and filter based on the favorite movie IDs
    const allMovies = await movie.getAllMovies();
    const favoriteMovies = movieIds.map(id =>
      allMovies.find(movie => movie._id.equals(new ObjectId(id)))
    );
    res.send(favoriteMovies);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    res.status(500).send('An error occurred while processing your request.');
  }
})