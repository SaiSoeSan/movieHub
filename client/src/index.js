import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import router from './route';
import { GlobalProvider } from './components/GlobalContext';
import {
  RouterProvider,
} from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <GlobalProvider><RouterProvider router={router} /></GlobalProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
