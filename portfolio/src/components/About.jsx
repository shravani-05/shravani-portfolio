/**
 * @copyright 2024 Shravani Sawant
 * @license Apache-2.0
 */

import React from 'react'
const aboutItems = [
  {
    label: 'Data Structures and Algorithms',
    number: 45
  },
  {
    label: 'Web Developement',
    number: 10
  },
  {
    label: 'Blockchain technology',
    number: 45
  },
  {
    label: 'Operating Systems',
    number: 10
  },
  {
    label: 'Databases',
    number: 10
  }
];
export const About = () => {
  return (
    <section
      id="about"
      className='section'
    >
      <div className='container'>
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
        <p className=' text-zinc-300 text-lg text-justify'>
          <h2 className='headline-2 text-center'>About me</h2><br />
        Hello! I’m Shravani, an MTech student in Computer Engineering 
        who loves diving into the world of technology. With hands-on 
        experience in Blockchain and Artificial Intelligence projects,
        I bring a unique perspective to solving challenges. My skills 
        include web development using HTML, CSS, JavaScript, Tailwind
        CSS, and React, and a solid understanding of computer science 
        concepts like Data Structures, Algorithms, and Operating Systems.
        I am driven by curiosity and the desire to contribute to meaningful
        technological advancements. I thrive in dynamic and collaborative 
        environments where I can apply my creativity and technical expertise 
        to solve real-world problems. My commitment to continuous learning 
        ensures I stay updated with emerging trends and deliver innovative solutions.
        </p>
        <br />
        <div className="flex flex-wrap items-center gap-5 md:gap-5 md:justify-center sm:justify-center">
  {aboutItems.map(({ label, number }, key) => (
    <div key={key} className="p-3 bg-purple-400 text-gray-950 font-bold rounded-lg shadow-md transition-all transform hover:scale-110 hover:shadow-lg hover:opacity-90 duration-300">
      
      <p className="text-center font-medium">{label}</p>
    </div>
  ))}


          </div>
        </div>
      </div>
    </section>
  )
}
