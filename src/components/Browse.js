import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux'

import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import BrowseHeader from './BrowseHeader';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

useNowPlayingMovies()

  const user= useSelector((store)=>store.user)
  return (
    <div>
     <BrowseHeader/>
     <MainContainer/>
     <SecondaryContainer />
      
      </div>
  )
}

export default Browse