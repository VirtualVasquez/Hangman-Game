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
      <Row id="backdrop">
        <Col>
            <Image src={require('../../images/sans.png')} id="game-pic" fluid />
        </Col>
      </Row>
      <Row id="puzzle">
        <Col>
        <h2>_ _ _ _ _ _ _ _ _ _ _ _ - _ </h2>
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
        <Col>
          <Card>
            <Card.Body>FIGHT</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>ACT</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>ITEM</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>MUSIC</Card.Body>
          </Card>
        </Col>
      
      </Row>
    </Container>
  </div>
  )
}


export default Game;