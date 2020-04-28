import React from 'react';
import './App.css';
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
  )
}

export default App;
