import React from 'react';
import Container from 'react-bootstrap/Container';
import Intro from './components/intro/Intro.js';
import Result from './components/result/result.js';
import Game from './components/game/game.js';
import Keyboard from './components/keyboard/keyboard.js';
import './App.css';

const nameBank =  ['alphys', 'asgore', 'flowey', 'mettaton', 'monsterkid', 'napstablook', 'papyrus', 'sans', 'toriel', 'undyne']

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      wins: 0,
      chances: 6,
      subject: '',
      picture: '',
      right: [],
      wrong: [],
      won: '',
      showIntro:true,
      showGame:false,
      showResult:false,
      showKeyboard: false
    }
    this.newGame = this.newGame.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.displayGuesses = this.displayGuesses.bind(this)
    this.getAllIndexes = this.getAllIndexes.bind(this)
    this.checkEntry = this.checkEntry.bind(this)
    this.handleButtonPress = this.handleButtonPress.bind(this)
  }
  
  componentDidMount(){
      window.addEventListener('keydown', this.handleKeyPress);
      window.addEventListener('click', this.handleClick);
      
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
      picture: require(`./components/game/subjects/${selected}.png`),
      right: [...start],
      wrong: [],
      won:'',
      showIntro: false,
      showGame: true,
      showResult: false
    })
  }
  showResult = (bool) =>{
    this.setState({
      showGame: false,
      showResult: true,
      won: bool
    })
  }
  checkEntry = (guess) =>  {
    let {subject, right, wrong} = this.state;
    let matInd = [];
    if(guess.match(/[a-z]/g)){//don't penalize for key != letter
        let regex = new RegExp(guess, "g");
        if(subject.match(regex) && !right.includes(guess)){
          this.getAllIndexes(matInd,subject, guess);
          for(let n = 0; n < matInd.length; n++){
            right[matInd[n]] =  guess
          }
          this.setState({
            right: right
          })
        } 
        if(!subject.match(regex) && !wrong.includes(guess) && wrong.length < 6){
          wrong.push(guess)
          this.setState({
            wrong: wrong
          })
          if(this.state.chances > 0){
            this.setState((state) => ({
              chances: state.chances - 1
            }))
          }
        }
    }
    if(subject === right.join("")){
      this.setState((state) => ({
        wins: state.wins + 1
      }))
      this.showResult(true)
    }
    if(this.state.chances === 0){
      this.showResult(false)
    }
  }
  handleKeyPress = (e) =>{
    if(!this.state.showGame){
      return this.newGame()
    }else{

     let c = String.fromCharCode(e.keyCode).toLowerCase();
      this.checkEntry(c);
    }
  }
  handleClick = (e) =>{
    if (!this.state.showGame){
      this.setState({
        showIntro: false,
        showGame: true,
        showResult: false
      })
      this.newGame();
    }
    if(this.state.showKeyboard){
      this.handleButtonPress(e);
    }
    if(e.target.id === "fight"){
      this.setState({
        showKeyboard: !this.state.showKeyboard
      })
    }
  }
  handleButtonPress = (e) =>{
    let c = String.fromCharCode(e.target.id);
    this.checkEntry(c)
  }

  displayGuesses = () =>{
    let tried = this.state.wrong;
    return tried.join(",")
  }
  getAllIndexes = (arr, str, a) => {
    for (let i = 0; i < str.length; i++){
      if(str.charAt(i) === a){
        arr.push(i)
      }
    }
  }
  render(){
    let {showIntro, showGame, showResult} = this.state;

    if(showIntro && !showGame && !showResult){
      return <div className="App"><Intro onKeyPress={this.showGame}  onClick={this.handleClick} /></div>
    }

    if(!showIntro && showGame && !showResult){
      return (
        <Container className="App">
          <Game 
            onKeyPress={this.handleKeyPress}
            guesses={this.displayGuesses()}
            wins={this.state.wins}
            chances={this.state.chances}
            subject={this.state.subject}
            picture={this.state.picture}
            right={this.state.right}
            wrong={this.state.wrong}
          />
          <Keyboard 
            onClick={this.handleButtonPress} 
            reveal={this.state.showKeyboard}
          />
        </Container>
      )
    }
    
    if(!showIntro && !showGame && showResult){
      return (
        <div className="App">
          <Result won={this.state.won} onClick={this.handleClick}/>
        </div>
      )
    }


  }
}

export default App;
