import { useEffect, useContext } from "react";
import { GlobalContext } from './GlobalContext';

const Nav = () => {
  const { genres, loading } = useContext(GlobalContext);
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
                  <div className="dropdown-menu" style={{ width: "600px" }}>
                    <div className="container">
                      {loading && <div>Loading ...</div>}
                      <div className="row">
                        {!loading &&
                          genres.map((genre) => (
                            <div className="col-md-4" key={genre._id}>
                              {genre.name}
                            </div>
                          ))}
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
                <ul className="ms-3 navbar-nav" style={{cursor:"pointer"}}>
                  <li className="nav-item dropdown">
                    <div
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      UserName
                    </div>
                    <ul className="dropdown-menu dropdown-menu-dark" style={{left:"-80px"}}>
                      <li>
                        <a className="dropdown-item" href="#">
                          View Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          LogOut
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </>
            )}
            {!isLoggedIn && (
              <button className="btn login-btn ms-2">Login</button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
