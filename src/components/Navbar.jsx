/**
 * @copyright 2024 Shravani Sawant
 * @license Apache-2.0
 */

import React, { useRef , useEffect} from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
   
    // activeBox.current.style.top = lastActiveLink.current.
    // offsetTop + 'px';
    
    // activeBox.current.style.left = lastActiveLink.current.
    // offsetLeft + 'px';
    
    // activeBox.current.style.width = lastActiveLink.current.
    // offsetWidth + 'px';
    
    // activeBox.current.style.height = lastActiveLink.current.
    // offsetHeight+ 'px';


  }

  useEffect(initActiveBox, []);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.remove('active');
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
    activeBox.current.style.width = event.target.offsetWidth + 'px';
    activeBox.current.style.height = event.target.offsetHeight+ 'px';

  }
  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active hover:bg-zinc-50 hover:text-zinc-900 rounded-xl',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link active hover:bg-zinc-50 hover:text-zinc-900 rounded-xl'
    },
    {
      label: 'Skills',
      link: '#skills',
      className: 'nav-link active hover:bg-zinc-50 hover:text-zinc-900 rounded-xl'
    },
    {
      label: 'Project',
      link: '#work',
      className: 'nav-link active hover:bg-zinc-50 hover:text-zinc-900 rounded-xl'
    },
    {
      label: 'Contact me',
      link: '#contact',
      className: 'nav-link md:hidden hover:bg-zinc-50 hover:text-zinc-900 rounded-xl'
    }
  ];

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          className={className}
          onClick={() => {
            // Handle active state change here if needed
          }}
        >
          {label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;
