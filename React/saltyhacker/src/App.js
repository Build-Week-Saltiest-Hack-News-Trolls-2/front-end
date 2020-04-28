import React from 'react';
import './App.css';
import CommentList from "./components/CommentList"
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage"
import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
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
