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
  problem: string;
  approach: string;
  outcome: string;
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
    title: "MBA Candidate (Strategy & Consulting) | Analytics & AI Practitioner",
    headline: "I help teams turn data into practical business decisions",
    subTitle: "Business strategy, analytics, and AI-first problem solving",
    email: "bhattshubhamofficial@gmail.com",
    phone: "+91 8527226410",
    linkedin: "https://www.linkedin.com/in/bhatt-shubham",
    github: "https://github.com/bhattshubham06",
    location: "Dehradun / New Delhi",
    aboutMe:
      "I am an MBA Strategy & Consulting student with a pre-MBA background in data and technology. I work on business problems using structured thinking, analytics, and practical AI workflows. My focus is simple: define the problem clearly, design the right approach, and deliver outcomes that decision-makers can use.",
    resumeUrl: "/Shubham_Bhatt_Resume.pdf",
    heroImage: {
      src: "/shubham-executive.jpeg",
      alt: "Portrait of Shubham Bhatt"
    }
  },
  education: [
    {
      institution: "University of Petroleum and Energy Studies",
      degree: "MBA (Strategy and Consulting)",
      duration: "Expected June 2027",
      location: "Dehradun",
      highlights: ["Core Member of Koshu (Strategy Society)", "Core Member of Case Cafe (Case Center)", "National Finalist at IIM-Indore"]
    },
    {
      institution: "International Institute of Information Technology, Bangalore",
      degree: "Executive Post Graduate Programme in Data Science",
      duration: "Oct 2021 - Nov 2022",
      score: "GPA: 3.30/4.00",
      highlights: ["Specialization in Data Generalist"]
    },
    {
      institution: "Guru Gobind Singh Indraprastha University",
      degree: "Bachelor of Computer Application (BCA)",
      duration: "Aug 2016 - July 2019",
      score: "GPA: 8.64/10.00",
      location: "New Delhi"
    }
  ],
  experience: [],
  projects: [
    {
      title: "Credit Card Fraud Detection",
      objective: "Reduce fraud losses while preserving customer transaction flow.",
      problem: "False negatives in fraud detection were increasing risk exposure and avoidable loss.",
      approach:
        "Designed a recall-focused detection workflow using Python and Scikit-learn, then improved feature quality through EDA and iterative threshold tuning.",
      outcome:
        "Delivered a model framework that improved fraud capture and created a clearer risk-monitoring process for future iterations.",
      impact: "Estimated annual savings potential: $108,636",
      metrics: "Recall Score: 75%",
      tools: ["Python", "Scikit-learn", "Pandas", "Jupyter Notebook", "EDA"],
      githubUrl: "https://github.com/bhattshubham06/Credit-Card-Fraud-Detection"
    },
    {
      title: "Lead Score/Conversion Model",
      objective: "Help sales teams prioritize high-intent leads faster.",
      problem: "Sales bandwidth was spread across low- and high-quality leads with limited prioritization logic.",
      approach:
        "Built a lead-scoring model and evaluation pipeline to rank prospects by conversion likelihood using structured feature engineering and model testing.",
      outcome:
        "Improved targeting clarity for outreach teams and supported more efficient allocation of sales effort.",
      impact: "Better lead prioritization for conversion-focused outreach",
      metrics: "Model optimized for practical decision support",
      tools: ["Python", "Machine Learning", "Data Transformation", "Model Evaluation"],
      githubUrl: "https://github.com/bhattshubham06/Lead-Score"
    },
    
  ],
  skills: {
    technical: ["Python", "SQL", "Tableau", "Pandas", "Scikit-learn", "EDA", "Feature Engineering", "Model Evaluation"],
    strategic: ["Business Strategy", "Structured Problem Solving", "Consulting Communication", "Data Storytelling", "Hypothesis Thinking"],
    applications: ["Excel", "PowerPoint", "Jupyter Notebook", "Tableau"]
  },
  certifications: [
    "BCG Introduction to Strategy Consulting Job Simulation",
    "Google Data Analytics Professional Certificate",
    "Machine Learning Specialization"
  ],
  achievements: ["National Finalist, Enigma at Atharv Ranbhoomi 25 (IIM Indore, Oct 2025)"],
  volunteering: {
    organization: "Robin Hood Army",
    role: "Robin and Tutor",
    description:
      "Tutor children at Robin Academy for basic aptitude; coordinate food and clothing distribution drives."
  },
  seo: {
    title: "Shubham Bhatt | Strategy & Analytics Professional",
    description:
      "MBA Strategy & Consulting candidate with analytics and AI experience. Portfolio focused on business problem solving, structured thinking, and data-backed decision support.",
    url: "https://shubham-bhatt.dev",
    siteName: "Shubham Bhatt Portfolio",
    keywords: [
      "Shubham Bhatt",
      "Data Analysis",
      "Business Strategy",
      "MBA Strategy",
      "MBA Strategy and Consulting",
      "Data Driven Decision Making",
      "Analytics and AI",
      "Consulting Problem Solving",
      "Management Consulting",
      "Business Problem Solving"
    ],
    openGraphImage: "/shubham-executive.jpeg",
    twitterHandle: "@bhattshubham06"
  }
};

export default portfolioData;
