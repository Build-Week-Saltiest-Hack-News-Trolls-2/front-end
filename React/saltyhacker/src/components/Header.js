import React, {useState, useContext, useEffect} from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from "styled-components";
import {CommentContext} from "../contexts/CommentContext";
import axios from "axios";

const MainNav = styled.nav`
display: flex;
width: 80%;
margin: 0 auto;
justify-content: space-between;
align-items: center;
background: #C46022;
padding: 0.3% 1%;
margin-bottom: 60px;
`
const SearchWrapper = styled.div`
width: 30%;
`
const SearchBar = styled.input`
width: 60%;
`
// {handleChanges, submitSearch, searchText}
const Header = () =>{
    const [searchText, setSearchText] = useState("");
    const {setComments} = useContext(CommentContext);
    const {comments} = useContext(CommentContext)
    const [commentList, setCommentList] = useState([]);

    useEffect(()=> {
        axios.get("https://kraf-saltyhacker.herokuapp.com/stats/comments/all")
        .then(res => {
            setCommentList(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const handleChanges = e => {
        setSearchText(e.target.value);
    }

    const handleLogout = () =>{
        alert("You have been logged out");
        localStorage.removeItem("token");
        window. location. reload(false);
    }

    const submitSearch = e => {
        e.preventDefault();
        const input = searchText.toLowerCase();
        const searchResults = commentList.filter( comment => {
            if (comment.user != null) {
                return comment.user.toLowerCase().includes(input)
            }
            
        })
        setComments(searchResults);
    }

    const HomeButton = () =>{
        if(localStorage.getItem("token")){
            return(<Link to="/letmein">Home</Link>)
        }
        else{
            return(<Link to="/">Home</Link>)
        }
    }

    return(
        <MainNav>
            <a href="https://salty-hacker2.netlify.app"><h2>Saltiest Hacker Troll</h2></a>
            
            {HomeButton()}
            <Link onClick={handleLogout} to="/">Log Out</Link>
            <SearchWrapper>
                <form onSubmit={submitSearch}>
                    <SearchBar
                        type="text"
                        name="search" 
                        value={searchText}
                        onChange={handleChanges}
                        />
                        <button>Search</button>
                </form>
            </SearchWrapper>
        </MainNav>

    )
}

export default Header;