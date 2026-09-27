export interface Project {
  id: string;
  title: string;
  badge?: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  additionalDetails: string[];
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  workflowNodes: string[];
  links: {
    github?: string;
    demo?: string;
    statusText?: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  scoreLabel: string;
  score: string;
  location?: string;
  highlights?: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  description: string;
  type: string;
}

export interface CertificationItem {
  title: string;
  provider: string;
  category: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "ANUDEESH PAIDI",
    shortName: "Anudeesh Paidi",
    initials: "AP",
    tagline: "Computer Science Engineering Student | AI & Software Developer",
    location: "Kokapet, Hyderabad",
    email: "paidianudeesh8@gmail.com",
    heroSupportingText:
      "Motivated Computer Science Engineering student with strong academic performance and problem-solving skills, interested in applying programming, web development, data structures, and AI technologies to real-world software development.",
    aboutBio:
      "I am a Computer Science Engineering student at Chaitanya Bharathi Institute of Technology, Hyderabad, with a strong academic record and a growing interest in software development, artificial intelligence, web technologies, data structures, databases, and computer vision.",
    interests: [
      "Software Development",
      "Artificial Intelligence",
      "Computer Vision",
      "Web Development",
      "Data Structures & Algorithms",
      "Database Systems",
      "Emerging Technologies",
    ],
    social: {
      github: "https://github.com", // Marked placeholder as requested
      linkedin: "https://linkedin.com", // Marked placeholder as requested
      email: "mailto:paidianudeesh8@gmail.com",
    },
    resumeFileName: "Anudeesh_Paidi_Resume.pdf",
  },

  education: [
    {
      institution: "Chaitanya Bharathi Institute of Technology, Hyderabad",
      degree: "Bachelor of Engineering in Computer Science Engineering",
      duration: "2024 – 2028",
      scoreLabel: "CGPA",
      score: "9.35",
      location: "Hyderabad, Telangana",
      highlights: [
        "Core Computer Science & Engineering curriculum",
        "Focus on Data Structures, Algorithms, AI and Web Engineering",
      ],
    },
    {
      institution: "Alphores Junior College",
      degree: "Intermediate",
      duration: "2022 – 2024",
      scoreLabel: "Marks",
      score: "987 / 1000",
      location: "Telangana",
      highlights: [
        "Mathematics, Physics, and Chemistry (MPC) stream",
        "Exceptional academic standing (98.7%)",
      ],
    },
  ] as EducationItem[],

  experience: [
    {
      role: "Web Development and Designing Intern",
      organization: "AICTE OIB-SIP Internship — Oasis Infobyte",
      duration: "March 2026 – April 2026",
      type: "Virtual Internship",
      description:
        "Completed a Web Development and Designing internship involving practical web development tasks and project-based learning.",
    },
  ] as ExperienceItem[],

  skills: [
    {
      title: "Programming Languages",
      description: "Core languages for algorithmic problem solving and system development",
      skills: ["Python", "Java", "C++", "C", "JavaScript", "TypeScript"],
    },
    {
      title: "AI & Emerging Technology",
      description: "Applied intelligent systems and modern language interfaces",
      skills: [
        "Natural Language Processing (NLP)",
        "Prompt Engineering",
        "LLM Applications",
        "Web Speech API",
      ],
    },
    {
      title: "Web Technologies",
      description: "Full-stack web fundamentals and interactive interface engineering",
      skills: ["HTML", "CSS", "Node.js"],
    },
    {
      title: "Databases & Backend",
      description: "Data persistence, schema design and relational architecture",
      skills: [
        "MySQL",
        "SQL",
        "NoSQL",
        "Relational Database Architecture",
      ],
    },
    {
      title: "Core Computer Science",
      description: "Theoretical grounding and foundational computing systems",
      skills: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "ER & Data Flow Diagramming",
        "Operating Systems",
        "Computer Networks",
      ],
    },
    {
      title: "Developer Tools",
      description: "Version control and development environments",
      skills: ["Git", "GitHub", "VS Code"],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "urban-mobile-sensing",
      title: "Urban Mobile Sensing Edge-AI Platform",
      badge: "SIH Prototype",
      category: "Edge AI & Computer Vision",
      shortDescription:
        "Developed an edge-AI onboard processing framework to transform public buses into mobile sensing units, analyzing multi-camera video streams in real-time to minimize bandwidth usage.",
      fullDescription:
        "An innovative edge-AI framework that leverages public transit infrastructure to perform decentralized urban monitoring. By processing camera streams on-device, only high-priority hazard data and telemetry are transmitted upstream, dramatically conserving cellular bandwidth while enabling actionable spatial intelligence.",
      additionalDetails: [
        "Implemented computer vision models to detect infrastructure defects and road hazards such as potholes and waterlogging.",
        "Architected a centralized GIS-based intelligence platform to aggregate fleet data, generating congestion heat maps and actionable traffic analytics for city authorities.",
      ],
      problem:
        "Traditional municipal road condition surveys are slow, expensive, and leave large urban zones unmonitored for months. Streaming continuous high-definition video from moving fleets over cellular networks creates prohibitive bandwidth and storage costs.",
      solution:
        "Equipped public transit buses with onboard Edge-AI compute modules running optimized computer vision pipelines. Video is processed locally in real-time to identify anomalies (potholes, waterlogging, congestion), transmitting only compact JSON metadata and geographic coordinates to a centralized GIS hub.",
      keyFeatures: [
        "Real-time road anomaly detection (potholes & waterlogging) with YOLOv8 & OpenCV",
        "Local inferencing on edge hardware using TensorFlow Lite for low-latency detection",
        "Bandwidth-efficient telemetry streaming instead of raw video broadcasting",
        "Centralized GIS intelligence platform aggregating municipal fleet data",
        "Dynamic congestion heat maps and automated road hazard reports",
      ],
      technologies: [
        "Python",
        "OpenCV",
        "YOLOv8",
        "TensorFlow Lite",
        "Edge AI Hardware",
        "Node.js",
        "GIS Dashboard",
      ],
      workflowNodes: [
        "BUS",
        "MULTI-CAMERA STREAMS",
        "EDGE AI PROCESSING",
        "COMPUTER VISION",
        "DEFECT / POTHOLE / WATERLOGGING DETECTION",
        "CENTRALIZED GIS PLATFORM",
        "TRAFFIC ANALYTICS + HEAT MAPS",
      ],
      links: {
        statusText: "Project Link — Coming Soon",
      },
    },
    {
      id: "ai-voice-assistant",
      title: "AI Voice Assistant Web Application",
      category: "Web & NLP Interface",
      shortDescription:
        "Built a voice-controlled web assistant utilizing Natural Language Processing concepts and the Web Speech API to interpret user speech and execute complex commands.",
      fullDescription:
        "An interactive, hands-free web assistant interface that bridges browser-native speech recognition with conversational NLP parsing. Executes searches, task reminders, and automated browser operations while providing natural synthesized voice responses.",
      additionalDetails: [
        "Configured asynchronous API calls to perform web searches, manage reminders, and deliver spoken responses, demonstrating capability in building interactive AI interfaces.",
      ],
      problem:
        "Most browser interfaces require manual keyboard and mouse input, limiting accessibility and hands-free multitasking during rapid information lookup or task logging.",
      solution:
        "Created an integrated voice-activated web application using the Web Speech API and intent-recognition logic. Users can give spontaneous spoken requests that are parsed into structured asynchronous operations with instant audio-visual feedback.",
      keyFeatures: [
        "Continuous and trigger-based voice input processing via Web Speech API",
        "NLP-driven intent parsing and command interpretation for action dispatching",
        "Non-blocking asynchronous API calls for real-time web search and reminder scheduling",
        "Bidirectional voice interface with synthesized spoken audio output",
        "Modern responsive web UI with real-time waveform visualizer state",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Web Speech API",
      ],
      workflowNodes: [
        "USER VOICE",
        "WEB SPEECH API",
        "NLP / COMMAND INTERPRETATION",
        "ASYNC API CALLS",
        "WEB SEARCH / REMINDERS / COMMANDS",
        "SPOKEN RESPONSE",
      ],
      links: {
        statusText: "Project Link — Coming Soon",
      },
    },
  ] as Project[],

  certifications: [
    {
      title: "Python Certification",
      provider: "NPTEL",
      category: "Programming & Problem Solving",
    },
    {
      title: "Data Science Certification",
      provider: "Springboard",
      category: "Data & Machine Learning",
    },
  ] as CertificationItem[],
};
