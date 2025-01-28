import React from 'react';

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full px-10 py-6 bg-gradient-to-b from-black to-transparent z-30">
      <img
        className="w-36"
        src="https://imgs.search.brave.com/RWl1dHAtJKIQ6PKgx2_5SkS13ngHXqFyXU_tgEMM07Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMx/MDMxMTU0NjAxLzIw/MTQtbmV0ZmxpeC1s/b2dvLTYwMHgzMTku/cG5n"
        alt="Netflix logo"
      />
    </div>
  );
};

export default Header;
