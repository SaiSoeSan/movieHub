import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Login from "./LoginSignup/Login/Login";
import Home from "./components/Home";
import Detail from "./Movie/Detail/Detail";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    {
        path: "login",
        element: <Login />
    },
    {
      path: "movie/:_id",  // Route for movie details
      element: <Detail />
    },
  ]);

  export default router;