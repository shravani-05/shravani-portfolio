/**
 * @copyright 2024 Shravani
 * @license Apache-2.0
 */

import React, { useState } from "react";

const aboutItems = [
  {
    label: "General",
    number: 45,
    description: "Hello! I’m Shravani, an MTech student in Computer Engineering who loves diving into the world of technology. With hands-on experience in Blockchain and Artificial Intelligence projects, I bring a unique perspective to solving challenges. My skills include web development using HTML, CSS, JavaScript, Tailwind CSS, and React, and a solid understanding of computer science concepts like Data Structures, Algorithms, and Operating Systems. I am driven by curiosity and the desire to contribute to meaningful technological advancements. I thrive in dynamic and collaborative environments where I can apply my creativity and technical expertise to solve real-world problems. My commitment to continuous learning ensures I stay updated with emerging trends and deliver innovative solutions.",
  },
  {
    label: "DSA",
    number: 45,
    description: "I have a strong foundation in Data Structures and Algorithms, covering a wide range of topics including searching algorithms which are essential for efficient data retrieval in datasets, and various Graph-Search-methods like Depth-first Search, Breadth-first Search, A* Search etc which are some widely used graph traversal and searching techniques. Sorting algorithms such as Quick Sort and Merge Sort enable the fast organization of data, which is crucial for optimizing operations like searching and merging.",
  },
  {
    label: "Web Development",
    number: 10,
    description: "I specialize in creating user-centric web applications using technologies like HTML, CSS, JavaScript, Tailwind CSS, and React. My expertise lies in crafting responsive designs, ensuring seamless user experiences, and integrating modern tools and frameworks to build scalable and maintainable applications. During my internship at Sahu Technologies, I gained hands-on experience in developing full-stack web applications, where I optimized website performance and ensured responsiveness across platforms. Additionally, I undertook a freelancing project to build a dashboard website for a startup company, utilizing React and Tailwind CSS to create an interactive and visually appealing interface, while integrating real-time data visualization and user management features tailored to the client's requirements, showcasing my ability to deliver end-to-end solutions tailored to client needs.",
  },
  {
    label: "Blockchain",
    number: 45,
    description: "With hands-on experience in Blockchain projects, including completing my honors in Blockchain, I have a deep understanding of decentralized systems, distributed databases, and smart contract development. My major project focused on building a Digital Identity Management System using distributed databases to enhance data security and protect user information. This experience allows me to contribute to secure, transparent, and innovative technological solutions that address contemporary challenges.",
  },
  {
    label: "Operating Systems",
    number: 10,
    description: "My proficiency in Operating Systems spans both Windows and Linux environments, where I have acquired an in-depth understanding of1 critical system-level concepts. I excel in process management, ensuring smooth execution and scheduling of tasks to optimize resource usage. My expertise in memory allocation enables efficient handling of data storage and retrieval, minimizing latency and maximizing performance. Additionally, I possess a robust understanding of file systems, including their organization and access methods, which are essential for managing and structuring data effectively. This comprehensive knowledge allows me to optimize application performance and contribute to system-level problem-solving in diverse computing environments.",
  },
  {
    label: "Databases",
    number: 10,
    description: "I am well-versed in database management systems like MySQL for designing and managing efficient database solutions. I focus on optimizing data storage, retrieval, and manipulation to meet diverse application needs. My experience includes creating normalized database schemas, writing optimized queries, and implementing secure access controls. This knowledge enables me to streamline data operations and deliver scalable, high-performance database solutions tailored to complex requirements.",
  },
];

export const About = () => {
  const [activeText, setActiveText] = useState(
    "Hello! I’m Shravani, an MTech student in Computer Engineering who loves diving into the world of technology. With hands-on experience in Blockchain and Artificial Intelligence projects, I bring a unique perspective to solving challenges. My skills include web development using HTML, CSS, JavaScript, Tailwind CSS, and React, and a solid understanding of computer science concepts like Data Structures, Algorithms, and Operating Systems. I am driven by curiosity and the desire to contribute to meaningful technological advancements. I thrive in dynamic and collaborative environments where I can apply my creativity and technical expertise to solve real-world problems. My commitment to continuous learning ensures I stay updated with emerging trends and deliver innovative solutions."
  );

  return (
    <section id="about" className="section">
      <div className="container">
        <br />
        <br />
        <br />
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <div className="mb-5">
            <h2 className="headline-2 text-center">About me</h2>
          </div>
          <p className="text-zinc-300 text-lg text-justify transition-all duration-300">
            {activeText}
          </p>
          <br />
          <div className="flex flex-wrap items-center gap-5 md:gap-5 md:justify-center sm:justify-center">
            {aboutItems.map(({ label, description }, key) => (
              <div
                key={key}
                className="p-3 bg-purple-400 text-gray-950 font-bold rounded-lg shadow-md transition-all transform hover:scale-110 hover:shadow-lg hover:opacity-90 duration-300 cursor-pointer"
                onClick={() => setActiveText(description)}
              >
                <p className="text-center font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
