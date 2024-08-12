import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Login from "./LoginSignup/Login/Login";
import App from "./App";
import * as authService from '../src/LoginSignup/AuthService'

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
      path: "/",
      loader: authService.isLoggedIn,
      element: <App />
  },
  ]);

  export default router;