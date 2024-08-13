import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";

import * as authService from '../src/LoginSignup/AuthService'
import Login from './LoginSignup/Login/Login'
import MyProfile from "./profile/MyProfile";
import Signup from "./LoginSignup/Signup/Signup";
  
  const router = createBrowserRouter([
    {
      path: "/",
      loader: authService.isLoggedIn,
       element: <Layout />,
      children: [
      {
        path: "/about",
        element: <div>About</div>,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
    },
    {
        path: "login",
        element: <Login />
    },
    {
      path:'profile',
      loader: authService.isLoggedIn,
      element:<MyProfile/>
    },{
      path: "signup",
      element: <Signup />
  }
  ]);

export default router;
