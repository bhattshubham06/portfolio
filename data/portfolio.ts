export type EducationItem = {
  institution: string;
  degree: string;
  duration: string;
  location?: string;
  highlights?: string[];
  score?: string;
};

export type ProjectItem = {
  title: string;
  objective: string;
  impact: string;
  metrics: string;
  tools: string[];
  githubUrl?: string;
};

export type ExperienceItem = {
  role: string;
  duration: string;
  description: string;
};

export type PersonalInfo = {
  name: string;
  title: string;
  headline: string;
  subTitle: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  aboutMe: string;
  resumeUrl: string;
  heroImage: {
    src: string;
    alt: string;
  };
};

export type Seo = {
  title: string;
  description: string;
  url: string;
  siteName: string;
  keywords: string[];
  openGraphImage: string;
  twitterHandle?: string;
};

export type PortfolioData = {
  personalInfo: PersonalInfo;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: {
    technical: string[];
    strategic: string[];
    applications: string[];
  };
  certifications: string[];
  achievements: string[];
  volunteering: {
    organization: string;
    role: string;
    description: string;
  };
  seo: Seo;
};

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Shubham Bhatt",
    title: "Strategic DataOps Architect",
    headline: "Bridging DataOps Engineering & Business Strategy",
    subTitle: "Bridging the gap between Data Engineering & Business Strategy",
    email: "bhattshubhamofficial@gmail.com",
    phone: "+91 8527226410",
    linkedin: "https://www.linkedin.com/in/bhatt-shubham",
    github: "https://github.com/bhattshubham06",
    location: "Dehradun / New Delhi",
    aboutMe:
      "A Data-driven Strategist and MBA candidate specializing in Strategy and Consulting. With 2 years of experience as a DataOps Engineer and an Executive PG in Data Science from IIIT Bangalore, I excel at transforming complex data into high-level business ROI.",
    resumeUrl: "/Shubham_Bhatt_resume.pdf",
    heroImage: {
      src: "/Shubham_photo_2.jpeg",
      alt: "Portrait of Shubham Bhatt"
    }
  },
  education: [
    {
      institution: "University of Petroleum and Energy Studies",
      degree: "MBA (Strategy and Consulting)",
      duration: "Expected June 2025",
      location: "Dehradun",
      highlights: ["Core Member of Koshu (Strategy Society)", "National Finalist at IIM-Indore"]
    },
    {
      institution: "International Institute of Information Technology, Bangalore",
      degree: "Executive Post Graduate Programme in Data Science",
      duration: "Oct 2021 - Nov 2022",
      score: "GPA: 3.30/4.00",
      highlights: ["Specialization in Machine Learning and Data Ops"]
    },
    {
      institution: "Guru Gobind Singh Indraprastha University",
      degree: "Bachelor of Computer Application (BCA)",
      duration: "Aug 2016 - July 2019",
      score: "GPA: 8.64/10.00",
      location: "New Delhi"
    }
  ],
  experience: [
    {
      role: "DataOps Engineer",
      duration: "2 Years (Pre-MBA)",
      description:
        "Operationalized ML models, built resilient data pipelines, and enforced data integrity for scalable analytics."
    }
  ],
  projects: [
    {
      title: "Credit Card Fraud Detection",
      objective: "Identify fraud root causes and minimize bank losses.",
      impact: "$108,636 potential annual savings",
      metrics: "Recall Score: 75%",
      tools: ["Python", "Scikit-learn", "Pandas", "Jupyter Notebook", "EDA"],
      githubUrl: "https://github.com/bhattshubham06"
    },
    {
      title: "Lead Score/Conversion Model",
      objective: "Prioritize leads with the highest likelihood of conversion for sales efficiency.",
      impact: "Optimized sales outreach and resource allocation.",
      metrics: "Model performance tuned for revenue velocity",
      tools: ["Python", "Machine Learning", "Data Transformation", "Model Evaluation"],
      githubUrl: "https://github.com/bhattshubham06"
    },
    {
      title: "CodeIQ",
      objective: "Full-stack analytics validation platform for technical assessment.",
      impact: "Reliable validation flows with auditability across services.",
      metrics: "Traceable releases | Zero-downtime deploys",
      tools: ["Full-stack Architecture", "Python", "Data Validation"],
      githubUrl: "https://github.com/bhattshubham06"
    }
  ],
  skills: {
    technical: ["Python", "SQL", "Tableau", "Pandas", "Scikit-learn", "MLOps", "Data Mining", "EDA", "Feature Engineering"],
    strategic: ["Business Strategy", "Consulting", "Structured Thinking", "Storytelling", "Problem Solving", "Prompt Engineering"],
    applications: ["Microsoft Office (Word, PPT, Excel)", "Jupyter Notebook", "Tableau"]
  },
  certifications: [
    "BCG Introduction to Strategy Consulting Job Simulation",
    "Google Data Analytics Professional Certificate",
    "Machine Learning Specialization"
  ],
  achievements: ["National Finalist in Enigma at Atharv Ranbhoomi 25, organized by IIM-Indore (Oct 2025)"],
  volunteering: {
    organization: "Robin Hood Army",
    role: "Robin and Tutor",
    description:
      "Tutor children at Robin Academy for basic aptitude; coordinate food and clothing distribution drives."
  },
  seo: {
    title: "Shubham Bhatt | Strategic DataOps Architect",
    description:
      "Strategic DataOps Architect blending engineering precision with MBA-backed strategy. Bridging DataOps engineering and business outcomes.",
    url: "https://shubham-bhatt.dev",
    siteName: "Shubham Bhatt Portfolio",
    keywords: [
      "Shubham Bhatt",
      "DataOps",
      "Strategic Architect",
      "MBA Strategy",
      "Data Engineering",
      "Analytics",
      "Portfolio"
    ],
    openGraphImage: "/shubham-executive.jpeg",
    twitterHandle: "@bhattshubham06"
  }
};

export default portfolioData;
