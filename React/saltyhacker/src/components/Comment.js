import React, { useContext } from 'react'
import { Button } from 'reactstrap'
import {CommentContext} from "../contexts/CommentContext"


const Comment = (props) => {
    const {comments} = useContext(CommentContext)
    const { entry } = props

    const saveComment = (e) => {
        const selectedId = 1
        console.log('Current comments:',comments)
        const selected = comments.find(({id}) => id === selectedId)
        console.log(selected)
        //post to endpoint with selected to add to database
        //add returned object to savedlist and render page
    }

    const addButtonIfLogged = () =>{
        if(localStorage.getItem("token")){
            return <Button color="primary" value={entry.id} onClick={()=> console.log(entry.id)}>Save</Button>
        }
    }

    return (
        <div className='comment'>
            <div className='comment-username'>
                <h3>{entry.user}</h3>
                {addButtonIfLogged()}
            </div>
            <div className='comment-text'>{entry.comment}</div>
        </div>
    )

}
export default Comment