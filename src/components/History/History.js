import React from 'react';
import "./History.css"
const History = (props) => {
    
    return (
        <div className ="history">
            <h2>Students added: {props.history.length} </h2>
            <h3>Total Cost: </h3>
        </div>
    );
};

export default History;