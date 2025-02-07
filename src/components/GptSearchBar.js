import React, { useRef } from "react";
import Client from "../Utils/OpenAi"; // Ensure Client is correctly initialized

const GptSearchBar = () => {
  const searchText = useRef(null);

  const gptSearchClick = async () => {
    if (!searchText.current.value) return; // Prevent empty input

    try {
      const gptResult = await Client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful movie recommendation assistant." },
          { role: "user", content: searchText.current.value },
        ],
      });

      console.log(gptResult.choices[0].message.content); // Handle API response
    } catch (error) {
      console.error("Error fetching GPT response:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
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
    </div>
  );
};

export default GptSearchBar;
