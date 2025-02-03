
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const  movies = useSelector((store)=>store.movies)
  return (
    <div className="relative mt-[2rem] bg-gray-900 text-white p-6 ">
      SecondaryContainer
      <MovieList title={"New Launched"} movies={movies.nowPlayingMovies}/>
    </div>
  );
};

export default SecondaryContainer;
