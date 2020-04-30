import React, { useState, useEffect } from 'react'
import CommentList from './CommentList'
import { Container, Row, Col } from 'reactstrap'
import LoginForm from './LoginForm'
import ProtectedRoute from "./ProtectedRoute"
import { Route } from "react-router-dom"
import SavedList from "./SavedList"
import {axiosWithAuth} from '../utils/AxiosWithAuth'

const HomePage = ({comments}) => {

    const [savedList, setSavedList] = useState([])
    const [toSave, setToSave] = useState(null)
    const [toDelete, setToDelete] = useState(null)
    
    const saveComment = (e) => {
        const selectedId = e.target.value
            if (savedList.find(saved => saved.id == selectedId)) {
                console.log("Already exists")
            } else {
                const selected = comments.find(comment => comment.id == selectedId)
                setToSave(selected)
            }

    }

    const deleteComment = (e) => {
        const selectedId = e.target.value
        setToDelete(selectedId)

    }

    useEffect(() => {
        if (toSave) {
            axiosWithAuth().post('/api/comments', toSave)
            .then(res => {
                setToSave(null)

            })
            .catch(err => {
                debugger
                console.log(err)
            })
        } else if (toDelete) {
            axiosWithAuth().delete(`/api/comments/${toDelete}`)
            .then(res => {
                setToDelete(null)
            })
            .catch(err => {
                debugger
            })
        }
    },[toSave, toDelete])
    
    useEffect(() => {
        axiosWithAuth().get("/api/comments/")
        .then(res => {
            setSavedList(res.data) 
        })
        .catch(err => console.log(err))
    },[toSave, toDelete])
    
    
    
    
    
    return (
        <Container>
            <Row>
                <Col xs='8'>
                    <CommentList comments={comments} saveComment={saveComment} />
                </Col>
                <Col xs='4'>
                    <Route exact path = "/"><LoginForm /></Route>
                    <ProtectedRoute exact path="/letmein" component={() => <SavedList savedList={savedList} deleteComment={deleteComment} />} />
                </Col>
            </Row>
        </Container>
    )
}
export default HomePage