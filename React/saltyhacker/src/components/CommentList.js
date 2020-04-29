import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/AxiosWithAuth'
import Comment from './Comment'
import axios from 'axios'
import { Button } from 'reactstrap'
import {CommentContext} from "../contexts/CommentContext";



const CommentList = () => {
    const {comments} = useContext(CommentContext)

    return (
        <div>
        <h2>Top Saltiest Comments</h2>
        {comments.map(comment => <Comment entry={comment} key={comment.id} />)}
        
        </div>
    )
}
export default CommentList
