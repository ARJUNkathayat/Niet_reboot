import React from "react";
import { ai_movie_image } from "../Utils/constants";

const AiMovieCard = ({ title, ove, img }) => {
  return (
    <div className="movie-card bg-amber-300 h-96 w-72 p-2 rounded-lg shadow-lg">
      <img 
        src={img ? `${ai_movie_image}${img}` : "https://via.placeholder.com/500"} 
        alt={title} 
        className="w-full h-32 object-cover rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-sm text-gray-800 line-clamp-2">{ove}</p>
    </div>
  );
};

export default AiMovieCard;
