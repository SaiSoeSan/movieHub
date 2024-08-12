import MovieList from "./MovieList";

const Home = () => {
  let isLoggedIn = true;
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{ backgroundColor: "#000" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand p-0" href="/">
            <img src="/images/logo.png" alt="" width="110px" height="60px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            {isLoggedIn && (
              <>
                <div className="dropdown-center">
                  <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Genres
                  </button>
                  <div className="dropdown-menu" style={{width:"600px"}}>
                      <div className="container">
                        <div className="row">
                            <div className="col-md-4">Action</div>
                            <div className="col-md-4">Crime</div>
                            <div className="col-md-4">Music</div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">Adventures</div>
                            <div className="col-md-4">Dramas</div>
                            <div className="col-md-4">Sports</div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">Anime</div>
                            <div className="col-md-4">Romance</div>
                            <div className="col-md-4">Horror</div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">Comedies</div>
                            <div className="col-md-4">Award-Winning</div>
                            <div className="col-md-4">Sci-Fi & Fanasty</div>
                        </div>
                      </div>
                  </div>
                </div>
                <form className="d-flex searchForm ms-2" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search Movie"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-danger" type="submit">
                    Search
                  </button>
                </form>
              </>
            )}
            {!isLoggedIn && (
              <button className="btn login-btn ms-2">Login</button>
            )}
          </div>
        </div>
      </nav>
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
