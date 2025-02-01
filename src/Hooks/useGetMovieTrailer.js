import { useDispatch,useSelector  } from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../Utils/movieSlice";
import { API_OPTIONS } from "../Utils/constants";

const useGetMovieTrailer= ({movie_id})=>{
    

    const trailId = useSelector((store) => store.movies.trailers);
    const dispatch = useDispatch();

    const getMovieTrailer = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
            API_OPTIONS
        );
        const json = await data.json();
       

        // Filter trailers correctly
        const trailers = json.results.filter((movie) => movie.type === "Trailer");
        if (trailers.length > 0) {
            dispatch(addTrailerVideo(trailers[0])); // Dispatch the first trailer
        }
    };
    
        useEffect(() => {
            if (movie_id) {
                getMovieTrailer();
            }
        }, [movie_id]);
}
export default useGetMovieTrailer;