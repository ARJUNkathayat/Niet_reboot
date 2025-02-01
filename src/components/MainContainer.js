import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies  = useSelector((store)=>store.movies?.nowPlayingMovies || [])
    if(movies.length ===0) return ;
    const movie_0 = movies[0]
    const {original_title,overview,id} = movie_0;
   
  return (

    <div className="relative h-[37rem] w-full">
    <VideoBackground movie_id={id} />
    <VideoTitle title={original_title} overview={overview} />
  </div>
   
  )
}

export default MainContainer