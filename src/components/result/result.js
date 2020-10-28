import React from 'react';
import './result.css';

const Result = props => {
    return(
        <div id="result">
            <div>
                <img src={require('./dance.gif')} alt="w-l" id="w-l"/>
                {/* <h2 id="w-l-t">Correct!</h2> */}
            </div>
        </div>
    )
}

export default Result;