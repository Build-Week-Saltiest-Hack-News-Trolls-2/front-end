import React from 'react'
import CommentList from './CommentList'
import Header from './Header'
import { Container, Row, Col } from 'reactstrap'
import LoginForm from './LoginForm'

const HomePage = () => {

    return (
        <Container>
            <Row>
                <Col xs='9'>
                    <CommentList />
                </Col>
                <Col xs='3'>
                    <LoginForm />
                </Col>
            </Row>
        </Container>
    )
}
export default HomePage