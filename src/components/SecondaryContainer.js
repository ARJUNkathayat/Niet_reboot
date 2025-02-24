

import MovieList from "./MovieList";
import { useSelector } from "react-redux";


const SecondaryContainer = () => {
  const  movies = useSelector((store)=>store.movies)
  return (
    <div className="relative mt-[1rem] bg-black text-white p-6 ">
     <div className="-mt-[8rem] relative z-20"> 
     <MovieList title={"New Launched"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      

     </div>
    </div>
  );
};

export default SecondaryContainer;
