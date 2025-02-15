import React, { useEffect, useState } from 'react';

const sitemap = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact me', href: '#contact' },
];

const socials = [
  { label: 'LeetCode', href: 'https://leetcode.com/u/shravaniii05/' },
  { label: 'GitHub', href: 'https://github.com/shravani-05' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shravanisawant/' },
  { label: 'Twitter X', href: 'https://x.com/shravani0507' },
  { label: 'Instagram', href: 'https://www.instagram.com/shravaniii.05/' },
];

const Footer = () => {
  // State to track button visibility
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="section">
      <br /><br /><br /><br />
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          {/* Left Section */}
          <div>
            <h2 className="headline-1 mb-8 lg:max-w-[30ch]">
              Let's Collaborate and work together!!!
            </h2>
            <a 
              href="mailto:shravanisawant.work@gmail.com"
              className="bg-purple-600 text-white px-6 py-3 rounded-3xl hover:bg-purple-500 transition"
            >
              Start Project
            </a>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-5 text-zinc-50 text-xl"><b>Portfolio</b></p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-50 py-1 transition-colors hover:text-zinc-500"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-5 text-zinc-50 text-xl"><b>Socials</b></p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-50 py-1 transition-colors hover:text-zinc-500"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-8 bg-purple-600 text-white px-5 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-purple-500 transition animate-bounce"
        >
          ↑
        </button>
      )}

      {/* Copyright Section */}
      <div className="mt-6">
        <p className="bg-zinc-800 h-10 text-zinc-500 text-15 text-center pt-2">
          Copyrights &copy; 2024 <span>shravanisawant</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
