import React from 'react';
import './App.css';
import LoginForm from "./components/LoginForm";
import HomePage from './components/HomePage'
import Header from "./components/Header";
import { BrowserRouter as Router} from 'react-router-dom';

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
