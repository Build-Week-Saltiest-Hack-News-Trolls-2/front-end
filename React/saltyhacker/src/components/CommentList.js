import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/AxiosWithAuth'
import Comment from './Comment'
import axios from 'axios'
import { Button } from 'reactstrap'



const CommentList = () => {

const [comments, setComments] = useState([])

const getComments = () => {
    axiosWithAuth()
                .get("/api/comments/all")
                .then(res => {
                    setComments(res.data)
                    // push history to homepage 
                })
                .catch(err => console.log(err))
}

useEffect(() => {
    getComments()
},[])


    return (
        <div>
        <h2>Top Saltiest Comments</h2>
        {comments.map(comment => <Comment entry={comment} key={comment.id} />)}
        
        </div>
    )
}
export default CommentList
