import React, { createContext } from 'react'
import ContextC from './ContextC';

const Rollno=createContext();
const ContextB = () => {
    return (
        <div>
        <Rollno.Provider value={"14431"}>
        <ContextC/>
        </Rollno.Provider>
           
        </div>
    )
}

export default ContextB;
export {Rollno};