import React, { createContext } from "react";
import "./App.css";
import ComA from "./contextapi/ComA";
import ContextA from "./useContextHook/ContextA";
const Fname = createContext();
const Lname = createContext();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fname.Provider value={"Muhammad"}>
          <Lname.Provider value={"Sufyan"}>
            {/* <ComA /> */}
            <ContextA/>
          </Lname.Provider>
        </Fname.Provider>
      </header>
    </div>
  );
}

export default App;
export { Fname, Lname };
