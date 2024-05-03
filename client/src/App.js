import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"; // added single quotes around axios
import { ajax } from "./helper/helper";
function App() {
  // Initialize state for count
  const [count, setCount] = useState(0);

  // Function to increment count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement count
  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    const uri = process.env.REACT_APP_Api_End_Point + "api/user/view";
    const resp = ajax(uri, "GET", { message: "hello" });
    resp.then(function(response){
      console.log(response);
    }).catch(function(error){
      console.log(error);
    })
    
  }, [count]); // 


  return (
    <div className="App">
      {/* <h1>React Counter</h1> */}
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
