import React from 'react'
import { Container, Col, ListGroup, Row } from 'react-bootstrap'

const MyFooter = () => (

<footer className="pt-4 border-top">
    <Container fixed="bottom">
        <Row className='justify-content-center'>
            <Col>
            <h4>Features</h4>
                <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>

                </ListGroup>
            </Col>
            <Col>
            <h4>Product</h4>
                <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>

                </ListGroup>
            </Col>
            <Col>
            <h4>About</h4>
                <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>

                </ListGroup>
            </Col>
            <Col>
            <h4>Contact us</h4>
                <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>

                </ListGroup>
            </Col>
        </Row>
    </Container>
</footer>
)

export default MyFooter