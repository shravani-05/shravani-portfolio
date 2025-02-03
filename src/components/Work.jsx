import React from 'react';
import Slider from 'react-slick';
import Projectcard from './Projectcard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const works = [
  {
    imgSrc: '/img/exam.png',
    title: 'Online Exam Management System using Python',
    tags: ['Python'],
    projectLink: 'https://github.com/shravani-05/ExamPortal',
  },
  {
    imgSrc: '/img/bbdim.png',
    title: 'Digital Identity Management Using BlockChain',
    tags: ['Blockchain'],
    projectLink: 'https://github.com/shravani-05/Digital-Identity-Management-backend',
  },
  {
    imgSrc: '/img/complaint.png',
    title: 'Complaint Management System using Django',
    tags: ['Python with Django'],
    projectLink: 'https://github.com/shravani-05/ComplaintManagementSystem',
  },
  {
    imgSrc: '/img/disease.png',
    title: 'Multiple Disease Prediction System using AI',
    tags: ['Artificial Intelligence'],
    projectLink: 'https://github.com/shravani-05/MultipleDiseasePredictionSystem',
  },
  {
  imgSrc: '/img/context.png',
  title: 'Context Sensitive Dictionary with NLP',
  tags: ['Natural Language Processing'],
  projectLink: 'https://github.com/shravani-05/Context-Sensitive-Dictionary',
  },
  {
    imgSrc: '/img/cash.png',
    title: 'Cash Flow Minimizer System with DSA',
    tags: ['Data Structures and Algorithms'],
    projectLink: 'https://github.com/shravani-05/Cash-Flow-Minimizer',
  },
  {
    imgSrc: '/img/language.png',
    title: 'Language Masters - A Parallex Website',
    tags: ['Web Development'],
    projectLink: 'https://github.com/shravani-05/LanguageMasters',
  },
];

const Work2 = () => {

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Desktop: 3 slides
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2, // Tablet: 2 slides
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1, // Mobile: 1 slide
        arrows: false, // Hide arrows on smaller screens for simplicity
      },
    },
  ],
};

return (
  <section id="work" className="section">
    <br /><br />
    <div className="container">
      <h2 className="headline-2 mb-8 text-center">My Project Highlights</h2>
      <Slider {...settings} className="project-slider">
        {works.map(({ imgSrc, title, tags, projectLink }, index) => (
          <div key={index} className="px-4 h-full">
            <Projectcard
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="h-full" // Ensures all cards have uniform height
            />
          </div>
        ))}
      </Slider>
    </div>
  </section>
);
};

export default Work2;
