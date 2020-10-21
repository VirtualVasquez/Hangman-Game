import React from 'react';
import './game.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';

const nameBank =  ['alphys', 'asgore', 'flowey', 'mettaton', 'monsterkid', 'napstablook', 'papyrus', 'sans', 'toriel', 'undyne']


class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      wins: 0,
      chances: 6,
      subject: '',
      picture: '',
      subjectArr: []
    }
  }
  componentDidMount(){
    let selected =  nameBank[Math.floor(Math.random()* nameBank.length)];
    let arr = []
    for (let i = 0; i < selected.length; i++){
      arr.push("_")
    }
    this.setState({
      subject:selected,
      picture: require('./subjects/'+selected+'.png'),
      subjectArr: arr.join(" ")
    })
  }
  
  render(){    
    return(
      <div>
          <Container >
            <Row id="master">
              <Col xs={6} md={12} id="backdrop">
                <Image src={this.state.picture} id="game-pic" fluid />
              </Col>
              <Col xs={6} md={12} id="puzzle">
                <p>{this.state.subjectArr} </p>
              </Col>
              <Col xs={12} id="stats">
                  <p id="wins">WINS LV {this.state.wins < 10 ? "0" + this.state.wins : this.state.wins}</p>
                  <div>
                    <p>HP</p>
                    <ProgressBar id="progress" now={this.state.chances * 16.666} variant="warning"/>
                    <p>{this.state.chances} / 6</p>
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
}


// const Game = props =>{




//   return(
  
//   )
// }


export default Game;