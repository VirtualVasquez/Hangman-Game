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
      right: [],
      wrong: []
    }
    this.newGame = this.newGame.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.addWin = this.addWin.bind(this);
    this.displayGuesses = this.displayGuesses.bind(this)
    this.getAllIndexes = this.getAllIndexes.bind(this)
  }
  
  componentDidMount(){
    this.newGame();
    window.addEventListener('keydown', this.handleKeyPress);    
  }

  newGame = () =>{
    let selected =  nameBank[Math.floor(Math.random()* nameBank.length)];
    let start = []
    for (let i = 0; i < selected.length; i++){
      start.push("_")
    }
    this.setState({
      chances: 6,
      subject:selected,
      picture: require('./subjects/'+selected+'.png'),
      right: [...start],
      wrong: []
    })

  }
  handleKeyPress = (e) =>{
    let check = this.state.subject;
    let found = this.state.right;
    let lost = this.state.wrong;
    let matInd = [];
    let c = String.fromCharCode(e.keyCode).toLowerCase();

    if(c.match(/[a-z]/g)){//don't penalize for key != letter
      let regex = new RegExp(c, "g");
      
      if(check.match(regex) && found.includes(c)===false){
        this.getAllIndexes(matInd,check, c);
        for(let n = 0; n < matInd.length; n++){
          found[matInd[n]] =  c
        }
        this.setState({
          right: found
        })
      } 
      if(!check.match(regex) && lost.includes(c)===false && lost.length < 6){
        lost.push(c)
        this.setState({
          wrong: lost
        })
        this.minusChance();
      }
    }

    if(this.state.subject == this.state.right.join("")){
      setTimeout(this.addWin, 100);
    }
    if(this.state.chances === 0){
      alert("You really are an idiot");
      this.newGame();
    }

  }

  addWin = () =>{
    this.setState((state) => ({
      wins: state.wins + 1
    }))
    this.newGame();
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
  getAllIndexes = (arr, str, a) => {
    for (let i = 0; i < str.length; i++){
      if(str.charAt(i) === a){
        arr.push(i)
      }
    }
  }

  
  render(){    

    return(
      <div >
          <Container>
            <Row id="master" >
              <Col xs={6} md={12} id="backdrop">
                <Image src={this.state.picture} id="game-pic" fluid />
              </Col>
              <Col xs={6} md={12} id="puzzle">
                <p>{this.state.right.join(" ")} </p>
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