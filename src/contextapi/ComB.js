import React, { createContext } from "react";
import ComC from "./ComC";
const Rollno = createContext();
const ComB = () => {
  return (
    <div>
      <Rollno.Provider value={"17"}>
        <ComC />
      </Rollno.Provider>
    </div>
  );
};

export default ComB;
export { Rollno };
