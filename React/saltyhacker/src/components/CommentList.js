import React from 'react'
import Comment from './Comment'


const CommentList = ({comments, saveComment}) => {

    return (
        <div>
            <h2>Top Saltiest Comments</h2>
            {comments.map(comment => <Comment entry={comment} key={comment.id} onClick={saveComment} />)}
        </div>
    )
}
export default CommentList
