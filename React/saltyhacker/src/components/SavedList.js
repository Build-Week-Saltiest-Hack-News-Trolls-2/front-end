import React from "react";
import Comment from './Comment'

const SavedList = ({savedList, deleteComment}) => {

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
        {savedList.map(saved => <Comment entry={saved} key={saved.id} onClick={deleteComment} buttonText='Delete' />)}
    </div>
    
        
        )
}

export default SavedList;