import React from 'react';
import './App.css';
<<<<<<< HEAD
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router >
      <div className="App">
        <Header />
        <Route exact path="/login">
          <LoginForm />
        </Route>
      </div>
    </Router>
=======
import Homepage from './components/HomePage'

function App() {
  return (
    <div className="App">
      <Homepage />
    </div>
>>>>>>> 417ad0adb46cc8dd187ae12ec6f6e965041325a8
  )
}

export default App;
