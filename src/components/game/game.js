import React from 'react';
import './game.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';

class Game extends React.Component{
  render(){   

    return(
            <Row id="game">
              <Col xs={12} md={12} id="backdrop">
                <Image src={this.props.picture} id="game-pic" fluid />
              </Col>
              <Col xs={12} md={12} id="puzzle">
                <p>{this.props.right.join(" ")}</p>
                {/* <p>N a p s t a b l o o k</p> */}
              </Col>
              <Col xs={12} id="stats">
                  <p id="wins">WINS LV {this.props.wins < 10 ? "0" + this.props.wins : this.props.wins}</p>
                  <div>
                    <p>HP</p>
                    <ProgressBar id="progress" now={this.props.chances * 16.666} variant="warning"/>
                    <p>{this.props.chances} / 6</p>
                  </div>
                  <p id="guesses">{this.props.guesses}</p>
              </Col>
              <Col xs={12} id="buttons">
                <Card>
                  <Card.Body id="fight">FIGHT</Card.Body>
                </Card>
                <Card>
                  <Card.Body className="annoying">ACT</Card.Body>
                </Card>
                <Card>
                  <Card.Body className="annoying">ITEM</Card.Body>
                </Card>
                <Card>
                  <Card.Body className="annoying">MERCY</Card.Body>
                </Card>
              </Col>
            </Row>
    ) 
  }
}

export default Game;