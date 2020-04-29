import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {CommentContext} from "./contexts/CommentContext";
import HomePage from "./components/HomePage"
import axios from "axios";

function App() {
  const [comments, setComments] = useState([]);
  
  useEffect(()=>{
    axios.get("") // this will fetch the whole list of commments and set them to global state
    .then(res=> {
      setComments(res);
    })
    .catch(err=>{
      console.log(err);
    })
  }, [])

  return (
    <Router >
      <div className="App">
        <Header />
        <HomePage />
      </div>
    </Router>
  )
}

export default App;
