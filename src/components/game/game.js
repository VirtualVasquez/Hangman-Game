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
      subjectArr: [],
      wrong: []
    }
    this.newGame = this.newGame.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.addWin = this.addWin.bind(this);
    this.displayGuesses = this.displayGuesses.bind(this)
  }
  
  componentDidMount(){
    this.newGame();

    window.addEventListener('keydown', this.handleKeyPress);
  }

  newGame = () =>{
    let selected =  nameBank[Math.floor(Math.random()* nameBank.length)];
    let arr = []
    for (let i = 0; i < selected.length; i++){
      arr.push("_")
    }
    this.setState({
      chances: 6,
      subject:selected,
      picture: require('./subjects/'+selected+'.png'),
      subjectArr: arr.join(" ")
    })
  }
  handleKeyPress = (e) =>{
    console.log(e.key);

    //Figure out what key was pressesd (SOLVED)
    //Compare key to current state.subject
      //if (subject contains e.key && subjectArr doesn't)
        //get all indexes of e.key in subject
        //replace "_" at index inside of subjectArr
        //setState to new subjectArr
        //play sound
      //if(e.key not found in subject & not already attempted)
        //minus one chance
        //push to state.wrong
        //play sound

      //if (subject == subjectArr.join(""))
        //display win screen

      //if (chances == 0)
        //display lose screen



  }
  addWin = () =>{
    this.setState((state) => ({
      wins: state.wins + 1
    }))
  }
  minusChance = () => {
    if(this.state.chances > 0){
      this.setState((state) => ({
        chances: state.chances - 1
      }))
    }
  }

  displayGuesses = () =>{
    let tried = this.state.wrong;
    return tried.join(", ")
  }

  //

  
  render(){    

    return(
      <div >
          <Container>
            <Row id="master" >
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
                  <p>{this.displayGuesses()}</p>
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