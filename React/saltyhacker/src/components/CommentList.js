import React from 'react'
import Comment from './Comment'
import { ListGroup } from 'reactstrap'


const CommentList = ({comments, saveComment}) => {

    const isNegative = (comment) => {
        return comment.sentiment === 1
    }
    return (
        <div className='comments'>
            <h2>Top Saltiest Comments</h2>
            <ListGroup>
            {comments.filter(isNegative).map(comment => <Comment entry={comment} key={comment.id} onClick={saveComment} buttonText={'Save'} />)}
            </ListGroup>
        </div>
    )
}
export default CommentList
