import React from "react";
import Comment from './Comment'

const SavedList = ({savedList, deleteComment}) => {

    if (savedList === undefined || savedList.length === 0) {
        return (
            <div className='RightSideWrapper'>
                <h2>Saved List</h2>
                <p>No Saved Items.</p>
            </div>
            
        )
    }    

    return(
    <div className='RightSideWrapper'>
        <h2>Saved List</h2>
        {savedList.map(saved => <Comment entry={saved} key={saved.id} onClick={deleteComment} buttonText='Remove' />)}
    </div>
    
        
        )
}

export default SavedList;