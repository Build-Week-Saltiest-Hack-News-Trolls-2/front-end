import React from 'react'
import { Button, ListGroupItem, Fade } from 'reactstrap'


const Comment = (props) => {
    const { entry, onClick, buttonText, fadeIn } = props

    const addButtonIfLogged = () =>{

        if(localStorage.getItem("token")){
            return <Button color={(buttonText === 'Save' ? 'primary' : 'danger')} value={entry.id} onClick={onClick} >{buttonText} </Button>
        }
    }

    return (
        <ListGroupItem>
            <div className='comment'>
                {/* <div className='comment-username'>
                    <h3>{entry.user}</h3>
                </div> */}
                <div className='comment-text'><h3>{entry.user}</h3><p>{entry.text}{entry.comment}</p></div>
                {addButtonIfLogged()}
            </div>
        </ListGroupItem>
    )

}
export default Comment