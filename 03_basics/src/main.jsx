import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function Myapp() {
  const user = "ajmeri";
  return (
    <>
      <h1>Custom App!{user}</h1>
    </>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

const another = "chai or code";
const ReactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Click me to visit google",
  another
);

ReactDOM.createRoot(document.getElementById("root")).render(ReactElement);
