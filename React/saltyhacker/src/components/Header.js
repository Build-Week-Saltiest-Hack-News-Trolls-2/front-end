import React, {useState} from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from "styled-components";

const MainNav = styled.nav`
display: flex;
width: 80%;
margin: 0 auto;
justify-content: space-between;
align-items: center;
background: #C46022;
padding 0.3% 1%;
`
const SearchWrapper = styled.div`
width: 30%;
`
const SearchBar = styled.input`
width: 60%;
`

const Header = () =>{
    const [searchText, setSearchText] = useState("");
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
            <h2>Saltiest Hacker Troll</h2>
            
            {HomeButton()}
            <Link onClick={handleLogout} to="/">Log Out</Link>
            <SearchWrapper>
                <form>
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