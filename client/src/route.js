import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Login from "./LoginSignup/Login/Login";
import MovieDetail from "./Movie/Detail/Detail"

  const router = createBrowserRouter([    
    {
      path: "about",
      element: <div>About</div>,
    },
    {
        path: "login",
        element: <Login />
    },
    {
      path:"detail",
      element:<MovieDetail />
    }
  ]);

  export default router;