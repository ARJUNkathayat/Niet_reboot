import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from "../Utils/validate"
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import {auth} from "../Utils/fireBase"
import { useNavigate } from 'react-router-dom';
import { addUser } from '../Utils/userSlice';
import { useDispatch } from 'react-redux';
import { avtar_URL, loginBackgroundImage } from '../Utils/constants';

const Login = () => {

  const [isSignIn,setisSignIn] = useState(true);
  const navigate = useNavigate();
  const name= useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const[errorMessage,seterrorMessage] = useState(null);
  const dispatch = useDispatch()

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value)
    seterrorMessage(message)
    if (message != null) return

    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: avtar_URL
          }).then(() => {
            // ✅ Save user details in Redux
                 const { uid,  displayName,photoURL } = auth;
                  dispatch(addUser({ uid:uid,  displayName:displayName,photoURL:photoURL }));
           
          }).catch((error) => seterrorMessage(error.message));
        })
        .catch((error) => seterrorMessage(error.message));

    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          // ✅ Save user details in Redux
          dispatch(addUser({
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          }));

          
        })
        .catch((error) => {
          if (error.code === "auth/invalid-credential") {
            seterrorMessage("Check Your Email and Password Again");
          }
        });
    }
  }

  /*const handleButtonClick = ()=>{
      const message =  checkValidData(email.current.value,password.current.value)
      seterrorMessage(message)
      if(message !=null) return

      if(!isSignIn){
        //sign up logic
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    
updateProfile(user, {
  displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...
  navigate("/browse")
}).catch((error) => {
  // An error occurred
  // ...
  seterrorMessage(error.message)
});
 
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode,errorMessage)
    // ..
  });

      }else{

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code; 
    if(errorCode==="auth/invalid-credential"){
      seterrorMessage("Check Your Email and Password Again")
    }  
  });


      }
  }*/


    
const handleform = ()=>{
        setisSignIn(!isSignIn);
}
  return (
   
    <div>
<Header/>
<div className='absolute'>
        <img className="bg-gradient-to-b from-gray-800 to-black " src={loginBackgroundImage}alt='backround-image'/>
  </div>
  <form onSubmit={(e)=> e.preventDefault()} className="bg-black bg-opacity-75 px-16 pt-10 rounded-lg shadow-md w-[27rem] h-[40rem] mx-auto absolute my-36 left-0 right-0">
        <div className="mb-4">
          <h1 className='text-white text-3xl p-2 mb-3.5 font-bold'>{isSignIn ? "Sign In":"Sign Up"}</h1>

            {!isSignIn&&(<input ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none mb-5"
          />)}

          <input ref={email}
            type="email"
            placeholder="Email or Mobile Number"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
          />
        </div>
        <p className='text-red-600 mb-1.5 text-l '>{errorMessage}</p>
        <button onClick={handleButtonClick}
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