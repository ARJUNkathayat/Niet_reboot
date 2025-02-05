import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { loginBackgroundImage } from '../Utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
              <img className="bg-gradient-to-b from-gray-800 to-black " src={loginBackgroundImage}alt='backround-image'/>
        </div>

      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch;