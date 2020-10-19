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
        <Col xs={6} md={12} id="backdrop">
          <Image src={require('../../images/sans.png')} id="game-pic" fluid />
        </Col>
        <Col xs={6} md={12} id="puzzle">
          <p>_ _ _ _ _ _ _ _  _ _ _ _ </p>
        </Col>
        <Col xs={12} id="stats">
            <p id="wins">WINS LV 00</p>
            <div>
              <p>HP</p>
              <ProgressBar id="progress" now={50} variant="warning"/>
              <p>6 / 6</p>
            </div>
        </Col>
        <Col xs={12} id="buttons">
          {/* <Row>
            <Col xs={3}>
              <Card>
                <Card.Body>FIGHT</Card.Body>
              </Card>
            </Col>
            <Col xs={3}>
              <Card>
                <Card.Body>FIGHT</Card.Body>
              </Card>
            </Col>
            <Col xs={3}>
              <Card>
                <Card.Body>FIGHT</Card.Body>
              </Card>
            </Col>
            <Col xs={3}>
              <Card>
                <Card.Body>FIGHT</Card.Body>
              </Card>
            </Col>
          </Row> */}
          <Card>
            <Card.Body>FIGHT</Card.Body>
          </Card>
          <Card>
            <Card.Body>ACT</Card.Body>
          </Card>
          <Card>
            <Card.Body>ITEM</Card.Body>
          </Card>
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