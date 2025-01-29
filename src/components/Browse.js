import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  signOut } from "firebase/auth";
import { auth } from '../Utils/fireBase';
import { removeUser } from '../Utils/userSlice';

const Browse = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
      dispatch(removeUser)
    }).catch((error) => {
      // An error happened.
    });
    
  }
  return (
    <div>
      <div className='bg-pink-400 w-full h-24 flex justify-between'>
        <div className='w-48 pt-1.5'>
          <img  src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'></img>
        </div>
        <div className='pt-3 flex'>
          <img className='w-16 h-16' src='https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6'></img>
          <button onClick={handleSignOut} className='bg-white h-8 ml-5 mt-5'>Sign Out</button>
        </div>
        </div> 
      
      </div>
  )
}

export default Browse