import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="  h-screen  duration-200 w-screen"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg rounded-3xl bg-white px-3 py-2">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="outline-none rounded-full shadow-xl"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>

          {/*  */}

          <button
            onClick={() => {
              setColor("green");
            }}
            className="outline-none rounded-full shadow-xl"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>

          {/*  */}

          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="outline-none rounded-full shadow-xl"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="outline-none rounded-full shadow-xl"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => {
              setColor("purple");
            }}
            className="outline-none rounded-full shadow-xl"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>

          <button
            onClick={() => {
              setColor("gray");
            }}
            className="outline-none rounded-full shadow-xl"
            style={{ backgroundColor: "gray" }}
          >
            gray
          </button>

          <button
            onClick={() => {
              setColor("white");
            }}
            className="outline-none rounded-full shadow-xl text-black"
            style={{ backgroundColor: "white" }}
          >
            white
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="outline-none rounded-full shadow-xl"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
