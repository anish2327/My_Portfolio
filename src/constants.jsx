// Skills Section Logo's
import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';

import javascriptLogo from './assets/javascript.png';
import reactjsLogo from './assets/reactjs.png';

import nextjsLogo from './assets/nextjs.png';
import tailwindcssLogo from './assets/tailwindcss.png';

import bootstrapLogo from './assets/bootstrap.png';

import nodejsLogo from './assets/nodejs.png';
import expressjsLogo from './assets/express.png';
import mysqlLogo from './assets/mysql.png';
import mongodbLogo from './assets/mongodb.png';
import llms from './assets/llms.webp';
import promptai from './assets/promptai.webp';
import langgraph from './assets/langgraph.webp';
import langchain from './assets/langchain-color.webp';
import rag from './assets/rag.webp';

import DTU_Logo from './assets/dtu.webp';
import cLogo from './assets/c.png';
import cppLogo from './assets/cpp.png';
import pythonLogo from './assets/python.png';
import gitLogo from './assets/git.png';
import githubLogo from './assets/github.png';
import vscodeLogo from './assets/vscode.png';
import postmanLogo from './assets/postman.png';
import socketio from './assets/socketio.webp';


import vercelLogo from './assets/vercel.png';

import expressKartImg from './assets/expresskart.jpeg';
import realTimeXImg from './assets/RealTimeXimage.jpeg';
import chatgptImg from './assets/CloneChatgpt.jpeg';
import schoolLogo from './assets/schoolimage.png';


// Education Section Logo's
// Project Section Logo's


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Socket.IO', logo: socketio },
      
    ],
  },
  {
    title: 'Generative AI',
    skills: [
      { name: 'LLMs', logo: llms },
      { name: 'LangChain', logo: langchain },
      { name: 'Retrieval-Augmented Generation', logo: rag },
      { name: 'Prompt Engineering,', logo: promptai },
       { name: 'LangGraph', logo: langgraph },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo:cLogo },
      { name: 'C++', logo: cppLogo },
  
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
        { name: 'vercel', logo: vercelLogo },
     
     
    ],
  },
];

export const education = [
    {
      id: 0,
      img: DTU_Logo,
      school: "Delhi Technological University ",
      date: "Sept 2023 - July 2027",
        grade: "6.99 CGPA",
      desc: "I am currently pursuing my B.Tech degree in Electrical Engineering. Along with my academic studies, I have developed strong skills in programming, web development, and problem-solving. I have knowledge of Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Full-Stack Web Development using the MERN stack.",
      degree: "Bechlor of Technology (B.Tech) ",
    },
    {
      id: 2,
      img : schoolLogo,
     
      school: "Govt Co-Ed Senior Secondary School Bhorgarh",
      date: "Apr 2020 - March 2022",
      grade: "86%",
      desc: "I completed my class 12 education fromGovt Co-Ed Senior Secondary School, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img : schoolLogo,
      school: "Govt Co-Ed Senior Secondary School Bhorgarh",
      date: "Apr 2018 - March 2020",
      grade: "82.3%",
      desc: "I completed my class 10 education from Govt Co-Ed Senior Secondary School, under the CBSE board, where I studied a comprehensive curriculum that included subjects such as Mathematics, Science, Social Studies, English, and Hindi.",
    },
  ];

  export const experiences = [
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Express Kart MERN E-Commerce Web App",
      image: expressKartImg,
      description:
        "Built a full-stack MERN e-commerce web application with secure authentication, cart management, and Razorpay payment integration. Developed RESTful APIs for product, user, and order management, and created a dynamic, responsive UI using React Hooks and Context API",
      tags: ["Node.js", "Tailwind CSS", "Express.js", "React JS", "API"],
      github: "https://github.com/anish2327/ExpressKart_Mern_Project",
      liveDemo: "https://express-kart-mern-project-v7e5.vercel.app/",
    },
    {
      id: 1,
      title: "RealTimeX - Real-Time Chat Application",
      image : realTimeXImg,
      description:
        "Developed a real-time chat application using Socket.IO and Node.js with instant bi-directional messaging support. Built a responsive chat interface and scalable backend capable of handling multiple concurrent users efficiently.",
      tags: ["Node.js", "Tailwind CSS", "Socket.IO", "API"],
        github: "https://github.com/anish2327/RealTimeX",
    },
    {
      id: 2,
      title: "SmartChat - AI Powered Conversational Chatbot",
      image : chatgptImg,
      description:
        "Developed an AI-powered chatbot with real-time conversational capabilities using LLM APIs and Node.js. Implemented context-aware response generation, short-term memory storage, and optimized API handling to improve conversation continuity and performance.",
      tags: ["Node.js", "Tailwind CSS", "LLM APIs", "API"],
        github: "https://github.com/anish2327/Smartchat_Ai",
    },
    
  ];  