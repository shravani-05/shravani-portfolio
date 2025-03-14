import React from "react";
import SkillCard from "./SkillCard";

const skillItems = [
  {
    imgSrc: "/img/html-logo.png",
    label: "HTML",
    description: "Building websites has always intrigued me, and learning HTML as the foundational structure of every web page has been a valuable experience.",
  },
  {
    imgSrc: "/img/css-logo.png",
    label: "CSS",
    description: "Creating appealing UIs has always been my passion, and CSS allows me to style web pages uniquely.",
  },
  {
    imgSrc: "/img/js-logo.png",
    label: "JavaScript",
    description: "UI combined with UX is crucial, and its importance inspired me to add JavaScript to my skill set, making web pages more interactive and engaging.",
  },
  {
    imgSrc: "/img/tailwind-logo.png",
    label: "TailwindCSS",
    description: "My interest in crafting responsive and visually appealing designs introduced me to Tailwind CSS, which enables rapid styling with its utility-first approach.",
  },
  {
    imgSrc: "/img/react-logo.png",
    label: "React",
    description: "My passion for building dynamic and modern web applications drove me to learn ReactJS, which simplifies UI development with its component-based approach.",
  },
  {
    imgSrc: "/img/c-logo.png",
    label: "C",
    description: "Understanding the core of programming inspired me to learn C, which built my foundation in logic and problem-solving.",
  },
  {
    imgSrc: "/img/cpp-logo.png",
    label: "C++",
    description: "The versatility of C++ in object-oriented programming motivated me to explore its powerful features for complex software development.",
  },
  {
    imgSrc: "/img/java.png",
    label: "Java",
    description: "Java's robustness and scalability inspired me to master it, enabling me to build efficient and cross-platform applications seamlessly.",
  },
  {
    imgSrc: "/img/sql-logo.png",
    label: "MySQL",
    description: "My curiosity for managing and querying data efficiently led me to add MySQL to my skill set, strengthening my database management abilities.",
  },
  {
    imgSrc: "/img/git-logo.png",
    label: "GIT",
    description: "To streamline version control and collaboration in projects, I adopted Git, which has become an essential tool in my workflow.",
  },
  {
    imgSrc: "/img/github-logo.png",
    label: "GitHub",
    description: "Sharing and managing code effectively encouraged me to use GitHub, a platform that enhances collaboration and project organization.",
  },
  {
    imgSrc: "/img/docker.png",
    label: "Docker",
    description: "My focus on creating portable and scalable applications led me to adopt Docker, which simplifies containerization and deployment.",
  },
  {
    imgSrc: "/img/windows-logo.png",
    label: "Windows",
    description: "My early experiences with Windows sparked my interest in understanding operating systems, making it a reliable platform for my development work.",
  },
  {
    imgSrc: "/img/linux-logo.png",
    label: "Linux",
    description: "The flexibility and command-line power of Linux motivated me to explore it, enhancing my knowledge of system administration and open-source tools.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <br /><br />
        <h2 className="headline-2 text-center">My SkillSet</h2>
        <br /><br />
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-5">
          {skillItems.slice(0, -2).map(({ imgSrc, label, description }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              description={description}
            />
          ))}
        </div>
        {/* Last Two Cards Centered */}
        <div className="grid grid-cols-2 gap-5 mt-5">
          {skillItems.slice(-2).map(({ imgSrc, label, description }, key) => (
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
