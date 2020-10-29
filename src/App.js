import React from 'react';
// import ReactDOM from "react-dom";
import Intro from './components/intro/Intro.js';
import Result from './components/result/result.js';
import Game from './components/game/game.js';
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
      showResult:false
    }
    this.newGame = this.newGame.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.addWin = this.addWin.bind(this);
    this.displayGuesses = this.displayGuesses.bind(this)
    this.getAllIndexes = this.getAllIndexes.bind(this)
  }
  
  componentDidMount(){
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
      picture: require('./components/game/subjects/'+selected+'.png'),
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

  handleKeyPress = (e) =>{
    if(!this.state.showGame){
      return this.newGame()
    }else{
      let {subject, right, wrong} = this.state;
      let matInd = [];
      let c = String.fromCharCode(e.keyCode).toLowerCase();
      if(c.match(/[a-z]/g)){//don't penalize for key != letter
        let regex = new RegExp(c, "g");
        if(subject.match(regex) && right.includes(c)===false){
          this.getAllIndexes(matInd,subject, c);
          for(let n = 0; n < matInd.length; n++){
            right[matInd[n]] =  c
          }
          this.setState({
            right: right
          })
        } 
        if(!subject.match(regex) && wrong.includes(c)===false && wrong.length < 6){
          wrong.push(c)
          this.setState({
            wrong: wrong
          })
          this.minusChance();
        }
      }
      if(this.state.subject === this.state.right.join("")){
        this.addWin();
        this.showResult(true)
      }
      if(this.state.chances === 0){
        this.showResult(false)
      }
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
    let {showIntro, showGame, showResult} = this.state;
    if(showIntro && !showGame && !showResult){
      return <div className="App"><Intro onKeyPress={this.showGame} onClick={this.showGame} /></div>
    }
    if(!showIntro && showGame && !showResult){
      return (
        <div className="App">
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
        </div>
      )
    }
    if(!showIntro && !showGame && showResult){
      return (
        <div className="App">
          <Result won={this.state.won}/>
        </div>
      )
    }


  }
}

export default App;
