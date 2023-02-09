import SignIn from "./signin/SignIn";
import React from 'react';
import MainPage from "./MainPage";
import {Routes, Route} from "react-router";

const Routers = () => {
  return(
     <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/signin" element={<SignIn />}/>
     </Routes>
  )
}

export default Routers