import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='w-screen h-auto py-10 bg-slate-800 text-center text-white text-4xl'>User: {userid}</div>
  )
}

export default User