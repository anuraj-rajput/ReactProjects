import { useState ,useCallback} from 'react'
import './App.css'

function App() {
  const [lengths, setLenghts] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [spcharAllowed, setSpCharAllowed] = useState(false);
  const [output, setOutput] = useState(" ")

  const passGenerator = useCallback(() => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (numAllowed) str += "0123456789"
    if (spcharAllowed) str += "!@#$%^&*()_+-=[]{}"
      
    for (let index = 0; index < lengths; index++) {
      let random = Math.floor(Math.random() * str.length+1);
      password += str[random]
      console.log(password)
    }
    setOutput(password) 

  }  ,
    [length, numAllowed, spcharAllowed, output])
  


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400-500 bg-gray-800">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'></div>
        
      </div>

    </>
  );
}

export default App
