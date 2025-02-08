import React from "react";

const AiMovieCard = ({ data }) => {
  return (
    <div>
      {data.map((movie) => (
        <h1 key={movie.id}>{movie.title}</h1>
      ))}
    </div>
  );
};

export default AiMovieCard;
