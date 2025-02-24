import React, { useEffect, useState } from "react";
import { CDN_IMG_POS, API_OPTIONS } from "../Utils/constants";

const MovieCard = ({ img, title, ove, movieId }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTIONS
        );
        const data = await response.json();
        if (data.results?.length > 0) {
          const trailer = data.results.find((vid) => vid.type === "Trailer");
          setTrailerKey(trailer ? trailer.key : data.results[0].key);
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    fetchTrailer();
  }, [movieId]);

  const openTrailer = () => {
    if (trailerKey) {
      window.open(`https://www.youtube.com/watch?v=${trailerKey}`, "_blank");
    }
  };

  return (
    <div
      className="relative w-48 flex shrink-0 group cursor-pointer"
      onClick={openTrailer} // ✅ Opens only if a trailer exists
    >
      {/* Movie Poster */}
      <img
        src={CDN_IMG_POS + img}
        alt={title}
        className="w-full h-full rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
      />

      {/* Hover Effect - Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-4 rounded-lg transition-opacity duration-300">
        <h3 className="text-white text-lg font-bold">{title}</h3>
        <p className="text-gray-300 text-sm line-clamp-3">{ove}</p>
      </div>
    </div>
  );
};

export default MovieCard;
