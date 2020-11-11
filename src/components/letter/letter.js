import React from 'react';
import './letter.css';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Letter = props => {
    return(
        <Col style={{width: props.size}}id={props.value} value={props.value} className="letter">
        {String.fromCharCode(props.value)}
        </Col>
    )
}

export default Letter;