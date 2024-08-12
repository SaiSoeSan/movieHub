import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Home from "./components/Home";
import * as authService from '../src/LoginSignup/AuthService'
import Login from './LoginSignup/Login/Login'
import Signup from "./LoginSignup/Signup/Signup";
  
  const router = createBrowserRouter([
    {
      path: "/",
      loader: authService.isLoggedIn,
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
      path: "signup",
      element: <Signup />
  }
  ]);

  export default router;