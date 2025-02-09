import React, { useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai"; // Correct import
import { API_OPTIONS, gemini_key } from "../Utils/constants";
import AiMovieCard from "./AiMovieCard";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const [movieCards, setMovieCards] = useState([]); // State to store movie cards

  // Search movie in TMDB
  const searchMovie = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results || []; // Return movie results (avoid undefined errors)
  };

  const gptSearchClick = async () => {
    if (!searchText.current.value) return; // Prevent empty input
  
    try {
      const genAI = new GoogleGenerativeAI(gemini_key);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
  
      const query = `You are a movie recommendation system. Your task is to provide a comma-separated list of sad Indian movie titles only. Do not include any descriptions, explanations, introductions, or any other text besides the movie titles themselves. Temperature should be low. Output only a comma-separated list. For example: Anand, Masaan, Peranbu. User's input: ${searchText.current.value}`;
  
      const result = await model.generateContent(query);
      const responseText = result.response.text(); // Extract response
      console.log("ok", responseText);
  
      // Convert to an array
      const moviesArray = responseText.split(",").map((movie) => movie.trim());
      console.log("first", moviesArray);
  
      // Fetch TMDB results and group under each AI title
      const movieResults = await Promise.all(
        moviesArray.map(async (movie) => {
          const movies = await searchMovie(movie);
          return { title: movie, movies: movies.slice(0, 5) }; // Group movies under each AI title
        })
      );
  
      console.log("Grouped Movies:", movieResults);
  
      // Create grouped movie cards
      const movieCardsArray = movieResults.map((group, index) => (
        <div key={index} className="w-full mb-6">
          {/* Movie Title Header */}
          <h2 className="text-2xl font-bold text-white mb-2">{group.title}</h2>
          
          {/* Movie Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {group.movies.map((movie, idx) => (
              <AiMovieCard key={idx} title={movie.title} ove={movie.overview} img={movie.poster_path} />
            ))}
          </div>
        </div>
      ));
  
      setMovieCards(movieCardsArray); // Update state
    } catch (error) {
      console.error("Error fetching GPT response:", error);
    }
  };
  
  

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex space-x-4 bg-gray-900 p-4 rounded-xl shadow-lg border border-gray-700 mt-32"
      >
        <input
          ref={searchText}
          type="text"
          placeholder="What do you want to watch today?"
          className="w-72 md:w-96 px-4 py-2 text-white bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 transition-all duration-300"
        />
        <button
          type="button"
          onClick={gptSearchClick}
          className="relative px-6 py-2 font-bold text-white bg-gray-800 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-lg blur-md opacity-75 group-hover:opacity-100 transition duration-300"></span>
          <span className="relative">Search</span>
        </button>
      </form>

      {/* Render movie cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
  {movieCards.length > 0 ? movieCards : <p className="text-white">No movies found</p>}
</div>

    </div>
  );
};

export default GptSearchBar;
