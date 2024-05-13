import Chai from "./chai";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1>numberCount</h1>
      <p>count:{count}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </>
  );
}

export default App;
