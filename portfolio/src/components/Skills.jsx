// /**
//  * @copyright 2024 Shravani Sawant
//  * @license Apache-2.0
//  */

// import { SkillCard } from './SkillCard';


// const skillItem = [
//     {
//       imgSrc: '/img/html-logo.png',
//       label: 'HTML',
//     },
//     {
//       imgSrc: '/img/css-logo.png',
//       label: 'CSS',
//     },
//     {
//       imgSrc: '/img/js-logo.png',
//       label: 'JavaScript',
//     },
//     {
//       imgSrc: '/img/c-logo.png',
//       label: 'C',
//     },
//     {
//       imgSrc: '/img/cpp-logo.png',
//       label: 'C++',
//     },
//     {
//       imgSrc: '/img/sql-logo.png',
//       label: 'SQL',
//     },
//     {
//       imgSrc: '/img/react-logo.png',
//       label: 'React',
//     },
//     {
//       imgSrc: '/img/tailwind-logo.png',
//       label: 'TailwindCSS',
//     },
//     {
//       imgSrc: '/img/git-logo.png',
//       label: 'GIT',
//     },
//     {
//       imgSrc: '/img/github-logo.png',
//       label: 'GitHub',
//     },
//     {
//       imgSrc: '/img/windows-logo.png',
//       label: 'Windows',
//     },
//     {
//       imgSrc: '/img/linux-logo.png',
//       label: 'Linux',
//     },
//   ];
// import React from 'react'

// const Skills = () => {
//   return (
//     <section className='section'>
//         <div className="container">
//             <h2 className='headline-2 text-center'>
//                 My SkillSet
//             </h2>
//             <br />
//             <div className=" grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
//                 {   
//                     skillItem.map(({ imgSrc, label},key) =>
//                     (   
//                         <SkillCard
//                         imgSrc={imgSrc}
//                         label={label}
//                         />
//                     ))
//                 }
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Skills

import React from "react";
import SkillCard from "./SkillCard";

const skillItems = [
  {
    imgSrc: "/img/html-logo.png",
    label: "HTML",
    description: "A markup language for creating web pages and applications.",
  },
  {
    imgSrc: "/img/css-logo.png",
    label: "CSS",
    description: "A stylesheet language used for designing web layouts.",
  },
  {
    imgSrc: "/img/js-logo.png",
    label: "JavaScript",
    description: "A scripting language for building dynamic web experiences.",
  },
  {
    imgSrc: '/img/c-logo.png',
    label: 'C',
    description: 'A powerful general-purpose programming language known for its efficiency and control, widely used in system and embedded programming.'
  },
  {
    imgSrc: '/img/cpp-logo.png',
    label: 'C++',
    description: 'An extension of C that supports object-oriented programming, making it ideal for developing complex applications and systems.'
  },
  {
    imgSrc: '/img/sql-logo.png',
    label: 'SQL',
    description: 'A domain-specific language used to manage and query data in relational databases, essential for backend development.'
  },
  {
    imgSrc: '/img/react-logo.png',
    label: 'React',
    description: 'A popular JavaScript library for building interactive user interfaces with a component-based architecture.'
  },
  {
    imgSrc: '/img/tailwind-logo.png',
    label: 'TailwindCSS',
    description: 'A utility-first CSS framework that provides a highly customizable and efficient way to style web applications.'
  },
  {
    imgSrc: '/img/git-logo.png',
    label: 'GIT',
    description: 'A distributed version control system that helps developers track changes in code and collaborate on projects seamlessly.'
  },
  {
    imgSrc: '/img/github-logo.png',
    label: 'GitHub',
    description: 'A web-based platform for hosting and managing code repositories, integrating Git for collaborative software development.'
  },
  {
    imgSrc: '/img/windows-logo.png',
    label: 'Windows',
    description: 'A widely-used operating system by Microsoft, known for its user-friendly interface and compatibility with various applications.'
  },
  {
    imgSrc: '/img/linux-logo.png',
    label: 'Linux',
    description: 'An open-source operating system praised for its security, flexibility, and suitability for servers, developers, and tech enthusiasts.'
  }
];

const Skills = () => {
  return (
    <section id="skills"  className="section">
      <div className="container">
        <br /><br />
        <h2 className="headline-2 text-center">My SkillSet</h2>
        <br />
        <div className="grid gap-5 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItems.map(({ imgSrc, label, description }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
