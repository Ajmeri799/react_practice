import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;
  const AddValue = () => {
    // console.log("Value added", Math.random());
    // counter = counter + 1;
    console.log(counter);
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const RemoveValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  console.log("ajmeri");
  return (
    <>
      <h1>Chai aur React{counter}</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={AddValue}>Add Value</button>
      <button onClick={RemoveValue}>Remove Value{counter}</button>
    </>
  );
}

export default App;
