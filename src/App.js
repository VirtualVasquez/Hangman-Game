import React from 'react';

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
      picture: require('./components/game/subjects/'+selected+'.png'),
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
    if(this.state.subject === this.state.right.join("")){
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
      <div className="App">
        {/* <Intro /> */}
        {/* <Game 
          onKeyPress={this.handleKeyPress}
          guesses={this.displayGuesses()}
          wins={this.state.wins}
          chances={this.state.chances}
          subject={this.state.subject}
          picture={this.state.picture}
          right={this.state.right}
          wrong={this.state.wrong}
        /> */}
        <Result />
      </div>
    )
  }
}

export default App;
