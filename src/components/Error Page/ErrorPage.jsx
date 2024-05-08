import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="container">
        <h1 className="my-[40px] text-5xl text-center text-gray-700 font-bold">Oops!</h1>
        <h3 className="my-[50px] text-4xl text-center text-gray-700 font-semibold">404 - PAGE NOT FOUND</h3>
        <p className="font-semibold text-1xl text-center text-gray-400 leading-normal my-[50px]">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
        <Link className="back-to-home" to="/">Go To Homepage</Link>
    </div>
  )
}

export default ErrorPage