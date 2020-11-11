import React from 'react';
import './intro.css';

const Intro = props => {
    return(
        <div id="intro">
            <div>
                <img src={require('./undertale.png')} alt="undertale" id="undertale"/>
                <p id="blink">Press Any Key To Start</p>
            </div>
        </div>
    )
}

export default Intro;