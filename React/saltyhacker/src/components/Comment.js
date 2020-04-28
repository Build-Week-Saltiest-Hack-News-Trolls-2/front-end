import React from 'react'
import { Button } from 'reactstrap'

const Comment = (props) => {
    const { entry } = props

    return (
        <div className='comment'>
            <div className='comment-username'>
                <h3>{entry.user}</h3>
                <Button color="primary">Save</Button>
            </div>
            <div className='comment-text'>{entry.comment}</div>
        </div>
    )

}
export default Comment