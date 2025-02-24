import React from 'react';
import { logo } from '../Utils/constants';

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full px-6 sm:px-10 py-4 sm:py-6 bg-gradient-to-b from-black to-transparent z-30">
      <img
        className="w-24 sm:w-32 md:w-36 lg:w-40 transition-all duration-300"
        src={logo}
        alt="Logo"
      />
    </div>
  );
};

export default Header;
