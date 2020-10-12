import React from 'react';

import Intro from './components/intro/Intro.js';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      wins: 0,
      losses: 0,
      chances: 6,
      word: '',
      wordArr: [],
      wrongLetters: [], 
    }
  }
  render(){
    return(
      <div className="App">
        <Intro />
      </div>
    )
  }
}

export default App;