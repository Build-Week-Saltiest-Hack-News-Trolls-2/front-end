import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from '../utils/AxiosWithAuth'
import Comment from './Comment'
import {CommentContext} from "../contexts/CommentContext"

const SavedList = () => {

const [savedList, setSavedList] = useState()
const [toAdd, setToAdd] = useState(null)
const {comments} = useContext(CommentContext)



useEffect(() => {
    //saveComment()
    axiosWithAuth().get("/api/comments/")
    .then(res => {
        setSavedList([...savedList, res.data])
        // push history to homepage 
    })
    .catch(err => console.log(err))
},[comments])

    if (savedList === undefined || savedList.length === 0) {
        return (
            <div>
                <h2>Saved List</h2>
                <p>No Saved Items.</p>
            </div>
            
        )
    }    

    return(
    <div>
        <h1>Saved List</h1>
        {savedList.map(saved => <Comment entry={saved} key={saved.id} />)}
    </div>
    
        
        )
}

export default SavedList;