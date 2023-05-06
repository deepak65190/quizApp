import { useState } from "react";
import Core from "./Core";
import Quiz from "./Quiz";
import Result from "./Result";
import "../styles/App.css";
import {createBrowserRouter ,RouterProvider} from "react-router-dom"
function App() {
  const router=createBrowserRouter([
    {path:"/",element:<Core>roote quiz</Core>} ,
    {path:"/quiz",element:<Quiz>quiz</Quiz>} ,
    {path:"/result",element:<Result>result</Result>} ,
  ])
  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
