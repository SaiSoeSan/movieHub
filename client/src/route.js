import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
  
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
        element: <Login />,
      },
  ]);

  export default router;