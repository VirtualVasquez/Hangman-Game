import React from 'react';
import './result.css';

const Result = props => {
        if(props.won){
            return(
                <div className="result">
                    <div>
                        <img src={require('../../images/dance.gif')} alt="win" className="win-lose" id="win"/>
                        <h2 id="win-lose-text">Correct!</h2>
                    </div>
                </div>
            )
        }
        if(!props.won){
            return(
                <div className="result">
                    <div>
                        <img src={require('../../images/lost.png')} alt="lose" className="win-lose" id="lose"/>
                    </div>
                </div>
            )
        }


}

export default Result;