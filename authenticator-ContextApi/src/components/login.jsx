import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


function login() {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser}= useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
}
    
    return (
        
    <div>
      <h2>login</h2>
          <input
              type="text "
              placeholder="username"
              value={username}
              onChange={(e) => setusername(e.target.value)} />
          
          <input
              type="text "
              placeholder="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)} />
          
          <button onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default login