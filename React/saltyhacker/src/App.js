import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Link, useHistory, Redirect } from 'react-router-dom';
import {CommentContext} from "./contexts/CommentContext";
import HomePage from "./components/HomePage"
import {axiosWithAuth} from "./utils/AxiosWithAuth";
//import { data } from './utils/data'

function App() {
  const [comments, setComments] = useState([])
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const getComments = () => {
    setIsLoading(true)
      axiosWithAuth()
                .get("https://kraf-saltyhacker.herokuapp.com/stats/comments/all")
                .then(res => {
                  setIsLoading(false)
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

  // Search functionality

  const handleChanges = e => {
    setSearchText(e.target.value);
}
const commentList = {...comments}

const submitSearch = e => {
  e.preventDefault();
  const searchResults = [];
  const input = searchText.toLowerCase();
  for(let i=0; i<commentList.length; i++){
      if(commentList[i].user.toLowerCase().includes(input)){
          searchResults.push(commentList[i]);
      }
  }
  debugger
  setComments(searchResults);
}


  return (
    <Router >
      <div className="App">
        {testLoggedIn()};
        <CommentContext.Provider value={{comments, setComments}}>
          <Header handleChanges={handleChanges} submitSearch={submitSearch} searchText={searchText} />
          </CommentContext.Provider>
        <CommentContext.Provider value={{comments, setComments}}>
          <HomePage comments={comments} isLoading={isLoading} />
        </CommentContext.Provider>
      </div>
    </Router>
  )
}

export default App;
