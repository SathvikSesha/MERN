import { useState } from "react";

function EvenOdd() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  function Check() {
    const num = parseInt(number);
    if (isNaN(num)) {
      setResult("Please enter a valid number");
    } else {
      num % 2 === 0
        ? setResult("Even number")
        : setResult("Odd number");
    }
  }

  return (
    <div style={{height:'200px',width:'500px',margin:'auto'}}>
      <h1>Even Odd Calculator</h1>
      <input
        type="number"
        
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={Check}>Check</button>
      <h2>Result is: {result}</h2>
    </div>
  );
}

export default EvenOdd;
