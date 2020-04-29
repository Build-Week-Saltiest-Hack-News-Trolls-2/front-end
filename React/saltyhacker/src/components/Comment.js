import React from 'react'
import { Button, ListGroupItem } from 'reactstrap'


const Comment = (props) => {
    const { entry, onClick, buttonText } = props

    const addButtonIfLogged = () =>{

        if(localStorage.getItem("token")){
            return <Button color={(buttonText === 'Save' ? 'primary' : 'danger')} value={entry.id} onClick={onClick}>{buttonText}</Button>
        }
    }

    return (
        <ListGroupItem>
            <div className='comment'>
                <div className='comment-username'>
                    <h3>{entry.user}</h3>
                </div>
                <div className='comment-text'>{entry.comment}</div>
                {addButtonIfLogged()}
            </div>
        </ListGroupItem>
    )

}
export default Comment