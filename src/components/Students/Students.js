import React, { useEffect, useState } from 'react';
import History from '../History/History';
import Information from '../Information/Information';
import './Students.css'
const Students = () => {
    const [students, setStudents]=useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setStudents(data))
    },[])
    const handleAddToCart =(student) =>{
        console.log(student);
    }
    return (
        <div className = "students">
            <div className="info">
                
                {
                    students.map(student=><Information 
                        key ={student.id}
                        student={student}
                        handleAddToCart ={handleAddToCart}
                        ></Information>)
                }


            </div>
            <div className="history">
                <History></History>

            </div>
        </div>
    );
};

export default Students;