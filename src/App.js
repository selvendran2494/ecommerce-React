// import './App.css';

import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const App = () =>{
  return <div>
    <Header/>
    <Home/>
    <Footer/>   
  </div>
}
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },{
        path:"/about",
        element:<About/>
      }
    ]
  }
])




export default App

