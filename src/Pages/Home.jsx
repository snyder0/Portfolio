import React from 'react';
import Header from '../Components/Header'
import { Container, Row, Col } from 'react-bootstrap'

function Home() {
  return (
    <div className="App">
      <Header />
      <Container id="aboutMe">
        <Row>
          <Col sm={12} lg={4} className="mb-5">
            <div className="hs1"></div>
          </Col>
          <Col sm={12} lg={8} className="mt-3">
            <h1>Professional Experience</h1>

            <h3 className="mb-3">Bigfork Summer Playhouse (2018, 2019)</h3>
            <div className="text-left list-group">
              <Row className="list-group-item shadow mb-3">
                <Col sm={12} lg={12}>
                  <h1><i>Oklahoma!</i></h1>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Will Parker</h4>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Dir. Matt Wolfe</h4>
                </Col>
              </Row>
              <Row className="list-group-item shadow mb-3">
                <Col sm={12} lg={12}>
                  <h1><i>All Shook Up</i></h1>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Dean Hyde</h4>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Dir. Dan Sharkey</h4>
                </Col>
              </Row>
              <Row className="list-group-item shadow mb-3">
                <Col sm={12} lg={12}>
                  <h1><i>The Wedding Singer</i></h1>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Boy George</h4>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Dir. Janie Slavens</h4>
                </Col>
              </Row>
              <Row className="list-group-item shadow mb-3">
                <Col sm={12} lg={12}>
                  <h1><i>The Little Mermaid</i></h1>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Flotsam</h4>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Dir. Jessica Low</h4>
                </Col>
              </Row>
              <Row className="list-group-item shadow mb-3">
                <Col sm={12} lg={12}>
                  <h1><i>Into the Woods</i></h1>
                </Col>
                <Col sm={12} lg={5}>
                  <h4>Steward</h4>
                </Col>
                <Col sm={12} lg={5}>
                  <h4>Dir. Scott Seidl</h4>
                </Col>
              </Row>
            </div>

            <h3 className="mt-3 mb-3">Texas Panhandle Heritage Foundation (2017)</h3>
            <div className="list-group text-left">
              <Row className="list-group-item shadow mb-3">
                <Col sm={12} lg={12}>
                  <h1>
                    <i>
                      Texas: The Outdoor Musical Drama
                    </i>
                  </h1>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Dancer</h4>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Choreo. Crystal Bertrand<br />Jerry Vizena</h4>
                </Col>
              </Row>
              <Row className="list-group-item shadow mb-3">
                <Col sm={12} lg={12}>
                  <h1><i>As You Like It</i></h1>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Touchstone</h4>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Dir. Andrew Lewis</h4>
                </Col>
              </Row>
            </div>

            <h3 className="mt-3 mb-3">Shreveport Municipal (2016)</h3>
            <div className="text-left">
              <Row className="list-group-item shadow mb-3">
                <Col sm={12} lg={12}>
                  <h1><i>Nick Cave: As Is</i></h1>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Featured Dancer</h4>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Choreo. Nick Cave</h4>
                </Col>
              </Row>
            </div>

            <h3 className="mt-3 mb-3">Acorn Theatre (2015-2016)</h3>
            <div className="list-group text-left">
              <Row className="list-group-item shadow mb-3">
                <Col sm={12} lg={12}>
                  <h1><i>Romeo and Juliet</i></h1>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Romeo</h4>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Dir. Joni Bankston</h4>
                </Col>
              </Row>
              <Row className="list-group-item shadow mb-3">
                <Col sm={12} lg={12}>
                  <h1><i>Much Ado About Nothing</i></h1>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Claudio</h4>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Dir. Shane Stewart</h4>
                </Col>
              </Row>
              <Row className="list-group-item shadow mb-3">
                <Col sm={12} lg={12}>
                  <h1><i>A Midsummer Night’s Dream</i></h1>
                </Col>
                <Col sm={12} lg={6}>
                  <h4>Oberon</h4>
                </Col>
                <Col sm={12} lg={6}>
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
