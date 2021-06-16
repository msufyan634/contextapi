import React from "react";
import { Fname, Lname } from "../App";
import { Rollno } from "./ComB";
const ComC = () => {
  return (
    <div>
      <Fname.Consumer>
        {(fname) => {
          return (
            <Lname.Consumer>
              {(lname) => {
                return (
                  <Rollno.Consumer>
                    {(rollno) => {
                      return (
                        <>
                        <h1>
                        Contextapi with Consumer
                        </h1>
                        <h1>
                          My name is {fname} {lname} & Roll No. {rollno}
                        </h1>
                        </>
                      );
                    }}
                  </Rollno.Consumer>
                );
              }}
            </Lname.Consumer>
          );
        }}
      </Fname.Consumer>
    </div>
  );
};

export default ComC;
