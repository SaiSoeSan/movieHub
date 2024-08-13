import { useEffect, useState } from "react";

const Nav = () => {
    let baseUrl = 'http://localhost:8000';

    const [genres,setGenres] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(baseUrl+'/api/genres');
              const result = await response.json();
              setGenres(result);
              setLoading(false);
            } catch (error) {
              console.log(error);
              setLoading(false);
              // setError(error);
            } finally {
              // setLoading(false);
            }
          };
          // Call the fetchData function
          fetchData();  
    },[])
    console.log(genres)
    let isLoggedIn = true;
    return (
        <>
        <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{ backgroundColor: "#000" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand p-0" href="/">
            {/* <img src="/images/logo.png" alt="" width="110px" height="60px" /> */}
            <span className="text-danger">MyFlix</span>
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
                        {
                            loading && (
                                <div>Loading ...</div>
                            )
                        }
                        <div className="row">
                        {
                            !loading && (
                                genres.map((genre) => (
                                    <div className="col-md-4" key={genre._id}>{genre.name}</div>
                                ))
                            )
                        }
                        </div>
                        {/* <div className="row">
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
                        </div> */}
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
    </>
    )
}
export default Nav;