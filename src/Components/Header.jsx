import React from 'react'
import { Container, Jumbotron, Row, Col } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Jumbotron fluid>
                <Container className="text-left">
                    <Row className="justify-content-lg-left">
                        <Col sm={12} lg={6}>
                           <h1 className="header-title mt-5">Joey Douglas Carroll</h1>
                            <h4 className="lead header-subtitle animated infinite bounce delay-2s">
                                Performing Artist
                                <br /> + Actor
                            </h4>
                        </Col>
                        <Col sm={12} lg={6} className="header-image"></Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Header;
