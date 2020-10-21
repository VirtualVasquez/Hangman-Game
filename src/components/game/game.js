import React, { Component } from 'react';
import './game.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';


const Game = props =>{
  let barStat = props.chances * 16.666;
  
  let level = (() => {
    if(props.wins < 10){
      return "0" + props.wins
    } else{
      return props.wins
    }
  })



  return(
  <div>
    <Container>
      <Row id="master">
        <Col xs={6} md={12} id="backdrop">
          <Image src={require('../../images/sans.png')} id="game-pic" fluid />
        </Col>
        <Col xs={6} md={12} id="puzzle">
          <p>{props.subject} </p>
        </Col>
        <Col xs={12} id="stats">
            <p id="wins">WINS LV {level()}</p>
            <div>
              <p>HP</p>
              <ProgressBar id="progress" now={barStat} variant="warning"/>
              <p>{[props.chances]} / 6</p>
            </div>
        </Col>
        <Col xs={12} id="buttons">
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