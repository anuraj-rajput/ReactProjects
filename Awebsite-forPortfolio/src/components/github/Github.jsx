import { useState } from 'react'
import React, { useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])

    useEffect(() => {

        fetch('https://api.github.com/users/anuraj-rajput')
            .then(res => res.json())
            .then(data => {
                setData(data)})
        
     },[])
    return (
        <>
        <div className='text-center m-4 p-3'>Github </div>
            <img src={data.avatar_url} className={data.name} width={200} height={200} alt="GIT picture" />
            <div className='text-center m-4 p-3'>{data.name}</div>
        </>
    )
}

export default Github
