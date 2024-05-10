import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
function App() {
  let myObj = {
    name: "ajmeri",
    age: 21,
  };

  let arrs = [1, 2, 3, 5];
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-700 rounded mb-2">
        Hello world!
      </h1>
      <Card college="UCER" btn="click me" />
      <Card college="UIM" />
    </>
  );
}

export default App;
