import myImage from '../assets/my_image.png';
import plantAiImg from '../assets/plant_ai.png';
import fileCloudImg from '../assets/file_cloud.png';
import ragLlmImg from '../assets/rag_llm.png';
import medicalAiImg from '../assets/medical_ai.png';

export const personalInfo = {
  name: "Kishore Kumar",
  shortName: "Kishore",
  greeting: "👋Hello There",
  roleTitle: "AI Engineer & Full Stack Developer",
  tagline: "B.Tech AI & Data Science | Deep Learning, LLMs & Modern Web Systems",
  heroDescription: "I am passionate about building technology that solves real-world problems. My work spans software development, full-stack web applications, artificial intelligence, machine learning, databases, and system design. I enjoy exploring new technologies, developing practical solutions, improving application performance, and transforming ideas into complete, user-focused products.",
  bioShort: "AI Engineer focused on computer vision pathology, retrieval-augmented LLM architectures, and scalable full-stack web platforms.",
  bioDetailed: "I am an AI Engineer and Full Stack Developer pursuing B.Tech in AI & Data Science at MCET. With hands-on expertise in PyTorch, Node.js, React, and Generative AI, I bridge mathematical machine learning models with enterprise web products.",
  avatarUrl: myImage,
  resumeUrl: "/assets/resume/Kishore_Kumar_Resume.pdf",
  email: "kishoresenthil2405@gmail.com",
  phone: "+91 6382501599",
  location: "Tamil Nadu, India",
  college: "Dr. Mahalingam College of Engineering and Technology",
  availability: "Open to Opportunities",
  socials: {
    github: "https://github.com/Skishore24",
    linkedin: "https://www.linkedin.com/in/kishore-kumar-s-77b919304",
    email: "mailto:kishoresenthil2405@gmail.com",
  }
};

export const aboutCards = [
  {
    id: "ai-developer",
    title: "AI Developer",
    icon: "Brain",
    color: "from-blue-500 to-cyan-400",
    glowColor: "rgba(59, 130, 246, 0.25)",
    description: "Designing end-to-end deep learning neural networks, computer vision classification, and real-time model inference pipelines."
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    icon: "Cpu",
    color: "from-purple-500 to-pink-500",
    glowColor: "rgba(139, 92, 246, 0.25)",
    description: "Architecting high-dimensional vector retrieval RAG systems, LLM fine-tuning, and semantic document search engines."
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    icon: "Layout",
    color: "from-cyan-400 to-teal-400",
    glowColor: "rgba(34, 211, 238, 0.25)",
    description: "Crafting fluid React interfaces with Framer Motion, glassmorphism aesthetics, responsive layouts, and sub-second load speeds."
  },
  {
    id: "backend-developer",
    title: "Backend Developer",
    icon: "Server",
    color: "from-indigo-500 to-blue-500",
    glowColor: "rgba(99, 102, 241, 0.25)",
    description: "Building production REST APIs, Node.js microservices, JWT authentication, MySQL/MongoDB schemas, and fast DB query indexing."
  }
];

export const statsData = [
  { label: "Projects Completed", value: 5, suffix: "+", icon: "Code2" },
  { label: "Technologies Mastered", value: 15, suffix: "+", icon: "Boxes" },
  { label: "Enterprise Internships", value: 1, suffix: "", icon: "Briefcase" },
  { label: "Certifications", value: 2, suffix: "", icon: "Award" },
  { label: "Years Learning & Building", value: 3, suffix: "+", icon: "Sparkles" }
];

