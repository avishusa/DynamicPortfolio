import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, setPortfolioData, showLoading, ReloadData } from "./redux/rootslice";
import Admin from "./pages/Admin";

function App() {
  const {loading, portfolioData, reloadData}=useSelector((state)=>state.root);
  const dispatch=useDispatch();
 const getPortfolioData = async ()=>{
  try {
    dispatch(showLoading());
    const response = await axios.get('/api/portfolio/get-portfolio-data');
    dispatch(setPortfolioData(response.data));
    dispatch(ReloadData(false));
    dispatch(HideLoading());
  } catch (error) {
    console.log(error);
    dispatch(HideLoading());
  }
 }
  useEffect(()=>{
    if(!portfolioData){
    getPortfolioData()
    }
  },[portfolioData])

  useEffect(()=>{
    if(reloadData){
    getPortfolioData()
    }
  },[reloadData])

  return (
    <BrowserRouter>
    {loading ? <Loader /> : null}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<Admin/>}/>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
