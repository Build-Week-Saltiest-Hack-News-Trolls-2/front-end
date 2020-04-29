import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/AxiosWithAuth'
import Comment from './Comment'

const SavedList = () => {

const [savedList, setSavedList] = useState()

useEffect(() => {
    axiosWithAuth().get("/api/comments/")
    .then(res => {
        setSavedList([...savedList, res.data])
        // push history to homepage 
    })
    .catch(err => console.log(err))
},[])

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