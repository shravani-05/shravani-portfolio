 /**
 * @copyright 2024 Shravani Sawant
 * @license Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed w-full h-20 top-0 left-0 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-5 md:grid md:grid-cols-[1fr,3fr,1fr]">
        {/* Logo */}
        <h1>
      <a
        href="#home"
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor behavior
          const homeSection = document.getElementById("home"); // Get the home section
          if (homeSection) {
            homeSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the home section
          }
        }}
      >
        <img src="/img/fav.png" width={40} height={40} alt="Shravani" />
      </a>
    </h1>

        <div className="relative md:justify-self-center">
          {/* Menu Button */}
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu' }</span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end cursor-pointer hover:bg-gradient-to-t from-purple-500  to-purple-300 transition-all duration-300 ease-in-out "
        >
          Contact me
        </a>
      </div>
    </header>
  );
};

export default Header;
