//App.jsx
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Favourites from './components/Favourites'
import { Routes, Route } from "react-router-dom"
import {FavContext} from "./context/favcontext.js"
import { useEffect, useState } from 'react'

function App() {
  const [fav,setfav] = useState(()=>{
      const favs=localStorage.getItem("fav");
      if(favs){
        return JSON.parse(favs);
        // console.log(JSON.parse(favs));
      }else{
        return []
      }
  });
  useEffect(()=>{
      const favs=localStorage.getItem("fav");
      if(favs){
        setfav(JSON.parse(favs));
        // console.log(JSON.parse(favs));
      }
  },[])
  useEffect(()=>{
      localStorage.setItem("fav",JSON.stringify(fav));
  },[fav])
  return (
    <FavContext.Provider value={{fav,setfav}}>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </div>
    </FavContext.Provider>
  )
}

export default App
