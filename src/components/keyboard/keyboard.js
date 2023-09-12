import React from 'react';
import './keyboard.css';
import Letter from '../letter/letter.js';
import Row from 'react-bootstrap/Row';

const Keyboard = props => {

    const rowOne = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112]
    const rowTwo = [97, 115, 100, 102, 103, 104, 106, 107, 108]
    const rowThree = [122, 120, 99, 118, 98, 110, 109]
    
    const listOne = rowOne.map((first) =>
        <Letter 
            size={"10%"}
            key={first.toString()}
            value={first}
        />
    )
    const listTwo = rowTwo.map((second) =>
    <Letter 
        size={"10%"}
        key={second.toString()}
        value={second}
    />
    )
    const listThree = rowThree.map((third) =>
    <Letter 
        size={"9%"}
        key={third.toString()}
        value={third}
    />
    )
    
    if(!props.reveal){
        return null
    }
    return(
        <Row id="keyboard-container">
            <Row id="keyboard">
                <Row id="top">
                {listOne}
                </Row>
                <Row id="middle">
                {listTwo}
                </Row>
                <Row id="bottom">   
                {listThree}
                </Row>
            </Row>
        </Row>
    )
}

export default Keyboard;