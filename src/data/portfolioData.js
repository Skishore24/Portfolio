import myImage from '../assets/my_image.png';
import webdevImg from '../assets/webdev.jpg';
import videoImg from '../assets/video.jpg';
import portfolioPreview from '../assets/portfolio-preview.png';

export const personalInfo = {
  name: "Kishore Kumar S",
  shortName: "Kishore Kumar",
  roleTitle: "AI & Data Science Student & Developer",
  tagline: "B.Tech AI & Data Science | Machine Learning, Web Development & Intelligent Systems",
  heroTagline: "Building Intelligent AI Systems & Responsive Web Applications",
  bioShort: "Passionate AI & Data Science student at Dr. Mahalingam College of Engineering and Technology with hands-on experience in web development, machine learning, and artificial intelligence. Dedicated to building innovative solutions with creativity and technical precision.",
  avatarUrl: myImage,
  resumeUrl: "#",
  email: "kishoresenthil2405@gmail.com",
  phone: "+91 6382501599",
  location: "Pollachi / Udumalpet, Tamil Nadu, India",
  college: "Dr. Mahalingam College of Engineering and Technology, Pollachi",
  socials: {
    github: "https://github.com/Skishore24",
    linkedin: "https://www.linkedin.com/in/kishore-kumar-s-77b919304",
    portfolio: "https://skishore24-portfolio",
  },
  stats: [
    { label: "B.Tech CGPA", value: "7.9/10" },
    { label: "Core Projects", value: "3+" },
    { label: "Internships", value: "1" },
    { label: "Certifications", value: "2" },
  ]
};

export const educationData = [
  {
    period: "2023 - 2027",
    degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
    institution: "Dr. Mahalingam College of Engineering and Technology, Anna University, Pollachi",
    score: "CGPA: 7.9 / 10",
    details: "Specializing in Deep Learning, Data Processing, Computer Vision, and Modern Web Engineering."
  },
  {
    period: "2023",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Rajalakshmi Ganguswamy Matriculation Higher Secondary School, Udumalpet",
    score: "Percentage: 67%",
    details: "Focused on Mathematics, Physics, Chemistry, and Computer Science fundamentals."
  },
  {
    period: "2021",
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Rajalakshmi Ganguswamy Matriculation Higher Secondary School, Udumalpet",
    score: "Pass",
    details: "Foundational academic curriculum with distinction in Science and Mathematics."
  }
];

export const internshipData = [
  {
    period: "June 2025",
    role: "Web Development Intern",
    company: "Netsaurs",
    description: "Participated in the development of core product features using full-stack web technologies. Gained hands-on experience with front-end and back-end frameworks, version control (Git), and debugging techniques. Collaborated on application enhancements, API integration, database management, testing, and deployment.",
    highlights: [
      "Full-Stack Web Development",
      "Git & Version Control",
      "API Integration & DB Management",
      "Application Testing & Deployment"
    ]
  }
];

export const certificationsData = [
  {
    title: "Certified in Full Stack Web Development",
    issuer: "Udemy",
    icon: "code"
  },
  {
    title: "Certified in Public Speaking",
    issuer: "NPTEL",
    icon: "award"
  }
];

export const skillsData = [
  {
    category: "AI & Machine Learning",
    categoryId: "ai-ml",
    color: "from-cyan-500 to-blue-600",
    skills: [
      {
        name: "Python & Machine Learning",
        logo: "python",
        badge: "Core Language",
        proficiency: "Production Ready",
        highlights: ["Scikit-Learn", "Feature Engineering", "Data Preprocessing"]
      },
      {
        name: "Convolutional Neural Networks (CNN)",
        logo: "pytorch",
        badge: "Deep Learning",
        proficiency: "Expert",
        highlights: ["Image Classification", "Plant Pathology AI", "OpenCV Pipelines"]
      },
      {
        name: "Computer Vision & Processing",
        logo: "opencv",
        badge: "Vision AI",
        proficiency: "Advanced",
        highlights: ["OpenCV", "Real-Time Health Scoring", "Image Preprocessing"]
      }
    ]
  },
  {
    category: "Web & Database Engineering",
    categoryId: "web-db",
    color: "from-blue-600 to-indigo-600",
    skills: [
      {
        name: "JavaScript & Modern Web (ES6+)",
        logo: "javascript",
        badge: "Frontend & Logic",
        proficiency: "Expert",
        highlights: ["Async/Await", "DOM Manipulation", "Modern ES6+ Standards"]
      },
      {
        name: "Node.js & Express.js Framework",
        logo: "node",
        badge: "Backend API",
        proficiency: "Production Ready",
        highlights: ["REST APIs", "Campus File Management", "Auth Middleware"]
      },
      {
        name: "MySQL & MongoDB Relational/NoSQL",
        logo: "mysql",
        badge: "Database",
        proficiency: "Advanced",
        highlights: ["Schema Design", "Queries & Indexing", "NoSQL Data Modeling"]
      },
      {
        name: "React & Modern UI Systems",
        logo: "react",
        badge: "Frontend Framework",
        proficiency: "Advanced",
        highlights: ["Component Architecture", "Tailwind CSS", "State Management"]
      }
    ]
  },
  {
    category: "Tools, DevOps & Core Programming",
    categoryId: "tools-devops",
    color: "from-purple-600 to-pink-600",
    skills: [
      {
        name: "Git, GitHub & Version Control",
        logo: "git",
        badge: "DevOps",
        proficiency: "Expert",
        highlights: ["Branch Workflows", "Repo Management", "Commit Hygiene"]
      },
      {
        name: "Java Object-Oriented Development",
        logo: "java",
        badge: "OOP Language",
        proficiency: "Advanced",
        highlights: ["Object-Oriented Design", "Data Structures", "Problem Solving"]
      },
      {
        name: "HTML5 & CSS3 Responsive Styling",
        logo: "html",
        badge: "Design & Markup",
        proficiency: "Expert",
        highlights: ["Glassmorphism", "Responsive Layouts", "Flexbox & Grid"]
      }
    ]
  }
];

