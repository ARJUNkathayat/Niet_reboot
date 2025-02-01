import { useSelector } from 'react-redux';
import useGetMovieTrailer from '../Hooks/useGetMovieTrailer';

const VideoBackground = ({ movie_id }) => {
    const trailId = useSelector((store) => store.movies.trailers);
    useGetMovieTrailer({ movie_id });

    return (
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
            {trailId ? (
                <iframe
                    className="absolute top-0 left-0 w-[200%] h-[200%] sm:w-[150%] sm:h-[150%]"
                    src={`https://www.youtube.com/embed/${trailId?.key}?autoplay=1&mute=1&loop=1&playlist=${trailId?.key}`}
                    title="YouTube video player"
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{
                        transform: "translate(-10%, -10%) scale(1.2)", // ✅ Ensures full coverage
                        objectFit: "cover"
                    }}
                ></iframe>
            ) : (
                <p>Loading trailer...</p>
            )}
        </div>
    );
};

export default VideoBackground;
