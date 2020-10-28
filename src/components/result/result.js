import React from 'react';
import './result.css';

const Result = props => {
    return(
        <div id="result">
            <div>
                <img src={require('../../images/dance.gif')} alt="win-lose" id="win-lose"/>
                <h2 id="win-lose-text">Correct!</h2>
            </div>
        </div>
    )
}

export default Result;