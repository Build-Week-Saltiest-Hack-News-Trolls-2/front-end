import React, { useState, useEffect } from 'react'
import CommentList from './CommentList'
import { Container, Row, Col } from 'reactstrap'
import LoginForm from './LoginForm'
import ProtectedRoute from "./ProtectedRoute"
import { Route, Switch } from "react-router-dom"
import SavedList from "./SavedList"
import {axiosWithAuth} from '../utils/AxiosWithAuth'

const HomePage = ({comments, isLoading}) => {

    const [savedList, setSavedList] = useState([])
    const [toSave, setToSave] = useState(null)
    const [toDelete, setToDelete] = useState(null)
    const [fadeIn, setFadeIn] = useState(true)

    const renameKey = obj => {
        let value = obj.text
        obj.comment = value
        obj['text'] = obj['comment']
        delete obj['text']

        return obj
    }
    
    const saveComment = (e) => {
        const selectedId = e.target.value
            if (savedList.find(saved => saved.id == selectedId)) {
                console.log("Already exists")
            } else {
                const selected = comments.find(comment => comment.id == selectedId)
                const key = renameKey(selected)
                setToSave(key)
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
    
    
    if (isLoading) {
        return (
            <Container>
                <Row>
                    <h2>Loading...</h2>
                </Row>
            </Container>
        
        )
    }
    
    
    return (
        <Container>
            <Row>
                <Col xs='8'>
                    <CommentList comments={comments} saveComment={saveComment} />
                </Col>
                <Col xs='4'>
                    <Switch>
                        <ProtectedRoute exact path="/letmein" component={() => <SavedList savedList={savedList} deleteComment={deleteComment} fadeIn={fadeIn}/>} />
                    </Switch>
                    <Switch>
                        <Route exact path = "/"><LoginForm /></Route>
                    </Switch>
                </Col>
            </Row>
        </Container>
    )
}
export default HomePage