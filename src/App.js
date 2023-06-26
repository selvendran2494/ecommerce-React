// import './App.css';

import Footer from "./Footer";
import Header from "./Header";
import {Outlet} from "react-router-dom";

const App = () =>{
  return <div>
    <Header/>  
    <Outlet/>
    <Footer/>   
  </div>
}
// const appRouter = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>,
//       },{
//         path:"/about",
//         element:<About/>
//       }
//     ]
//   }
// ])




export default App

