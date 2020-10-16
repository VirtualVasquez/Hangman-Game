import React from 'react';
import './game.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';


const Game = props =>{
  return(
  <div>
    <Container>
      <Row id="master">
        <Col xs={6} id="backdrop">
          <Image src={require('../../images/sans.png')} id="game-pic" fluid />
        </Col>
        <Col xs={6} id="puzzle">
        </Col>
        <Col xs={12} id="stats">
          <Row>
            <Col xs={4}>
              <p id="wins">WINS LV 00</p>
            </Col>
            <Col xs={1}>
              <p>HP</p>
            </Col>
            <Col id="prog-col" xs={2}>
              <ProgressBar id="progress" now={50} variant="warning"/>
            </Col>
            <Col xs={2}>
              <p>6 / 6</p>
            </Col>
          </Row>
        </Col>
        <Col xs={12} id="buttons">
        </Col>      
      </Row>


      {/* <Row id="backdrop">
        <Col>
            <Image src={require('../../images/sans.png')} id="game-pic" fluid />
        </Col>
      </Row>
      <Row id="puzzle">
        <Col>
        <p>_ _ _ _ _ _ _ _ _ _ _ _ _ _ </p>
        </Col>
      </Row>
      <Row id="stats">
        <Col>
          <p id="wins">WINS 00</p>
        </Col>
        <Col>
            <Row>
              <Col md={2}>
                <p>HP</p>
              </Col>
              <Col md={4} id ="bar-col">
                    <ProgressBar id="progress" now={50} variant="warning"/>
              </Col>
              <Col md={6}>
                <p>6 / 6</p>
              </Col>
            </Row>
        </Col>
        <Col>
        </Col>
      </Row>
      <Row id="buttons">
        <Col lg={3}>
          <Card>
            <Card.Body>FIGHT</Card.Body>
          </Card>
        </Col>
        <Col lg={3}>
          <Card>
            <Card.Body>ACT</Card.Body>
          </Card>
        </Col>
        <Col lg={3}>
          <Card>
            <Card.Body>ITEM</Card.Body>
          </Card>
        </Col>
        <Col lg={3}>
          <Card>
            <Card.Body>MUSIC</Card.Body>
          </Card>
        </Col>
      
      </Row> */}
    </Container>
  </div>
  )
}


export default Game;