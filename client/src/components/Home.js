import MovieList from "./MovieList";
import Nav from "./Nav";
import { useEffect, useContext, Fragment, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { genres, movies, loading } = useContext(GlobalContext);
  const [searchParams] = useSearchParams();
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);

  let queryGenre = searchParams.get("genre");
  let queryName = searchParams.get("name");

  console.log(queryName)

  let baseUrl = "http://localhost:8000";

  useEffect(() => {
    // This code will run whenever the query parameters change
    if (queryGenre != null) {
      const myMovies = movies.filter((movie) =>
        movie.genres.includes(queryGenre)
      );
      setSelectedMovies(myMovies);
    } else if (queryName != null) {
      const myMovies = movies.filter((movie) =>
        movie.mainMovieName.toLowerCase().includes(queryName.toLowerCase())
      );
      setSearchedMovies(myMovies);
    }
    // You can fetch or filter data based on the genre here
  }, [location.search]);


  return (
    <div>
      <main className="mainHome">
        <div className="container-fluid mt-5 mb-5">
          <h1 className="movieHead">Movies</h1>
          <div className="row">
            <div className="col-md-5">
              <p className="movieHomeDesc">
                Movies move us like nothing else can, whether they’re scary,
                funny, dramatic, romantic or anywhere in-between. So many
                titles, so much to experience.
              </p>
            </div>
          </div>

          {
            queryName != null && queryName !== '' && (
              <MovieList movies={searchedMovies} title="Search Movie(s)" />
            )
          }
          {queryGenre != null && (
            <MovieList movies={selectedMovies} title={queryGenre} />
          )}

          {(queryGenre == null && queryName == null)  &&
            genres.map((genre) => {
              const filteredMovies = movies.filter((movie) =>
                movie.genres.includes(genre.name)
              );
              return (
                <Fragment key={genre.name}>
                  <MovieList movies={filteredMovies} title={genre.name} />
                </Fragment>
              );
            })}
        </div>
      </main>
      <div></div>
    </div>
  );
};

export default Home;
