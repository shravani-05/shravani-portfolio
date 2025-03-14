// import React, { useEffect, useState } from 'react';

// const sitemap = [
//   { label: 'Home', href: '#home' },
//   { label: 'About', href: '#about' },
//   { label: 'Work', href: '#work' },
//   { label: 'Contact me', href: '#contact' },
// ];

// const socials = [
//   { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shravanisawant/' },
//   { label: 'GitHub', href: 'https://github.com/shravani-05' },
//   { label: 'LeetCode', href: 'https://leetcode.com/u/shravaniii05/' },
//   { label: 'Twitter X', href: 'https://x.com/shravani0507' },
//   { label: 'Instagram', href: 'https://www.instagram.com/shravaniii.05/' },
// ];

// const Footer = () => {
//   // State to track button visibility
//   const [isVisible, setIsVisible] = useState(false);

//   // Show button when scrolling down
//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };
//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   // Scroll to Top Function
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <footer className="section">
//       <br /><br /><br /><br />
//       <div className="container">
//         <div className="lg:grid lg:grid-cols-2">
//           {/* Left Section */}
//           <div>
//             <h2 className="headline-1 mb-8 lg:max-w-[30ch]">
//               Let's Collaborate and work together!!!
//             </h2>
//             <a 
//               href="mailto:shravanisawant.work@gmail.com"
//               className="bg-purple-600 text-white px-6 py-3 rounded-3xl hover:bg-purple-500 transition"
//             >
//               Start Project
//             </a>
//           </div>

//           {/* Right Section */}
//           <div className="grid grid-cols-2 gap-4 lg:pl-20">
//             <div>
//               <p className="mb-5 text-zinc-50 text-xl"><b>Portfolio</b></p>
//               <ul>
//                 {sitemap.map(({ label, href }, key) => (
//                   <li key={key}>
//                     <a
//                       href={href}
//                       className="block text-sm text-zinc-50 py-1 transition-colors hover:text-zinc-500"
//                     >
//                       {label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div>
//               <p className="mb-5 text-zinc-50 text-xl"><b>Socials</b></p>
//               <ul>
//                 {socials.map(({ label, href }, key) => (
//                   <li key={key}>
//                     <a
//                       href={href}
//                       className="block text-sm text-zinc-50 py-1 transition-colors hover:text-zinc-500"
//                     >
//                       {label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       {isVisible && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-16 right-8 bg-purple-600 text-white px-5 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-purple-500 transition animate-bounce"
//         >
//           ↑
//         </button>
//       )}

//       {/* Copyright Section */}
//       <div className="mt-6">
//         <p className="bg-zinc-800 h-10 text-zinc-500 text-15 text-center pt-2">
//           Copyrights &copy; 2024 <span>shravanisawant</span>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shravanisawant/', icon: <FaLinkedin className="text-blue-600" /> },
  { label: 'GitHub', href: 'https://github.com/shravani-05', icon: <FaGithub className="text-gray-300" /> },
  { label: 'LeetCode', href: 'https://leetcode.com/u/shravaniii05/', icon: <SiLeetcode className="text-orange-500" /> },
  { label: 'Twitter X', href: 'https://x.com/shravani0507', icon: <FaTwitter className="text-blue-400" /> },
  { label: 'Instagram', href: 'https://www.instagram.com/shravaniii.05/', icon: <FaInstagram className="text-pink-500" /> },
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
    <footer className="py-10 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        
        {/* Two Column Flexbox Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-0">

          {/* Left Section: Collaboration Message & Button */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">
              Let's Collaborate and work together!!!
            </h2>
            <br />
            <a 
              href="mailto:shravanisawant.work@gmail.com"
              className="bg-purple-600 text-white px-6 py-3 rounded-3xl hover:bg-purple-500 transition"
            >
              Start Project
            </a>
          </div>

          {/* Right Section: Social Icons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:w-1/2">
            {socials.map(({ href, icon }, key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:opacity-80 transition"
              >
                {icon}
              </a>
            ))}
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
        <p className="mt-6 text-sm text-zinc-500 text-center">
          Copyrights &copy; 2025 <span className="text-white">shravanisawant</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
