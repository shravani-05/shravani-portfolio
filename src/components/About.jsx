import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const aboutItems = [
  { 
    label: "Overview", 
    description: "Hello! I'm Shravani, an MTech student in Computer Engineering who is passionate about technology. I have hands-on experience in Blockchain and AI projects, offering unique insights into solving challenges. My skills include web development with HTML, CSS, JavaScript, Tailwind CSS, and React, as well as a solid grasp of computer science fundamentals like Data Structures, Algorithms, and Operating Systems. Driven by curiosity, I seek to contribute to technological advancements. I thrive in dynamic, collaborative environments where creativity and technical expertise come together to solve real-world problems. I stay committed to learning and keeping up with emerging trends to deliver innovative solutions." 
  },
  { 
    label: "DSA", 
    description: "I have a strong foundation in Data Structures and Algorithms, covering essential topics like searching algorithms for efficient data retrieval and graph-search techniques such as Depth-first Search, Breadth-first Search, and A* Search. These methods are pivotal in graph traversal and solving problems efficiently. Sorting algorithms like Quick Sort and Merge Sort are crucial for organizing data swiftly, helping optimize operations like searching and merging. My deep understanding of these topics allows me to develop efficient solutions for complex problems in computer science." 
  },
  { 
    label: "Web Development", 
    description: "I specialize in creating user-centric web applications using technologies like HTML, CSS, JavaScript, React, and Tailwind CSS. My expertise lies in building responsive designs, ensuring smooth user experiences, and integrating modern frameworks to develop scalable applications. During my internship at Sahu Technologies, I worked on full-stack web apps, optimizing performance and ensuring responsiveness. In a freelancing project, I built a dashboard for a startup using React and Tailwind CSS, integrating real-time data visualization and user management features. This showcases my ability to deliver custom, end-to-end web solutions." 
  },
  { 
    label: "Blockchain", 
    description: "I have practical experience in Blockchain, having completed honors in the subject. I understand decentralized systems, distributed databases, and smart contract development. My major project was building a Digital Identity Management System that uses distributed databases to enhance data security and protect user information. This work has equipped me to contribute to secure, transparent solutions in Blockchain technology, addressing the challenges of today's digital world. Through this project, I gained valuable insights into the intricacies of Blockchain architecture and its potential to revolutionize industries."
  },
  { 
    label: "Operating Systems", 
    description: "My knowledge of Operating Systems spans both Windows and Linux. I have a deep understanding of critical system-level concepts such as process management and memory allocation. I excel at managing tasks and optimizing resource usage to ensure smooth operations. My expertise in memory allocation allows me to handle data storage efficiently, minimizing latency and maximizing performance. Additionally, I understand file systems and their organization, enabling me to structure and manage data effectively for optimized system performance. This knowledge allows me to contribute to the development of high-performance applications." 
  },
  { 
    label: "Databases", 
    description: "I am proficient in database management, specifically using MySQL. I focus on creating efficient database solutions by optimizing data storage, retrieval, and manipulation for diverse applications. I have experience designing normalized database schemas, writing optimized queries, and implementing secure access controls. This knowledge helps me streamline database operations, ensuring scalable and high-performance solutions tailored to meet complex requirements in various use cases. Additionally, I am skilled in database tuning and indexing, which further enhances query performance and response times. My experience also includes implementing backup and recovery strategies." 
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState(aboutItems[0].label);
  const [activeText, setActiveText] = useState(aboutItems[0].description);

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

          {/* Animated Content Panel with Custom Scrollbar */}
          <div className="relative overflow-y-auto scrollbar-thin scrollbar-track-zinc-700 scrollbar-thumb-purple-500 h-[450px] sm:h-[400px] md:h-[310px] lg:h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full pr-4"
              >
                <p className="text-zinc-300 text-lg text-justify">
                  {activeText}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <br />

          {/* Tabs for Selection */}
          <div className="flex flex-wrap gap-5 justify-center">
            {aboutItems.map(({ label, description }) => (
              <button
                key={label}
                onClick={() => {
                  setActiveTab(label);
                  setActiveText(description);
                }}
                className={`p-3 font-bold rounded-lg shadow-md transition-all transform relative
                hover:scale-110 hover:shadow-lg hover:opacity-90 duration-300 cursor-pointer
                ${activeTab === label ? "bg-purple-500 text-white scale-105 shadow-lg" : "bg-purple-400 text-gray-100"}`}
              >
                {label}
                {activeTab === label && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-1 left-3 right-3 h-0.5 bg-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;