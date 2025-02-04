import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addTopRatedMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      console.log(json);

      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      console.error('Error fetching top-rated movies:', error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []); 
};

export default useTopRatedMovies;
