import React from 'react';

// import Intro from './components/intro/Intro.js';
import Result from './components/result/result.js';
import Game from './components/game/game.js';
import './App.css';


class App extends React.Component{

  render(){

    return(
      <div className="App">
        {/* <Intro /> */}
        <Game/>
        {/* <Result /> */}
      </div>
    )
  }
}

export default App;
