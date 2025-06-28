import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { 
  FaCode, FaBriefcase, FaGraduationCap, FaBrain, FaLightbulb, 
  FaUsers, FaRocket, FaGlobe, FaReact, FaNodeJs, FaPython, 
  FaDatabase, FaCloud, FaDocker, FaAws, FaGithub, FaLinkedin 
} from "react-icons/fa";

const educations = [
  {
    degree: "M.Sc. Computer Science",
    school: "Technische Universität Darmstadt",
    date: "Oct 2024 – Present",
    focus: "AI and Data Science",
    gpa: "1.7 (German scale)",
    courses: ["Machine Learning", "Deep Learning", "Data Mining", "Computer Vision"],
  },
  {
    degree: "B.E. Computer Science",
    school: "Savitribai Phule Pune University",
    date: "Aug 2019 – Jul 2023",
    focus: "First Class with Distinction",
    gpa: "1.7 (German scale)",
    courses: ["Operating Systems", "Data Structures", "Machine Learning", "Algorithms"],
  },
];

const experiences = [
  {
    company: "AMICUS INFOTECH",
    location: "Delhi, India",
    position: "FULL STACK DEVELOPER",
    date: "Mar 2022 – May 2023",
    achievements: [
      "Developed and maintained 8+ full-stack web applications for small and medium businesses (SMBs), using React.js, Node.js, and SQL Server, serving over 5,000 total users",
      "Integrated secure payment gateways such as Razorpay and Stripe into e-commerce platforms, enabling over 2,000 monthly transactions with 99.9% uptime",
      "Improved application performance by optimizing SQL queries, implementing caching strategies, and refactoring inefficient code, resulting in a 40% faster load time and 25% increase in user satisfaction",
      "Collaborated with senior developers through structured code reviews and regular knowledge-sharing sessions, contributing to the adoption of team-wide best practices and a 30% improvement in code quality",
      "Designed and implemented automated CI/CD workflows using Git and cloud hosting platforms (GitHub Actions, Vercel, Netlify, AWS), reducing manual deployment errors by 60% and cutting deployment time by 45%",
      "Delivered tailored software solutions including inventory management systems, dynamic business websites, and client dashboards, consistently meeting tight deadlines with 100% on-time project delivery"
    ]
  },
  {
    company: "PRICEWATERHOUSECOOPERS (PWC)",
    location: "Delhi, India",
    position: "SOFTWARE DEVELOPMENT ENGINEER",
    date: "Oct 2021 – Dec 2021",
    achievements: [
      "Contributed to the development of enterprise web applications for financial services automation, using React.js, Node.js, and PostgreSQL, serving over 10,000 users",
      "Built and maintained RESTful APIs and microservices using Java Spring Boot, enabling compliance and audit workflows with 99.5% uptime reliability",
      "Participated in Agile development processes, including daily stand-ups, sprint planning, and retrospectives, while maintaining 95%+ code coverage through unit and integration testing",
      "Supported cross-functional teams on cloud integration projects using AWS services (EC2, S3, Lambda), contributing to digital transformation efforts for healthcare and manufacturing clients",
      "Applied enterprise-grade development practices, including version control (Git), peer code reviews, and adherence to scalable architecture patterns in large, distributed systems"
    ]
  },
  {
    company: "SCALE AI (CONTRACT)",
    location: "Remote, United States",
    position: "FREELANCE SOFTWARE ENGINEER",
    date: "Jun 2021 – Feb 2022",
    achievements: [
      "Created high-quality 'golden outputs' in React, TypeScript, and Python to serve as accurate reference data for training and fine-tuning AI models",
      "Analyzed and refined messy, inconsistent human-generated prompts, transforming them into clear, precise inputs to help AI learn effectively",
      "Developed complex, user-friendly UIs for Fortune 500 clients, integrating detailed human feedback to improve AI data labeling and validation workflows",
      "Collaborated closely with AI teams to enhance annotation quality, ensuring the models trained on reliable, well-structured data for improved accuracy"
    ]
  }
];

