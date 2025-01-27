import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignIn,setisSignIn] = useState(true);
    
const handleform = ()=>{
        setisSignIn(!isSignIn);
}
  return (
   
    <div>
<Header/>
<div className='absolute'>
        <img className="bg-gradient-to-b from-gray-800 to-black " src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg"
  alt='backround-image'/>
  </div>
  <form className="bg-black bg-opacity-75 px-16 pt-10 rounded-lg shadow-md w-[27rem] h-[40rem] mx-auto absolute my-36 left-0 right-0">
        <div className="mb-4">
          <h1 className='text-white text-3xl p-2 mb-3.5 font-bold'>{isSignIn ? "Sign In":"Sign Up"}</h1>

            {!isSignIn&&(<input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none mb-5"
          />)}

          <input
            type="email"
            placeholder="Email or Mobile Number"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-red-600 hover:bg-red-700 rounded text-white font-semibold"
        >
          {isSignIn ? "Sign In":"Sign Up"}
        </button>


        {isSignIn && (
          <div>
            <h4 className="text-center my-4 text-white mx-6">Or</h4>
            <button
              type="button"
              className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded text-white font-semibold"
            >
              Use a Sign-In Code
            </button>
            <a
              href="forgot"
              className="text-white hover:border-b-white block w-full pl-20 py-5"
            >
              Forgot Password
            </a>
            <input type="checkbox" />
            <label className="text-white pl-2">Remember Me</label>
          </div>
        )}


        <div className="flex items-center space-x-2 py-3">
  <h3 className="text-gray-300">{isSignIn ? "New to Netflix?":"Already Register"}</h3>
  <h2 className="text-white font-bold  hover:border-white transition duration-300 cursor-pointer "  onClick={handleform}>{isSignIn? "Sign Up Now":"Sign In"} </h2>
</div>
<p className='font-light text-gray-400  text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<a className='text-blue-500' href='ok'> Learn more</a>.</p>


      </form>


    </div>
  )
}

export default Login