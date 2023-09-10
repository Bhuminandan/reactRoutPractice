import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data = useLoaderData();


    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Bhuminandan')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setData(data);
    //   })
    // }, [])
    
    
  return (
    <div className='w-screen flex flex-col gap-8 items-center justify-center h-auto py-10 bg-slate-800 text-center text-white text-4xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="git pic" className=' rounded-full' width={300} />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Bhuminandan')
    return response.json();
}