import { useRef } from 'react';
import { useState, useCallback ,useEffect} from "react";
import "./App.css";


function App() {
  const [lengths, setLengths] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [spcharAllowed, setSpCharAllowed] = useState(false);
  const [output, setOutput] = useState(" ");

  //useRefHook

  const passRef = useRef(null);

  const passGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (spcharAllowed) str += "!@#$%^&*()_+-=[]{}";

    for (let index = 0; index <= lengths; index++) {
      let random = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(random);
    }
     console.log(password);
    setOutput(password);
    // dependencies for optimisation
  }, [length, numAllowed, spcharAllowed, setOutput ])

  
  const copyPasswordToClipboard = useCallback(() => {
  passRef.current.select();
  window.navigator.clipboard.writeText(output);
 }, [output])

useEffect(() => {
    passGenerator()
  }, [numAllowed, spcharAllowed]);
  

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={output}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passRef}
           
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>

          <div>
            <div className="flex text-sm gap-x-2">
              <div className="flex items-center gap-x-1">
                <input
                  type="range"
                  min={6}
                  max={24}
                  value={lengths}
                  className="cursor-pointer"
                  onChange={(e) => {
                    setLengths(e.target.value);
                  }}
                />
                <label>Length: {lengths}</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={numAllowed}
                  id="numberInput"
                  onChange={() => {
                    setNumAllowed((prev) => !prev);
                  }}
                />
                <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                <input
                  type="checkbox"
                  defaultChecked={spcharAllowed}
                  id="characterInput"
                  onChange={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                />
                <label htmlFor="characterInput">Characters</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
