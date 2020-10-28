import React from 'react';
import './game.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';

// const nameBank =  ['alphys', 'asgore', 'flowey', 'mettaton', 'monsterkid', 'napstablook', 'papyrus', 'sans', 'toriel', 'undyne']


class Game extends React.Component{
  
  render(){    
    return(
      <div >
          <Container>
            <Row id="master" >
              <Col xs={6} md={12} id="backdrop">
                <Image src={this.props.picture} id="game-pic" fluid />
              </Col>
              <Col xs={6} md={12} id="puzzle">
                <p>{this.props.right.join(" ")} </p>
              </Col>
              <Col xs={12} id="stats">
                  <p id="wins">WINS LV {this.props.wins < 10 ? "0" + this.props.wins : this.props.wins}</p>
                  <div>
                    <p>HP</p>
                    <ProgressBar id="progress" now={this.props.chances * 16.666} variant="warning"/>
                    <p>{this.props.chances} / 6</p>
                  </div>
                  <p>{this.props.guesses}</p>
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
                  <Card.Body>MERCY</Card.Body>
                </Card>
              </Col>      
            </Row>
          </Container>
        </div>
    ) 
  }
}

export default Game;