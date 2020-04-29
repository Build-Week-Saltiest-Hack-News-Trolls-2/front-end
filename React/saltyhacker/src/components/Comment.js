import React from 'react'
import { Button } from 'reactstrap'

const Comment = (props) => {
    const { entry } = props

    const addButtonIfLogged = () =>{
        if(localStorage.getItem("token")){
            return <Button color="primary">Save</Button>
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