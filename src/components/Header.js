import React from 'react';
import { logo } from '../Utils/constants';

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full px-10 py-6 bg-gradient-to-b from-black to-transparent z-30">
      <img
        className="w-36"
        src={logo} />
    </div>
  );
};

export default Header;
