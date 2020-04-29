import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link, useHistory, Redirect } from 'react-router-dom';
import {CommentContext} from "./contexts/CommentContext";
import HomePage from "./components/HomePage"
import {axiosWithAuth} from "./utils/AxiosWithAuth";

function App() {
  const [comments, setComments] = useState([])

  const getComments = () => {
      axiosWithAuth()
                .get("/api/comments/all")
                .then(res => {
                    setComments(res.data)
                })
                .catch(err => console.log(err))
  }

  useEffect(() => {
      getComments()
  },[])

  const testLoggedIn = () => {
    if (localStorage.getItem('token')) {
      return <Redirect to="/letmein" />;
    } 
  }


  return (
    <Router >
      <div className="App">
        {testLoggedIn()};
        <CommentContext.Provider value={{comments, setComments}}>
          <Header />
        </CommentContext.Provider>
        <CommentContext.Provider value={{comments, setComments}}>
          <HomePage comments={comments} />
        </CommentContext.Provider>
      </div>
    </Router>
  )
}

export default App;
