import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux'

import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import BrowseHeader from './BrowseHeader';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import GptSearch from './GptSearch';

const Browse = () => {

  const showGptSearch = useSelector((store)=>store.GPT.showGptSearch)
useNowPlayingMovies()
useTopRatedMovies();
useUpcomingMovies();

  const user= useSelector((store)=>store.user)
  return (
    <div>
     <BrowseHeader/>{
        showGptSearch ? <GptSearch/> :(
          <>
           <MainContainer/>
           <SecondaryContainer />
          </>
        )
     }
     
    
      
      </div>
  )
}

export default Browse