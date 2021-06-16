import React from 'react'
import {Fname,Lname} from '../App'
import { Rollno } from './ContextB';
const ContextC = () => {
    const fname=React.useContext(Fname);
    const lname=React.useContext(Lname);
    const rollno=React.useContext(Rollno);
    return (
        <div>
            <h1>useContext React Hooks</h1>
            <h1>My name is {fname} {lname} & Roll No.{rollno}</h1>
        </div>
    )
}

export default ContextC
