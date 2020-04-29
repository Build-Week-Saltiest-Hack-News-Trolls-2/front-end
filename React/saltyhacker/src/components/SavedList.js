import React, { useState, useEffect, useContext } from "react";
import { axiosWithAuth } from '../utils/AxiosWithAuth'
import Comment from './Comment'
import {CommentContext} from "../contexts/CommentContext"

const SavedList = ({savedList, deleteComment}) => {


const {comments} = useContext(CommentContext)


    if (savedList === undefined || savedList.length == 0) {
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
        {savedList.map(saved => <Comment entry={saved} key={saved.id} onClick={deleteComment}/>)}
    </div>
    
        
        )
}

export default SavedList;