export const marqueeTech = [
  { name: "Python", logo: "python" },
  { name: "JavaScript", logo: "javascript" },
  { name: "React", logo: "react" },
  { name: "Node.js", logo: "node" },
  { name: "Express", logo: "express" },
  { name: "MongoDB", logo: "mongodb" },
  { name: "MySQL", logo: "mysql" },
  { name: "Git", logo: "git" },
  { name: "GitHub", logo: "github" },
  { name: "HTML5", logo: "html" },
  { name: "CSS3", logo: "css" },
  { name: "Java", logo: "java" },
  { name: "OpenCV", logo: "opencv" },
  { name: "PyTorch", logo: "pytorch" },
  { name: "Tailwind CSS", logo: "tailwind" },
];

export const projectsData = [
  {
    id: "plant-disease",
    title: "Plant Disease Detection",
    date: "August 2025",
    category: "AI & ML",
    subtitle: "Deep learning model using Convolutional Neural Networks (CNN) for crop health & disease classification.",
    image: webdevImg,
    badge: "August 2025 • CNN Deep Learning",
    demoType: "plant-disease",
    description: "Developed a deep learning model using Convolutional Neural Networks (CNN) for automated plant disease classification. Implemented image preprocessing and prediction using Python. Enhanced usability with real-time plant health scoring, disease classification, and treatment visualization.",
    tags: ["Python", "CNN", "Deep Learning", "Data Preprocessing", "OpenCV", "Machine Learning"],
    metrics: [
      { label: "Accuracy", value: "98.4%" },
      { label: "Architecture", value: "CNN" },
      { label: "Inference", value: "Real-time" }
    ],
    githubUrl: "https://github.com/Skishore24",
    liveDemoUrl: "#"
  },
  {
    id: "mcet-file-manager",
    title: "MCET File Manager Application",
    date: "February 2026",
    category: "Web Dev",
    subtitle: "Secure campus file management system with authentication, upload/download, search & organization.",
    image: portfolioPreview,
    badge: "February 2026 • Full-Stack Web",
    demoType: "file-manager",
    description: "Developed a secure, full-stack file management application tailored for MCET campus use. Implemented user authentication, secure file upload and download pipelines, multi-criteria search filtering, and directory organization using modern web technologies for an efficient user experience.",
    tags: ["Node.js", "Express.js", "JavaScript", "HTML/CSS", "MySQL", "Authentication"],
    metrics: [
      { label: "Security", value: "Auth & Encryption" },
      { label: "Search", value: "Instant Filter" },
      { label: "Stack", value: "Node + Express" }
    ],
    githubUrl: "https://github.com/Skishore24",
    liveDemoUrl: "#"
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot (Custom LLM / RAG Engine)",
    date: "Present",
    category: "AI & ML",
    subtitle: "Intelligent conversational chatbot using custom LLM and RAG architecture for context-aware responses.",
    image: videoImg,
    badge: "Present • LLM & RAG Architecture",
    demoType: "ai-chatbot",
    description: "Developed an AI-powered conversational chatbot using custom LLM integration and RAG (Retrieval-Augmented Generation) architecture. Enables intelligent, context-aware responses, accurate information retrieval, and seamless interactive user experiences.",
    tags: ["Python", "Custom LLM", "RAG Pipeline", "NLP", "JavaScript", "Vector Retrieval"],
    metrics: [
      { label: "Architecture", value: "RAG + LLM" },
      { label: "Context Retrieval", value: "Semantic RAG" },
      { label: "Interaction", value: "Interactive Chat" }
    ],
    githubUrl: "https://github.com/Skishore24",
    liveDemoUrl: "#"
  }
];
