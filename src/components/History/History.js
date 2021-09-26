import React from 'react';
import "./History.css"
const History = (props) => {
    console.log(props.history);
    const {history} =props;
    let total =0 ;
    for(const student of  history){
        total= total + student.salary;
    }
    return (
        <div className ="history">
            <h2>Students added: {props.history.length} </h2>
            <h3>Total Cost: {total} </h3>
        </div>
    );
};

export default History;