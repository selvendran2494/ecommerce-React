import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import Home from "./Home";
import About from "./About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";
import ProductDetail from "./ProductDetail";
import Counter from "./Counter";
import LoginForm from "./LoginForm";
import Todo from "./Todo";
import Classbased from "./Classbased";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"product/:id",
        element:<ProductDetail/>
      },
      {
        path:"/counter",
        element:<Counter/>
      },
      {
        path:"/LoginForm",
        element:<LoginForm/>
      },
      {
        path:"/todoList",
        element:<Todo/>
      },
      {
        path:"/classbased",
        element:<Classbased data = "SendingData"/>
      }
      
    ],
    errorElement:<PageNotFound/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
