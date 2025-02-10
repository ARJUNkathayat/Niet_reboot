import React, { useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, gemini_key } from "../Utils/constants";
import AiMovieCard from "./AiMovieCard";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const [movieGroups, setMovieGroups] = useState([]);

  const searchMovie = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results || [];
  };

  const gptSearchClick = async () => {
    if (!searchText.current.value) return;

    try {
      const genAI = new GoogleGenerativeAI(gemini_key);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

      const query = `You are a movie recommendation system. Your task is to provide a comma-separated list of sad Indian movie titles only. Do not include any descriptions, explanations, introductions, or any other text besides the movie titles themselves. Temperature should be low. Output only a comma-separated list. For example: Anand, Masaan, Peranbu. User's input: ${searchText.current.value}`;

      const result = await model.generateContent(query);
      const responseText = result.response.text();

      const moviesArray = responseText.split(",").map((movie) => movie.trim());

      const movieResults = await Promise.all(
        moviesArray.map(async (movie) => {
          const movies = await searchMovie(movie);
          const filteredMovies = movies.filter(m => m.poster_path); // Remove movies without images
          return { title: movie, movies: filteredMovies.slice(0, 10) };
        })
      );

      setMovieGroups(movieResults);
    } catch (error) {
      console.error("Error fetching GPT response:", error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-black min-h-screen py-10">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex space-x-4 bg-opacity-30 backdrop-blur-md bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-700 mt-10"
      >
        <input
          ref={searchText}
          type="text"
          placeholder="Find your next watch..."
          className="w-72 md:w-96 px-4 py-2 text-white bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400 transition-all duration-300"
        />
        <button
          type="button"
          onClick={gptSearchClick}
          className="relative px-6 py-2 font-bold text-white bg-red-600 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Search
        </button>
      </form>

      {/* Movie Rows (Netflix Style) */}
      <div className="w-full mt-8 px-6">
        {movieGroups.length > 0 ? (
          movieGroups.map((group, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                {group.title}
              </h2>
              <div className="overflow-x-scroll hide-scrollbar flex space-x-4">
                {group.movies.map((movie, idx) => (
                  <AiMovieCard
                    key={idx}
                    title={movie.title}
                    ove={movie.overview}
                    img={movie.poster_path}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-lg text-center">No movies found</p>
        )}
      </div>
    </div>
  );
};

export default GptSearchBar;
