import React from 'react'
import { useRouteError } from 'react-router-dom'
import Navbar from './Navbar';

const Error = () => {
  const error=useRouteError();
  return (
    <>
      <Navbar/>
    <div className='errorDiv'>
   <h1> {error.status} - {error.statusText}</h1>
   <h3>{error.data}</h3>

    </div>
    </>
  )
}

export default Error