const strengths = [
  { title: "Problem Solving", icon: FaLightbulb, desc: "Analytical approach to complex technical challenges" },
  { title: "Code Review", icon: FaCode, desc: "Thorough code review and optimization practices" },
  { title: "Agile Methodology", icon: FaUsers, desc: "Effective team collaboration and iterative development" },
  { title: "Optimization", icon: FaRocket, desc: "Performance optimization and system efficiency" },
  { title: "Communication", icon: FaGlobe, desc: "Strong communication and cross-functional teamwork" },
];

export const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.dataset.skill;
            setAnimatedSkills(prev => ({ ...prev, [skillName]: true }));
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('[data-skill]').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="min-h-screen bg-transparent text-white py-20 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-cream">About</span>
              <span className="text-white"> Me</span>
            </h2>
            <p className="text-xl text-silver max-w-4xl mx-auto leading-relaxed">
              I've worked on real-world fullstack projects during internships at PwC and Amicus Infotech— from building internal platforms to deploying live e-commerce systems.
            </p>
            <p className="text-xl text-silver max-w-4xl mx-auto leading-relaxed mt-4">
              Currently pursuing Master's in Computer Science at Technische Universität Darmstadt, I'm looking for a working student role where I can contribute to scalable products, clean code, and great user experience.
            </p>
          </div>
        </RevealOnScroll>

        {/* Tab Navigation */}
        <RevealOnScroll>
          <div className="flex justify-center mb-12">
            <div className="bg-black/50 backdrop-blur-sm border border-cream/20 rounded-2xl p-2 flex space-x-2">
              {[
                { id: 'skills', label: 'Skills', icon: FaCode },
                { id: 'experience', label: 'Experience', icon: FaBriefcase },
                { id: 'strengths', label: 'Strengths', icon: FaBrain },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-cream text-black shadow-lg'
                      : 'text-silver hover:text-white hover:bg-cream/10'
                  }`}
                >
                  <tab.icon className="text-lg" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Tab Content */}
        <RevealOnScroll>
          <AnimatePresence mode="wait">
            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-cream mb-8 text-center">Technical Skills</h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Programming Languages */}
                  <div className="bg-black/10 backdrop-blur-sm border border-cream/20 rounded-xl p-6 hover:border-cream/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <FaCode className="text-3xl text-cream" />
                      <h4 className="text-xl font-semibold text-cream">Programming</h4>
                    </div>
                    <div className="space-y-4">
                      {[
                        { name: 'JavaScript (ES6+)', level: 95 },
                        { name: 'TypeScript', level: 88 },
                        { name: 'C#', level: 85 },
                        { name: 'Python', level: 85 },
                        { name: 'Java', level: 82 },
                      ].map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-white">{skill.name}</span>
                            <span className="text-silver text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-black/10 rounded-full h-2 border border-cream/20">
                            <motion.div
                              className="bg-gradient-to-r from-cream to-white h-full rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Frontend */}
                  <div className="bg-black/10 backdrop-blur-sm border border-cream/20 rounded-xl p-6 hover:border-cream/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <FaReact className="text-3xl text-cream" />
                      <h4 className="text-xl font-semibold text-cream">Frontend</h4>
                    </div>
                    <div className="space-y-4">
                      {[
                        { name: 'React.js', level: 90 },
                        { name: 'Redux', level: 85 },
                        { name: 'HTML5', level: 95 },
                        { name: 'CSS3', level: 92 },
                        { name: 'Bootstrap', level: 88 },
                        { name: 'Material-UI', level: 85 },
                      ].map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-white">{skill.name}</span>
                            <span className="text-silver text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-black/10 rounded-full h-2 border border-cream/20">
                            <motion.div
                              className="bg-gradient-to-r from-cream to-white h-full rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="bg-black/10 backdrop-blur-sm border border-cream/20 rounded-xl p-6 hover:border-cream/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <FaNodeJs className="text-3xl text-cream" />
                      <h4 className="text-xl font-semibold text-cream">Backend</h4>
                    </div>
                    <div className="space-y-4">
                      {[
                        { name: 'Node.js', level: 88 },
                        { name: 'Express.js', level: 85 },
                        { name: 'ASP.NET Core', level: 80 },
                        { name: 'RESTful APIs', level: 90 },
                      ].map((skill) => (
                        <div key={skill.name} className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-white">{skill.name}</span>
                            <span className="text-silver text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-black/10 rounded-full h-2 border border-cream/20">
                            <motion.div
                              className="bg-gradient-to-r from-cream to-white h-full rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Databases */}
                  <div className="bg-black/10 backdrop-blur-sm border border-cream/20 rounded-xl p-6 hover:border-cream/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <FaDatabase className="text-3xl text-cream" />
                      <h4 className="text-xl font-semibold text-cream">Databases</h4>
                    </div>
                    <div className="space-y-4">
                      {[
                        { name: 'MongoDB', level: 85 },
                        { name: 'PostgreSQL', level: 80 },
                        { name: 'MS SQL Server', level: 75 },
                        { name: 'Redis', level: 78 },
                      ].map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-white">{skill.name}</span>
                            <span className="text-silver text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-black/10 rounded-full h-2 border border-cream/20">
                            <motion.div
                              className="bg-gradient-to-r from-cream to-white h-full rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* DevOps */}
                  <div className="bg-black/10 backdrop-blur-sm border border-cream/20 rounded-xl p-6 hover:border-cream/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <FaCloud className="text-3xl text-cream" />
                      <h4 className="text-xl font-semibold text-cream">DevOps</h4>
                    </div>
                    <div className="space-y-4">
                      {[
                        { name: 'Git', level: 90 },
                        { name: 'Docker', level: 75 },
                        { name: 'CI/CD', level: 80 },
                        { name: 'GitHub Actions', level: 85 },
                        { name: 'AWS', level: 70 },
                      ].map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-white">{skill.name}</span>
                            <span className="text-silver text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-black/10 rounded-full h-2 border border-cream/20">
                            <motion.div
                              className="bg-gradient-to-r from-cream to-white h-full rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="bg-black/10 backdrop-blur-sm border border-cream/20 rounded-xl p-6 hover:border-cream/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <FaGlobe className="text-3xl text-cream" />
                      <h4 className="text-xl font-semibold text-cream">Languages</h4>
                    </div>
                    <div className="space-y-4">
                      {[
                        { name: 'English (Fluent/C1)', level: 95 },
                        { name: 'German (Elementary/A2)', level: 60 },
                      ].map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-white">{skill.name}</span>
                            <span className="text-silver text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-black/10 rounded-full h-2 border border-cream/20">
                            <motion.div
                              className="bg-gradient-to-r from-cream to-white h-full rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-cream mb-8 text-center">Professional Experience</h3>
                
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-black/10 backdrop-blur-sm border border-cream/20 rounded-xl p-6 hover:border-cream/40 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-cream">{exp.position}</h4>
                          <p className="text-white">{exp.company}</p>
                          <p className="text-silver">{exp.location}</p>
                        </div>
                        <span className="text-silver text-sm md:text-right">{exp.date}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-silver flex items-start gap-2">
                            <span className="text-cream mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'strengths' && (
              <motion.div
                key="strengths"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold text-cream mb-8 text-center">Core Competencies</h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-black/10 backdrop-blur-sm border border-cream/20 rounded-xl p-6 hover:border-cream/40 transition-all duration-300 text-center"
                    >
                      <div className="flex justify-center mb-4">
                        <strength.icon className="text-4xl text-cream" />
                      </div>
                      <h4 className="text-xl font-semibold text-cream mb-3">{strength.title}</h4>
                      <p className="text-silver">{strength.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default About;