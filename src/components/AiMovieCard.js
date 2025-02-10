import React from "react";

const AiMovieCard = ({ title, ove, img }) => {
  if (!img) return null; // If no image, do not render this card

  const imgUrl = `https://image.tmdb.org/t/p/w500${img}`;

  return (
    <div className="relative w-60 h-90 rounded-lg overflow-hidden group transition-transform duration-300 transform hover:scale-110">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-300 line-clamp-3">{ove || "No description available."}</p>
      </div>
    </div>
  );
};

export default AiMovieCard;
