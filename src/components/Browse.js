import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  signOut } from "firebase/auth";
import { auth } from '../Utils/fireBase';
import { removeUser } from '../Utils/userSlice';
import { API_OPTIONS, logo } from '../Utils/constants';

const Browse = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
      dispatch(removeUser())
    }).catch((error) => {
      // An error happened.
    });
    
  }
const getNowPlayingMovies = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS)
  const json = await data.json();
  console.log(json)
}

useEffect(()=>{
  getNowPlayingMovies()
},[])

  const user= useSelector((store)=>store.user)
  return (
    <div>
      <div className='bg-pink-400 w-full h-24 flex justify-between'>
        <div className='w-48 pt-1.5'>
          <img  src={logo}></img> </div>
        <div className='pt-3 flex'>
          <img className='w-16 h-16' src='https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6'></img>
            <h3 className='text-white mt-4 ml-3'>{user?.name}</h3>
          <button onClick={handleSignOut} className='bg-white h-8 ml-5 mt-5'>Sign Out</button>
        </div>
        </div> 
      
      </div>
  )
}

export default Browse