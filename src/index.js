import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";


 const Hio = [
   { name: "zalupa", age: 15},
   { name: "karlson", age: 19},
   { name: "kiska", age: 13}
 ].sort(function(obj1, obj2) {
   return obj1.age - obj2.age
 });

function App() {
  return (
    <div className="App">
    
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
