import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
    

  return (
    <div>
        <div>
        <h1>{title}</h1>
            <div className='flex overflow-x-auto space-x-4 py-6 [&::-webkit-scrollbar]:hidden'>
            {movies?.map((movie, index) => (
                    <MovieCard 
                        key={index}
                        img={movie.poster_path}
                        title={movie.title}
                    />
                ))}
             
            
            </div>
        </div>
    </div>
  )
}

export default MovieList