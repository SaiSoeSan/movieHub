import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home";
import * as authService from "../src/LoginSignup/AuthService";
import Login from "./LoginSignup/Login/Login";
import Layout from "./components/Layout";

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
    element: <Login />,
  },
]);

export default router;
