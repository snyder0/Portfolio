import React from 'react';
import Header from '../Components/Header'
import { Container, Row, Col } from 'react-bootstrap'

function Home() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Row id="aboutMe">
          <Col sm={12} lg={4} className="hs1 mb-5"></Col>
          <Col sm={12} lg={8} className="mt-3">
            <h1>Professional Experience</h1>

            <h3 className="mb-3 lead">Bigfork Summer Playhouse (2018, 2019)</h3>
            <div className="text-left">
              <Row className="mb-3">
                <Col sm={12} lg={3}>
                  <h3><i>Oklahoma!</i></h3>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Will Parker</h4>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Dir. Matt Wolfe</h4>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={12} lg={3}>
                  <h3><i>All Shook Up</i></h3>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Dean Hyde</h4>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Dir. Dan Sharkey</h4>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={12} lg={3}>
                  <h3><i>The Wedding Singer</i></h3>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Boy George</h4>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Dir. Janie Slavens</h4>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={12} lg={3}>
                  <h3><i>The Little Mermaid</i></h3>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Flotsam</h4>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Dir. Jessica Low</h4>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={12} lg={3}>
                  <h3><i>Into the Woods</i></h3>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Steward</h4>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Dir. Scott Seidl</h4>
                </Col>
              </Row>
            </div>

            <h3 className="mt-3 mb-3 lead">Texas Panhandle Heritage Foundation (2017)</h3>
            <div className="text-left">
              <Row className="mb-3">
                <Col sm={12} lg={3}>
                  <h4>
                    <i>
                      Texas: The Outdoor<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Musical Drama
                    </i>
                  </h4>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Dancer</h4>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Choreo. Crystal Bertrand<br />Jerry Vizena</h4>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={12} lg={3}>
                  <h3><i>As You Like It</i></h3>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Touchstone</h4>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Dir. Andrew Lewis</h4>
                </Col>
              </Row>
            </div>

            <h3 className="mt-3 mb-3 lead">Shreveport Municipal (2016)</h3>
            <div className="text-left">
              <Row className="mb-3">
                <Col sm={12} lg={3}>
                  <h3><i>Nick Cave: As Is</i></h3>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Featured Dancer</h4>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Choreo. Nick Cave</h4>
                </Col>
              </Row>
            </div>

            <h3 className="mt-3 mb-3 lead">Acorn Theatre (2015-2016)</h3>
            <div className="text-left">
              <Row className="mb-3">
                <Col sm={12} lg={3}>
                  <h3><i>Romeo and Juliet</i></h3>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Romeo</h4>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Dir. Joni Bankston</h4>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={12} lg={3}>
                  <h3><i>Much Ado About Nothing</i></h3>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Claudio</h4>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Dir. Shane Stewart</h4>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={12} lg={3}>
                  <h3><i>A Midsummer Night’s Dream</i></h3>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Oberon</h4>
                </Col>
                <Col sm={12} lg={3}>
                  <h4>Dir. Shane Stewart</h4>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
