import React from 'react'
import Projectcard from './components/Projectcard';

const works = [
    {
      imgSrc: '/img/exam.png',
      title: 'Exam Portal',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://musify-5al0.onrender.com/'
    },
    {
      imgSrc: '/img/complaint.png',
      title: 'Complaint Management System',
      tags: ['API', 'SPA'],
      projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
      imgSrc: '/img/disease.png',
      title: 'Multiple Disease Prediction System',
      tags: ['Development', 'API'],
      projectLink: ''
    },
    {
      imgSrc: '/img/bbdim.png',
      title: 'Digital Identity Management Using BlockChain',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/img/cash.png',
      title: 'Cash Flow Minimizer',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
      imgSrc: '/img/language.png',
      title: 'Language Masters',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
    {
        imgSrc: '/img/cookie.png',
        title: 'Full stack music app',
        tags: ['API', 'MVC', 'Development'],
        projectLink: 'https://musify-5al0.onrender.com/'
    }
  ];
const Work2 = () => {
  return (
    <section id="work" 
    className="section"
    >
        <div className="container">
            <h2 className="headline-2 mb-8">
                My Project Highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc,title,tags,projectLink},key) =>
            (
                <Projectcard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                />
            ))}
            </div>
        </div><br /><br />
    </section>
  )
}

export default Work2