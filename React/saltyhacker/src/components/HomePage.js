import React from 'react'
import CommentList from './CommentList'
import Header from './Header'
import { Container, Row, Col } from 'reactstrap'
import LoginForm from './LoginForm'
import ProtectedRoute from "./ProtectedRoute"
import { Route } from "react-router-dom"
import SavedList from "./SavedList"

const HomePage = () => {

    return (
        <Container>
            <Row>
                <Col xs='9'>
                    <CommentList />
                </Col>
                <Col xs='3'>
                    <Route exact path = "/"><LoginForm /></Route>
                    <ProtectedRoute exact path="/letmein" component={SavedList} />
                </Col>
            </Row>
        </Container>
    )
}
export default HomePage