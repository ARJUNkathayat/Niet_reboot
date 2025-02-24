import React, { useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, gemini_key } from "../Utils/constants";
import AiMovieCard from "./AiMovieCard";
import { ClipLoader } from "react-spinners";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const [movieGroups, setMovieGroups] = useState([]);
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

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
          const filteredMovies = movies.filter((m) => m.poster_path);
          return { title: movie, movies: filteredMovies.slice(0, 10) };
        })
      );

      setMovieGroups(movieResults);
    } catch (error) {
      console.error("Error fetching GPT response:", error);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-black via-gray-900 to-black min-h-screen py-10 px-4">
      {/* Search Bar */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-wrap justify-center space-x-4 bg-opacity-50 backdrop-blur-2xl bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-700 mt-10 transition-all duration-300 hover:shadow-neon animate-glow"
      >
        <input
          ref={searchText}
          type="text"
          placeholder="Find your next watch..."
          className="w-72 md:w-96 px-4 py-2 text-white bg-transparent border border-cyan-500 rounded-lg focus:outline-none focus:ring-4 focus:ring-cyan-400 placeholder-gray-400 transition-all duration-300"
        />
        <button
          type="button"
          onClick={gptSearchClick}
          className="relative px-6 py-2 font-bold text-white bg-cyan-600 rounded-lg transition duration-300 transform hover:scale-110 hover:shadow-cyan-500/50 active:scale-95 hover:animate-neon"
        >
          🔎 Search
        </button>
      </form>

      {/* Loading Animation */}
      {loading && (
        <div className="flex justify-center items-center w-full h-64 animate-rotate">
          <ClipLoader color="#00ffff" size={80} />
        </div>
      )}

      {/* Movie List */}
      {!loading && movieGroups.length > 0 ? (
        <div className="w-full mt-8 px-6">
          {movieGroups.map((group, index) => (
            <div key={index} className="mb-10 animate-fade-in">
              <h2 className="text-3xl font-bold text-cyan-300 mb-4 border-b border-cyan-500 pb-2 inline-block shadow-glow">
                {group.title}
              </h2>
              <div className="overflow-x-scroll hide-scrollbar flex space-x-4">
                {group.movies.map((movie, idx) => (
                  <AiMovieCard
                    key={idx}
                    title={movie.title}
                    ove={movie.overview}
                    img={movie.poster_path}
                    className="hover:scale-105 transition-transform duration-300 hover:shadow-neon hover:animate-float"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && (
          <div className="flex flex-col items-center mt-10 animate-blink">
            <img
              src="https://i.imgur.com/dJHhEfa.png"
              alt="No Movies Found"
              className="w-80 opacity-80 animate-glow"
            />
            <p className="text-cyan-300 text-lg mt-4 font-medium animate-blink">
              🎥 No movies found. Try a different search!
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default GptSearchBar;