export const projectsData = [
  {
    id: "plant-disease",
    title: "Plant Disease Detection",
    category: "Artificial Intelligence",
    categoryBadge: "AI & ML",
    subtitle: "Real-time crop health diagnostics using deep neural networks with 98.4% diagnostic accuracy.",
    image: plantAiImg,
    badge: "98.4% Accuracy",
    problem: "Crop diseases cause massive yield losses due to delayed manual inspection and lack of instant automated diagnostic tools.",
    solution: "Engineered a PyTorch CNN vision pipeline with sub-85ms softmax classification.",
    impact: "Delivered instant crop diagnostic scoring across 30+ disease classes with a 98.4% validation accuracy benchmark.",
    techStack: ["Python", "PyTorch", "CNN", "FastAPI", "React"],
    githubUrl: "https://github.com/Skishore24/PlantDiseaseDectection.git",
    liveDemoUrl: "https://plant-disease-dectection-chi.vercel.app/",
    caseStudy: {
      overview: "Deep Plant Pathology AI is a deep learning system designed to inspect crop leaf health and detect fungal, bacterial, and viral infections instantly.",
      architecture: "Input Leaf Image -> Image Preprocessing & Normalization -> Multi-Stage CNN Feature Extractor -> Softmax Scoring -> Real-time React Diagnostic Dashboard.",
      keyResults: [
        "98.4% Validation Classification Accuracy",
        "Sub-85ms Inference Latency per scan",
        "Automated Health Index & Treatment recommendation engine"
      ]
    }
  },
  {
    id: "mcet-file-cloud",
    title: "MCET Secure Campus File Cloud",
    category: "Full-Stack",
    categoryBadge: "Full Stack",
    subtitle: "Campus asset portal with role-based access controls, JWT auth, and fast database query processing.",
    image: fileCloudImg,
    badge: "Enterprise Security",
    problem: "Academic departments suffered from fragmented asset storage, unencrypted file sharing, and slow document retrieval.",
    solution: "Architected a role-based access control file management platform with streaming file pipelines.",
    impact: "Unified file operations for faculty and students while establishing 100% security isolation across departments.",
    techStack: ["Node.js", "Express.js", "MySQL", "JWT Auth", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/Skishore24",
    liveDemoUrl: "https://github.com/Skishore24",
    caseStudy: {
      overview: "A secure, campus-wide file exchange portal built for academic institutions to manage, search, and distribute educational content securely.",
      architecture: "Node.js REST API Server -> Express Middleware & JWT Auth -> MySQL Database Schema -> Dynamic React Client.",
      keyResults: [
        "Sub-50ms database search response",
        "Granular Role-Based Access Control (RBAC)",
        "Zero-latency directory tree navigation UI"
      ]
    }
  },
  {
    id: "custom-rag-llm",
    title: "Custom RAG + LLM Engine",
    category: "Artificial Intelligence",
    categoryBadge: "Generative AI",
    subtitle: "Generative AI conversational engine utilizing vector retrieval and context-aware LLM synthesis.",
    image: ragLlmImg,
    badge: "Vector RAG",
    problem: "Standard LLMs hallucinate when asked domain-specific queries and lack access to proprietary context documents.",
    solution: "Constructed a Retrieval-Augmented Generation pipeline with document chunking, vector similarity search, and citation prompting.",
    impact: "Achieved zero hallucination rates on indexed document corpora while streaming context-grounded responses.",
    techStack: ["Python", "Custom LLM", "RAG Pipeline", "Vector DB", "LangChain", "React"],
    githubUrl: "https://github.com/Skishore24",
    liveDemoUrl: "https://github.com/Skishore24",
    caseStudy: {
      overview: "An enterprise-grade intelligent assistant powered by custom vector embeddings and RAG pipelines to query technical knowledge bases.",
      architecture: "Document Ingestion & Chunking -> Vector Embedding Model -> Similarity Search -> Custom Prompt Synthesis -> React Streaming Chat Client.",
      keyResults: [
        "Exact citation mapping for generated responses",
        "Zero model hallucination on tested internal benchmarks",
        "Fluid streaming UI response UX"
      ]
    }
  },
  {
    id: "medical-ai-diagnosis",
    title: "Medical AI Diagnosis Platform",
    category: "Artificial Intelligence",
    categoryBadge: "Healthcare AI",
    subtitle: "Intelligent medical imaging analysis tool assisting clinicians with automated anomaly identification.",
    image: medicalAiImg,
    badge: "Diagnostic AI",
    problem: "Radiologists face high diagnostic workloads leading to delayed triage for emergency patient scans.",
    solution: "Developed an AI scanner that ingests radiological scans, isolates suspicious regions, and formats diagnostic notes.",
    impact: "Accelerated preliminary scan triaging for emergency cases while providing visual heatmaps for physician verification.",
    techStack: ["Python", "PyTorch", "TensorFlow", "FastAPI", "React"],
    githubUrl: "https://github.com/Skishore24/disease_predict.git",
    liveDemoUrl: "https://disease-predict-six.vercel.app/",
    caseStudy: {
      overview: "A clinical support platform engineered to process medical scans and provide rapid anomaly identification.",
      architecture: "Medical Image Loader -> Deep Neural Feature Extractor -> Grad-CAM Heatmap Visualizer -> Physician Summary Portal.",
      keyResults: [
        "97.1% Sensitivity for abnormal scan detection",
        "Interactive heatmap overlay for radiological review",
        "HIPAA-compliant data handling architecture"
      ]
    }
  },
  {
    id: "personal-portfolio",
    title: "AI Engineer & Portfolio Showcase",
    category: "Frontend",
    categoryBadge: "UI/UX & Web",
    subtitle: "High-end product showcase built with React, Vite, Tailwind CSS, and Framer Motion micro-interactions.",
    image: ragLlmImg,
    badge: "Vercel Aesthetic",
    problem: "Standard portfolio templates fail to showcase software engineering rigor, production AI expertise, and high-end design craftsmanship.",
    solution: "Built a ground-up portfolio emphasizing crisp typography hierarchy, dark glassmorphism, glowing borders, and compact cards.",
    impact: "Presents a clean, $10,000+ custom-designed engineering showcase for tier-1 tech recruiters.",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide Icons", "JavaScript"],
    githubUrl: "https://github.com/Skishore24/Portfolio.git",
    liveDemoUrl: "https://portfolio-skishore24s-projects.vercel.app/",
    caseStudy: {
      overview: "A custom product designer level portfolio built specifically to highlight AI models, full-stack systems, and design aesthetics.",
      architecture: "React 18 -> Vite Build System -> Tailwind CSS Design Tokens -> Framer Motion Animation Orchestration.",
      keyResults: [
        "Satoshi & Inter premium typographic hierarchy",
        "Sub-second initial page load performance",
        "Full WCAG accessibility & semantic structure"
      ]
    }
  }
];

export const experienceData = [
  {
    period: "June 2025",
    role: "Full-Stack Web Development Intern",
    company: "Netsaurs",
    location: "Remote / Hybrid",
    type: "Internship",
    description: "Engineered core application features across full-stack JavaScript architecture. Developed REST API endpoints, optimized database queries, and implemented JWT authentication.",
    responsibilities: [
      "Engineered responsive frontend modules in React using modern state management patterns, reducing rendering overhead.",
      "Developed secure backend API routing with authorization middleware and database query optimization.",
      "Implemented automated error logging and client-side form validation mechanisms.",
      "Collaborated using Git branch workflows, code reviews, and performance optimizations."
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "MySQL", "JWT Auth", "Git", "REST APIs"]
  },
  {
    period: "2023 - Present",
    role: "Artificial Intelligence & Data Science",
    company: "MCET Research Projects",
    location: "Pollachi, India",
    type: "Academic Lead",
    description: "Led architectural design and development for deep learning vision models and vector retrieval RAG pipelines.",
    responsibilities: [
      "Trained multi-stage Convolutional Neural Networks for crop pathology, achieving 98.4% validation accuracy.",
      "Built vector retrieval RAG pipelines with custom LLM embeddings for domain-specific Q&A processing.",
      "Engineered real-time web diagnostic interfaces for instant visual model inference scoring."
    ],
    techStack: ["Python", "PyTorch", "LLMs", "RAG", "Scikit-Learn", "FastAPI"]
  }
];

export const skillsCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "Layout",
    description: "Building responsive, ultra-fast web interfaces",
    glowColor: "rgba(59, 130, 246, 0.2)",
    skills: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    description: "Scalable server architectures & API design",
    glowColor: "rgba(139, 92, 246, 0.2)",
    skills: ["Node.js", "Express", "FastAPI", "REST APIs", "JWT Auth", "Java", "C++"]
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    icon: "Brain",
    description: "Deep neural networks & statistical modeling",
    glowColor: "rgba(34, 211, 238, 0.2)",
    skills: ["Python", "PyTorch", "TensorFlow", "CNN", "Scikit-Learn"]
  },
  {
    id: "ai-genai",
    title: "Artificial Intelligence",
    icon: "Sparkles",
    description: "Generative AI, LLMs & Retrieval Augmented Gen",
    glowColor: "rgba(168, 85, 247, 0.2)",
    skills: ["LLMs", "RAG Systems", "Vector DBs", "LangChain", "Prompt Engineering"]
  },
  {
    id: "databases-cloud",
    title: "Database & Cloud",
    icon: "Database",
    description: "High performance storage & cloud persistence",
    glowColor: "rgba(16, 185, 129, 0.2)",
    skills: ["MongoDB", "MySQL"]
  },
  {
    id: "tools-devops",
    title: "Tools & DevOps",
    icon: "Wrench",
    description: "Version control, containerization & workflow",
    glowColor: "rgba(245, 158, 11, 0.2)",
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Figma", "Postman"]
  }
];

export const heroFloatingIcons = [
  { name: "Python", color: "#3776AB", icon: "Terminal" },
  { name: "React", color: "#61DAFB", icon: "Code" },
  { name: "JavaScript", color: "#F7DF1E", icon: "FileCode" },
  { name: "NodeJS", color: "#339933", icon: "Server" },
  { name: "FastAPI", color: "#009688", icon: "Zap" },
  { name: "TensorFlow", color: "#FF6F00", icon: "Cpu" },
  { name: "Docker", color: "#2496ED", icon: "Box" },
  { name: "Git", color: "#F05032", icon: "GitBranch" },
  { name: "Linux", color: "#FCC624", icon: "HardDrive" },
  { name: "MongoDB", color: "#47A248", icon: "Database" },
  { name: "Cloud", color: "#3B82F6", icon: "Cloud" }
];
