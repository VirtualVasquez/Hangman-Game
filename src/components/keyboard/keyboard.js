import React from 'react';
import './keyboard.css';
import Letter from '../letter/letter.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Keyboard = props => {
    const codes = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
    109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]
    const listLetters = codes.map((code) =>
        <Letter 
            key={code.toString()}
            value={code} 
        />
    )
    return(
        <Col id="keyboard">
            <Row>
                {listLetters}
            </Row>
        </Col>
    )
}

export default Keyboard;