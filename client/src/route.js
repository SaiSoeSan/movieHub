import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Login from "./LoginSignup/Login/Login";
  
  const router = createBrowserRouter([    
    {
      path: "about",
      element: <div>About</div>,
    },
    {
        path: "login",
        element: <Login />
    },
  ]);

  export default router;