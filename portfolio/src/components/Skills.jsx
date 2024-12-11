/**
 * @copyright 2024 Shravani Sawant
 * @license Apache-2.0
 */

import { SkillCard } from './SkillCard';


const skillItem = [
    {
      imgSrc: '/img/html-logo.png',
      label: 'HTML',
    },
    {
      imgSrc: '/img/css-logo.png',
      label: 'CSS',
    },
    {
      imgSrc: '/img/js-logo.png',
      label: 'JavaScript',
    },
    {
      imgSrc: '/img/c-logo.png',
      label: 'C',
    },
    {
      imgSrc: '/img/cpp-logo.png',
      label: 'C++',
    },
    {
      imgSrc: '/img/sql-logo.png',
      label: 'SQL',
    },
    {
      imgSrc: '/img/react-logo.png',
      label: 'React',
    },
    {
      imgSrc: '/img/tailwind-logo.png',
      label: 'TailwindCSS',
    },
    {
      imgSrc: '/img/git-logo.png',
      label: 'GIT',
    },
    {
      imgSrc: '/img/github-logo.png',
      label: 'GitHub',
    },
    {
      imgSrc: '/img/windows-logo.png',
      label: 'Windows',
    },
    {
      imgSrc: '/img/linux-logo.png',
      label: 'Linux',
    },
  ];
import React from 'react'

const Skills = () => {
  return (
    <section className='section'>
        <div className="container">
            <h2 className='headline-2 text-center'>
                My SkillSet
            </h2>
            <br />
            <div className=" grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {   
                    skillItem.map(({ imgSrc, label},key) =>
                    (   
                        <SkillCard
                        imgSrc={imgSrc}
                        label={label}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skills