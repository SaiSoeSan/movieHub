import MovieList from "./MovieList";
import Nav from "./Nav";

const Home = () => {
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
          <div className="row"></div>
          <MovieList />
          <MovieList />
          <MovieList />
          <MovieList />
          <MovieList />
        </div>
      </main>
      <div></div>
    </div>
  );
};

export default Home;
