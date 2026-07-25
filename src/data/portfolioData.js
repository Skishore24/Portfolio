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
    color: "from-teal-500 to-emerald-600",
    skills: [
      { name: "Machine Learning & Deep Learning", level: 90 },
      { name: "Convolutional Neural Networks (CNN)", level: 88 },
      { name: "Data Preprocessing & Feature Engineering", level: 85 },
      { name: "Model Training & Evaluation (Python)", level: 85 },
    ]
  },
  {
    category: "Web Technologies & Databases",
    color: "from-blue-600 to-indigo-600",
    skills: [
      { name: "HTML5, CSS3 & JavaScript (ES6+)", level: 92 },
      { name: "Node.js & Express.js", level: 85 },
      { name: "MySQL & MongoDB", level: 82 },
      { name: "Full-Stack Web Architecture", level: 88 },
    ]
  },
  {
    category: "Programming, Tools & Soft Skills",
    color: "from-purple-600 to-pink-600",
    skills: [
      { name: "Python & Java Programming", level: 88 },
      { name: "Git, GitHub & VS Code", level: 90 },
      { name: "Google Colab & Jupyter Environments", level: 85 },
      { name: "Problem-Solving & Team Collaboration", level: 95 },
    ]
  }
];

export const marqueeTech = [
  { name: "Python", icon: "terminal" },
  { name: "Java", icon: "code" },
  { name: "JavaScript", icon: "code" },
  { name: "Machine Learning", icon: "brain" },
  { name: "CNN & Deep Learning", icon: "scan" },
  { name: "Node.js", icon: "server" },
  { name: "Express.js", icon: "zap" },
  { name: "MongoDB", icon: "database" },
  { name: "MySQL", icon: "database" },
  { name: "Git & GitHub", icon: "git" },
  { name: "HTML & CSS", icon: "layout" },
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
