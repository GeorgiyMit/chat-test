import React, { useState } from "react";
import {BrowserRouter} from 'react-router-dom'
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import Login from "./components/Login";
import './App.css'


function App() {
const [user,setUser]= useState(false)

const status = function(user){
  setUser(user)
}

const [text, setText] = useState('')
const textChange = (text) =>{
	 setText(text)
  



	 }
   
  return (
   
    <BrowserRouter>
    <Navbar text={text} user={user} onClick={status}/>
    <AppRouter  onChange={textChange} text={text} onClick={status} user={user}/>
    </BrowserRouter>
  
  );
}

export default App;
