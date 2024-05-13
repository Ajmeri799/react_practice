import { useRef, useState } from "react";
import "./App.css";
import { useCallback } from "react";
import { useEffect } from "react";
function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  const passwordRef = useRef(null);
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "123456789";
    if (charAllowed) str += "!@#$%^&*(){}~`";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, charAllowed, PasswordGenerator]);

  return (
    <>
      <div className=" w-screen text-orange-500 max-w-md mx-auto shadow-md rounded-lg my-8 h-full px-4 py-2 bg-gray-800">
        <h2 className=" text-white my-2">Password Generator</h2>
        <div className="flex rounded-lg overflow-hidden  shadow mb-4">
          <input
            type="text"
            placeholder="Password"
            readOnly
            ref={passwordRef}
            value={Password}
            className=" outline-none w-full py-1 px-5"
          ></input>
          <button
            className=" shrink-0 rounded   bg-blue-500 text-white"
            onClick={copyPassword}
          >
            copy
          </button>
        </div>

        <div className=" flex gap-x-2 text-sm">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            ></input>
            <label>Length :{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput"> Numbers</label>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setcharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="charInput"> Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
