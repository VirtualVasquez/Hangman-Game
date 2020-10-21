import React from 'react';

// import Intro from './components/intro/Intro.js';
import Game from './components/game/game.js';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      wins: 0,
      chances: 6,
      subject: '',
      subjectArr: [],
      nameBank: ['alphys', 'asgore', 'flowey', 'mettaton', 'monsterkid', 'napstablook', 'papyrus', 'sans', 'toriel', 'undyne']
    }
    this.startGame=this.startGame.bind(this);
  }

  startGame = () => {
    let selected = this.state.nameBank[Math.floor(Math.random() * this.state.nameBank.length)];
    this.setState({
      subject: selected,
      subjectArr: [...selected].forEach(l => this.state.subjectArr.push("_"))
    })
  }


  render(){
    return(
      <div className="App">
        {/* <Intro /> */}
        <Game
          wins = {this.state.wins}
          subject = {this.state.subject} 
          chances = {this.state.chances}
          subjectArr = {this.state.subjectArr}
          start = {this.startGame}
        />
      </div>
    )
  }
}

export default App;
