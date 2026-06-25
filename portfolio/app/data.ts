export const projects = [
  {
    id: "handmix",
    featured: true,
    name: "HandMix",
    eyebrow: "Featured Project",
    desc: "Gesture-controlled music mixer that uses your webcam to track hands in real time. Each finger controls a different audio stem vocals, bass, drums, and synths. Curl a finger to mute it, raise it to bring it back.",
    tags: ["Python", "MediaPipe", "Meta Demucs", "Computer Vision", "AI"],
    image: "/images/handmix.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7460438402770030592/",
    linkLabel: "Watch demo on LinkedIn →",
  },
  {
    id: "pointbank",
    featured: false,
    name: "Point B_ank",
    desc: "Open-source archaeology artifact catalogue used by researchers to document and manage excavation findings. Converting frontend to TypeScript, implementing account management, and reviving the test framework.",
    tags: ["React", "TypeScript", "Node.js"],
    image: "/images/pointbank.png",
    link: "https://pblank.blewi.xyz",
    linkLabel: "Live site →",
  },
  {
    id: "codetalk",
    featured: false,
    name: "CodeTalk",
    desc: "Full-stack discussion platform with JWT auth, threaded conversations, image uploads, search/filter tags and admin moderation, supporting 50+ concurrent users with sub-100ms query response.",
    tags: ["React", "Node.js", "CouchDB", "JWT"],
    image: "/images/codetalk.png",
    link: null,
    linkLabel: null,
  },
  {
    id: "ecowaste",
    featured: false,
    name: "Eco-Waste Scheduler",
    desc: "Serverless food-expiry reminder system on GCP using Cloud Functions and Pub/Sub. Reduced food waste by 20% in pilot testing with sub-100ms function execution.",
    tags: ["GCP", "Firestore", "Pub/Sub", "Python"],
    image: "/images/ecowaste.png",
    link: null,
    linkLabel: null,
  },
  {
    id: "finance",
    featured: false,
    name: "Finance Dashboard",
    desc: "Real-time stock analytics dashboard with portfolio metrics including Sharpe Ratio, Max Drawdown, and Cumulative Returns. Containerized with Docker.",
    tags: ["Python", "Streamlit", "Plotly", "Docker"],
    image: "/images/finance.png",
    link: "https://github.com/Chubi1407/finance-dashboard",
    linkLabel: "GitHub →",
  },
];

export const skills = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Go", "Java", "SQL", "C"],
  },
  {
    title: "Frameworks",
    items: ["React.js", "Node.js", "Express", "Flask", "Streamlit"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "GCP", "Docker", "CI/CD", "Lambda", "Cloud Functions"],
  },
  {
    title: "ML & Data",
    items: ["scikit-learn", "NLP", "MediaPipe", "Pandas", "NumPy", "TF-IDF"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "CouchDB", "SQLite", "Firestore"],
  },
  {
    title: "Tools",
    items: ["Git", "Linux/Bash", "Postman", "Agile/Scrum", "Kaggle"],
  },
];

export const experience = [
  {
    title: "Research Assistant, Software Quality Lab",
    org: "University of Saskatchewan · Dr. Zadia Codabux",
    date: "May 2026 – Present",
    bullets: [
      "Analysed and synthesized academic literature on technical debt, code smell detection, and LLMs, producing structured summaries that informed active research directions in the Software Quality Lab",
      "Built NLP and text classification skills through hands-on work with Python, scikit-learn, and defect prediction pipelines across multiple concurrent research projects",
      "Supported a Mitacs research intern on a data structures and algorithms textbook analysis project, contributing ideas and feedback on weekly progress presentations",
      
    ],
  },
  {
    title: "Student Assistant, USask Recreation",
    org: "University of Saskatchewan",
    date: "2024 – Present",
    bullets: [
      "Supported daily operations of the Physical Activity Complex serving hundreds of students and staff, demonstrating reliability and clear communication in a fast-paced environment",
    ],
  },
];