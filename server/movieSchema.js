const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    mainMovieName: String,
    subMovieName: String,
    cast: [String],
    movieType: String,
    releaseYear: Number,
    times: String,
    rating: String,
    description: String,
    subtitles: [String],
    audio: [String],
    genres: [String],
    comment: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;