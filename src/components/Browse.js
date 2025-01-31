import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  signOut } from "firebase/auth";
import { auth } from '../Utils/fireBase';
import { removeUser } from '../Utils/userSlice';
import {  logo } from '../Utils/constants';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import BrowseHeader from './BrowseHeader';

const Browse = () => {

useNowPlayingMovies()

  const user= useSelector((store)=>store.user)
  return (
    <div>
     <BrowseHeader/>
      
      </div>
  )
}

export default Browse