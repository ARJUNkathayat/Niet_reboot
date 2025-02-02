import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="relative flex flex-col justify-center h-[37rem] px-10 text-white">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="w-[40rem] mt-5 text-lg font-medium">{overview}</p>
      <div className="mt-10">
        <button className="bg-white w-28 h-14 rounded-xl text-xl font-bold text-black"> ◀️Play</button>
        <button className="bg-gray-500 w-28 h-14 rounded-xl ml-6 text-xl font-bold text-white">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
