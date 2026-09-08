import {
  SkillGroup,
  ProjectItem,
  LearningStage,
  LevelingUpTrack,
  EducationInfo,
  ExperienceItem,
  ContactInfo
} from '../types';

export const personalData = {
  name: "Ujjwal Kumar",
  title: "Computer Science Student | AI/ML Enthusiast | Full-Stack Developer | DSA Learner",
  shortIntro: "I’m a Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, Data Science, Full-Stack Development, and problem solving. I enjoy turning ideas into practical projects and continuously improving my skills through hands-on development and DSA.",
  
  hero: {
    badge: "B.Tech CSE @ Lovely Professional University",
    headlinePart1: "Building with Code.",
    headlinePart2: "Learning AI.",
    headlinePart3: "Solving Problems.",
    subheading: "Computer Science Student | AI/ML Enthusiast",
    description: "I'm a B.Tech CSE student at Lovely Professional University focused on AI/ML, Data Science, Full-Stack Development, and DSA. I love building practical applications while continuously strengthening my fundamentals.",
    primaryCta: "View My Projects",
    secondaryCta: "Download Resume",
    statusText: "Open to AI/ML & SWE Internships / Roles",
  },

  about: {
    heading: "About Me",
    badge: "Profile & Ambition",
    quote: "Engineering the intersection between theoretical computer science and pragmatic AI deployment.",
    paragraphs: [
      "I'm currently pursuing my B.Tech in Computer Science Engineering at Lovely Professional University. My primary interests lie in Artificial Intelligence, Machine Learning, Data Science, and Software Development.",
      "I enjoy learning by building projects and experimenting with technologies. Alongside AI/ML, I'm strengthening my DSA and programming fundamentals and exploring modern full-stack development.",
      "My long-term goal is to become a strong AI/ML Engineer who can not only build intelligent models but also deploy them as scalable real-world applications."
    ],
    stats: [
      {
        id: "cse-student",
        title: "B.Tech CSE Student",
        subtitle: "Lovely Professional University",
        icon: "GraduationCap",
        detail: "Focusing on CS core & software engineering"
      },
      {
        id: "ai-ml-focus",
        title: "AI/ML Focus",
        subtitle: "Applied Intelligence & Data",
        icon: "Brain",
        detail: "Supervised models, deep neural networks & data pipelines"
      },
      {
        id: "dsa-practice",
        title: "DSA Practice",
        subtitle: "Consistent Problem Solving",
        icon: "Cpu",
        detail: "Strengthening algorithmic intuition & time complexity"
      },
      {
        id: "full-stack-dev",
        title: "Full-Stack Development",
        subtitle: "End-to-End Applications",
        icon: "Layers",
        detail: "React, Node.js, Express, REST APIs & Databases"
      },
      {
        id: "project-learning",
        title: "Project Based Learning",
        subtitle: "Ideation to Production",
        icon: "Rocket",
        detail: "Turning ideas into real-world deployed solutions"
      }
    ]
  }
};

export const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com/in",
  email: "ujjwalkumar.work@gmail.com",
  leetcode: "https://leetcode.com",
};

export const contactData: ContactInfo = {
  email: "ujjwalkumar.work@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com/in",
  location: "Lovely Professional University, Punjab, India",
  availability: "Actively seeking Summer 2026 Internships & AI/ML / SWE Roles"
};

export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    category: "Programming",
    icon: "Code2",
    description: "Core languages utilized for algorithmic problem solving, scripting, and system design.",
    skills: [
      { name: "Python", level: "Comfortable", tag: "Primary for AI/ML & Scripting" },
      { name: "C++", level: "Comfortable", tag: "DSA & Algorithmic Foundation" },
      { name: "Java", level: "Learning", tag: "OOP & Enterprise Concepts" },
      { name: "JavaScript", level: "Comfortable", tag: "Modern Web & Async" },
      { name: "SQL", level: "Comfortable", tag: "Relational Queries & Optimization" }
    ]
  },
  {
    id: "ai-ml",
    category: "AI / Machine Learning",
    icon: "Sparkles",
    description: "Data manipulation libraries, predictive modeling architectures, and deep neural nets.",
    skills: [
      { name: "NumPy", level: "Comfortable", tag: "Vectorized Computations" },
      { name: "Pandas", level: "Comfortable", tag: "Data Wrangling & Cleaning" },
      { name: "Scikit-learn", level: "Comfortable", tag: "Classical ML Algorithms" },
      { name: "TensorFlow / Keras", level: "Learning", tag: "Neural Network Architectures" },
      { name: "Machine Learning", level: "Comfortable", tag: "Supervised & Unsupervised" },
      { name: "Deep Learning", level: "Learning", tag: "CNNs, Dense Layers & Backprop" },
      { name: "Data Analysis", level: "Comfortable", tag: "Exploratory Data Analysis (EDA)" }
    ]
  },
  {
    id: "web-dev",
    category: "Web Development",
    icon: "Globe",
    description: "Full-stack client and server frameworks for constructing modern reactive web platforms.",
    skills: [
      { name: "HTML5", level: "Comfortable", tag: "Semantic Markup" },
      { name: "CSS3 / Tailwind", level: "Comfortable", tag: "Modern Responsive Layouts" },
      { name: "JavaScript (ES6+)", level: "Comfortable", tag: "Async/Await & DOM" },
      { name: "React", level: "Comfortable", tag: "Components, Hooks & State" },
      { name: "Node.js", level: "Learning", tag: "Event-Driven Runtime" },
      { name: "Express.js", level: "Learning", tag: "RESTful Endpoints & Middleware" },
      { name: "Flask", level: "Comfortable", tag: "Lightweight Python Microservices" },
      { name: "FastAPI", level: "Exploring", tag: "High-Performance Async Python APIs" }
    ]
  },
  {
    id: "databases",
    category: "Databases",
    icon: "Database",
    description: "Relational schema design and document-based persistent storage solutions.",
    skills: [
      { name: "MySQL", level: "Comfortable", tag: "Relational Schemas & Joins" },
      { name: "MongoDB", level: "Learning", tag: "NoSQL JSON Document Stores" },
      { name: "PostgreSQL", level: "Exploring", tag: "ACID Transactions & Advanced Queries" }
    ]
  },
  {
    id: "tools",
    category: "Tools & DevOps",
    icon: "Wrench",
    description: "Essential workflow utilities, version control systems, and deployment infrastructure.",
    skills: [
      { name: "Git", level: "Comfortable", tag: "Version Control & Branching" },
      { name: "GitHub", level: "Comfortable", tag: "Collaboration & Open Source" },
      { name: "VS Code", level: "Comfortable", tag: "Configured Dev Environment" },
      { name: "Jupyter Notebook", level: "Comfortable", tag: "Data Analysis & Experiments" },
      { name: "Postman", level: "Comfortable", tag: "API Testing & Mocking" },
      { name: "Vercel", level: "Comfortable", tag: "Frontend Deployment" },
      { name: "Netlify", level: "Comfortable", tag: "Continuous Web Hosting" }
    ]
  },
  {
    id: "core-cs",
    category: "Core CS / DSA",
    icon: "Binary",
    description: "Underpinning theoretical computer science principles that enable robust software engineering.",
    skills: [
      { name: "Data Structures", level: "Comfortable", tag: "Linear & Non-linear Types" },
      { name: "Algorithms", level: "Comfortable", tag: "Search, Sort, Greedy, DP" },
      { name: "OOP", level: "Comfortable", tag: "Inheritance, Polymorphism, Abstraction" },
      { name: "DBMS", level: "Comfortable", tag: "Normalization & Indexing" },
      { name: "Computer Networks", level: "Learning", tag: "OSI Model, TCP/IP, Protocols" },
      { name: "Operating Systems", level: "Learning", tag: "Processes, Threads & Memory" },
      { name: "Problem Solving", level: "Comfortable", tag: "Analytical Thinking & Decomposition" }
    ]
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "campus-closet",
    title: "LPU Campus Closet",
    headline: "Campus-focused peer marketplace and reservation ecosystem for university students",
    category: ["Full Stack", "All"],
    description: "A campus-focused marketplace where students can discover, list, reserve, and manage products within the university ecosystem.",
    longDescription: "LPU Campus Closet was built to solve intra-campus exchange friction. Students often need course textbooks, lab aprons, drawing tools, calculators, and university apparel for brief periods. This platform allows students to safely list items, chat or send reservation inquiries, and coordinate pickups within the campus boundaries.",
    keyHighlight: "Full-stack application with authentication, product management, reservations and deployment.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST API", "Tailwind CSS"],
    image: "/assets/campus-closet.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://campus-closet-demo.vercel.app",
    architectureDetails: [
      "Client-Side: Responsive React SPA with contextual state, real-time search filtering, and clean modal interactions.",
      "Server-Side: Express.js REST API with JWT-based student authentication and role-based access control.",
      "Database: MongoDB schemas for User profiles, Inventory listings, and Active student reservation requests.",
      "Security: Sanitize inputs, hashed password storage with bcrypt, and CORS configured for university subnet domain."
    ],
    features: [
      "Student authentication with student ID verification flow",
      "Dynamic listing catalog with categories (Books, Electronics, Uniforms, Lab Equipment)",
      "One-click item reservation system with pickup scheduler",
      "Real-time search and filter by price range and condition",
      "Personal dashboard for managing active listings and incoming reservations"
    ],
    metrics: [
      { label: "Architecture", value: "RESTful MERN" },
      { label: "Role Scope", value: "Full-Stack Dev" },
      { label: "Deployment", value: "Vercel + Cloud DB" }
    ],
    featured: true
  },
  {
    id: "ai-detection",
    title: "Fake or Real? — AI Detection Platform",
    headline: "AI-powered content integrity analyzer detecting manipulated text, media & deepfakes",
    category: ["AI/ML", "Full Stack", "Python", "All"],
    description: "An AI-powered platform designed to analyze content and help distinguish potentially real and manipulated information.",
    longDescription: "With the rapid surge of generative AI synthesis, verifying authentic information has become a critical challenge. 'Fake or Real?' combines frontend transparency with cutting-edge Hugging Face transformer models and custom Python heuristic classifiers to inspect textual and media artifacts, outputting confidence scores and visual explainability breakdowns.",
    keyHighlight: "AI + Full-Stack integration bridging Python ML inference pipelines with interactive React dashboards.",
    technologies: ["React", "Express.js", "Python", "Machine Learning", "Hugging Face APIs", "Tailwind CSS"],
    image: "/assets/ai-detection.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://fake-or-real-detector.vercel.app",
    architectureDetails: [
      "Frontend: High-tech analytical dashboard presenting confidence gauge, frequency spectrogram, and text perplexity analysis.",
      "Middleware: Express gateway proxying requests, caching frequent token sequences, and handling rate limits.",
      "Inference Service: Python backend utilizing Hugging Face transformer endpoints and feature extraction heuristics.",
      "Explainability: Highlights suspicious token probabilities and visual anomaly metrics for the user."
    ],
    features: [
      "Multi-modal input inspection (text synthesis verification and media anomaly indicators)",
      "Calculates authenticity confidence scores with probabilistic certainty intervals",
      "Highlights synthesized syntactic patterns in analyzed text",
      "Fast asynchronous API response with real-time analysis loading state",
      "Educational guidance educating users on detecting AI artifacts"
    ],
    metrics: [
      { label: "Inference Stack", value: "PyTorch & Transformers" },
      { label: "Integration", value: "React + Python API" },
      { label: "Focus", value: "AI Forensics" }
    ],
    featured: true
  },
  {
    id: "ml-predictions",
    title: "ML Prediction & Analytics Projects",
    headline: "Systematic predictive modeling suite focusing on classification, regression & tuning",
    category: ["AI/ML", "Python", "All"],
    description: "A structured portfolio of machine learning pipelines implementing end-to-end classification, regression, feature preprocessing, and ensemble learning.",
    longDescription: "A comprehensive repository of applied machine learning investigations. Covers end-to-end pipelines including missing data imputation, outlier detection, standard scaling, PCA dimensionality reduction, hyperparameter optimization via GridSearchCV, and comparative evaluation using ROC-AUC, precision-recall curves, and confusion matrices.",
    keyHighlight: "Hands-on implementation of Scikit-learn pipelines, ensemble algorithms (Random Forest, Gradient Boosting), and rigorous cross-validation.",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter"],
    image: "/assets/ml-prediction.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    architectureDetails: [
      "Data Preprocessing: Automated cleaning pipelines with Scikit-learn ColumnTransformer and custom encoders.",
      "Modeling: Implementation of Logistic Regression, Decision Trees, Random Forests, and Gradient Boosted machines.",
      "Evaluation: Custom plotting functions for Confusion Matrices, ROC-AUC curves, and Feature Importance graphs.",
      "Hyperparameter Tuning: Cross-validated Grid and Random search routines optimizing F1-scores."
    ],
    features: [
      "End-to-end data preprocessing pipelines for tabular datasets",
      "Benchmarking between baseline linear models and advanced ensemble learners",
      "Feature importance extraction and interpretability analysis",
      "Automated train-test split validation with Stratified K-Fold",
      "Modular, reproducible Jupyter Notebooks with documented deductions"
    ],
    metrics: [
      { label: "Algorithms", value: "Ensemble & Linear" },
      { label: "Core Library", value: "Scikit-learn" },
      { label: "Methodology", value: "K-Fold Cross-Val" }
    ],
    featured: true
  },
  {
    id: "flask-applications",
    title: "Python Flask Applications Suite",
    headline: "Collection of practical web utilities built with Python Flask microframework and SQL",
    category: ["Python", "Full Stack", "All"],
    description: "A collection of practical web utilities demonstrating backend routing, SQL database management, and dynamic template rendering.",
    longDescription: "A cohesive series of full-stack microservices engineered with Python and Flask. Built to master server-side rendering, REST endpoints, session management, database migrations, and clean application factories. Includes: (1) News Application with category feeds, (2) Employee Attendance Tracker with check-in timestamps, (3) To-Do Task Manager with priority tags, and (4) Personal Budget Tracker with expense categorization.",
    keyHighlight: "Four modular Flask applications demonstrating database modeling, CRUD operations, authentication, and templating.",
    technologies: ["Python", "Flask", "HTML5", "CSS3", "SQLite/MySQL", "Jinja2"],
    image: "/assets/flask-apps.jpg",
    githubUrl: "https://github.com",
    liveUrl: "https://github.com",
    architectureDetails: [
      "Framework: Python Flask using modular Blueprints and Application Factory pattern.",
      "Database Layer: SQLAlchemy ORM mapping relational entities to SQLite and MySQL.",
      "Templating: Dynamic Jinja2 layouts with reusable partials and macro components.",
      "State: Secure server-side sessions with CSRF protection on all user input forms."
    ],
    features: [
      "News Application: Fetches, filters and categorizes tech/general news with cached feeds",
      "Employee Attendance System: Tracks daily check-ins, calculates working hours, and exports logs",
      "To-Do Task Application: Multi-list task organizer with priority flags and status toggles",
      "Budget Tracker: Logs expenses, visualizes categories, and calculates remaining balances",
      "Clean UI styled with modern CSS and intuitive user flows"
    ],
    metrics: [
      { label: "Applications", value: "4 Modular Apps" },
      { label: "Backend", value: "Python Flask" },
      { label: "Database", value: "SQL & SQLAlchemy" }
    ],
    featured: true
  }
];

export const levelingUpTracks: LevelingUpTrack[] = [
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    icon: "BrainCircuit",
    badge: "Problem Solving Engine",
    description: "Active daily practice solving algorithmic problems to build strong computational intuition and optimized complexity reasoning.",
    items: [
      { name: "Arrays", state: "Core Focus", tag: "Two Pointers, Sliding Window" },
      { name: "Strings", state: "Core Focus", tag: "Pattern Matching, Anagrams" },
      { name: "Linked Lists", state: "Core Focus", tag: "Fast & Slow Pointers" },
      { name: "Stack", state: "Core Focus", tag: "Monotonic Stack, Evaluation" },
      { name: "Queue", state: "Core Focus", tag: "Deque, BFS Traversals" },
      { name: "HashMap", state: "Core Focus", tag: "Frequency Counting, Hashing" },
      { name: "Binary Search", state: "Core Focus", tag: "Rotated Arrays, Search Space" },
      { name: "Sorting", state: "Core Focus", tag: "Quick Sort, Merge Sort" },
      { name: "Recursion & Backtracking", state: "Practicing", tag: "Subsets, Permutations" },
      { name: "Trees", state: "Practicing", tag: "BST, DFS, BFS Traversals" },
      { name: "Graphs", state: "Practicing", tag: "Adjacency, Dijkstra, TopoSort" }
    ]
  },
  {
    id: "aiml",
    title: "AI / Machine Learning",
    icon: "Bot",
    badge: "Intelligent Systems",
    description: "Deepening theoretical understanding and practical deployment of statistical learning and modern neural models.",
    items: [
      { name: "Machine Learning", state: "Core Focus", tag: "Regression, Classification, SVM" },
      { name: "Deep Learning", state: "Practicing", tag: "Neural Networks, Backprop, Loss Functions" },
      { name: "Model Optimization", state: "Practicing", tag: "Regularization, Adam, Learning Rates" },
      { name: "Model Deployment", state: "Practicing", tag: "Exporting ONNX/Pickle, API Serving" },
      { name: "Generative AI", state: "Exploring", tag: "Diffusion Concepts & Embeddings" },
      { name: "LLMs", state: "Exploring", tag: "Prompt Engineering, RAG & Fine-Tuning" }
    ]
  },
  {
    id: "dev",
    title: "Modern Development",
    icon: "Terminal",
    badge: "Production Craft",
    description: "Mastering the toolchain needed to ship production-ready applications with resilient architectures and sleek interfaces.",
    items: [
      { name: "React", state: "Core Focus", tag: "Hooks, Context, Component Design" },
      { name: "Node.js", state: "Practicing", tag: "Async I/O, NPM Ecosystem" },
      { name: "Express.js", state: "Practicing", tag: "Middleware, Routing & Controllers" },
      { name: "FastAPI", state: "Exploring", tag: "Pydantic Models & Async Endpoints" },
      { name: "Databases (SQL & NoSQL)", state: "Core Focus", tag: "Schema Design, Indexes, Relationships" },
      { name: "REST APIs", state: "Core Focus", tag: "Statelessness, JSON, Status Codes" }
    ]
  }
];

export const educationData: EducationInfo = {
  degree: "B.Tech — Computer Science Engineering",
  institution: "Lovely Professional University (LPU)",
  location: "Punjab, India",
  duration: "Present",
  status: "In Progress",
  description: "Building an extensive academic and practical foundation across computational theory, software design, systems architecture, and intelligent data systems.",
  coreSubjects: [
    "Computer Science Fundamentals",
    "Data Structures & Algorithms",
    "Database Management Systems (DBMS)",
    "Computer Networks",
    "Software Engineering",
    "Artificial Intelligence & Machine Learning",
    "Operating Systems",
    "Object Oriented Programming"
  ],
  highlights: [
    "Active participant in technical student communities and coding sessions",
    "Strong emphasis on practical laboratory implementation alongside theoretical coursework",
    "Building real-world peer utilities like LPU Campus Closet to solve local campus needs"
  ]
};

export const learningJourneyStages: LearningStage[] = [
  {
    step: 1,
    title: "Programming Fundamentals",
    subtitle: "Logic & Syntax",
    description: "Mastering core control flow, loops, functions, memory concepts, and algorithmic thinking in C++ and Python.",
    status: "Completed",
    skillsGained: ["Variables & Control Flow", "Functions & Pointers", "Modular Code Structure"]
  },
  {
    step: 2,
    title: "Python Mastery",
    subtitle: "Scripting & Data Basics",
    description: "Leveraging Python's expressive syntax for file operations, automation scripts, and foundational data structures.",
    status: "Completed",
    skillsGained: ["OOP in Python", "List Comprehensions", "Packages & Virtual Envs"]
  },
  {
    step: 3,
    title: "Machine Learning",
    subtitle: "Statistical Modeling",
    description: "Training predictive models with Scikit-learn, understanding feature scaling, classification, and regression.",
    status: "Completed",
    skillsGained: ["NumPy & Pandas", "Supervised Learning", "Model Evaluation Metrics"]
  },
  {
    step: 4,
    title: "Deep Learning",
    subtitle: "Neural Architectures",
    description: "Diving into perceptrons, multilayer dense networks, convolutional layers, backpropagation, and loss functions.",
    status: "In Progress",
    skillsGained: ["TensorFlow/Keras", "Feedforward Nets", "Activation Functions"]
  },
  {
    step: 5,
    title: "Full-Stack Development",
    subtitle: "Bridging Client & Server",
    description: "Constructing scalable web applications using React, Node.js, Express, and RESTful API design.",
    status: "In Progress",
    skillsGained: ["React Component State", "Express Middleware", "Database Integration"]
  },
  {
    step: 6,
    title: "DSA Deep Dive",
    subtitle: "Algorithmic Efficiency",
    description: "Rigorous daily practice mastering advanced data structures, graph traversals, and dynamic programming on LeetCode.",
    status: "In Progress",
    skillsGained: ["Binary Search & Trees", "Graph Algorithms", "Space-Time Optimization"]
  },
  {
    step: 7,
    title: "Generative AI",
    subtitle: "Transformers & LLMs",
    description: "Exploring transformer architectures, self-attention mechanisms, Hugging Face integrations, and prompt engineering.",
    status: "Next Horizon",
    skillsGained: ["Transformer Basics", "Hugging Face Pipeline", "Contextual Embeddings"]
  },
  {
    step: 8,
    title: "AI/ML Engineering",
    subtitle: "Production AI Systems",
    description: "The ultimate convergence: architecting, training, evaluating, and deploying scalable machine learning systems in production.",
    status: "Next Horizon",
    skillsGained: ["MLOps Fundamentals", "API Model Serving", "Scalable Inference"]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "academic-projects",
    title: "Academic Projects",
    tagline: "Bridging Curricular Theory to Pragmatic Code",
    period: "Ongoing Coursework",
    description: "Developing robust software solutions and computer science deliverables as part of the B.Tech CSE curriculum at Lovely Professional University.",
    keyPoints: [
      "Architected database schemas adhering to 3NF normalization for campus utility records.",
      "Implemented classical search and sorting algorithms from scratch to measure empirical vs theoretical time complexity.",
      "Collaborated in student teams to conduct code reviews and maintain structured Git repositories."
    ],
    technologies: ["C++", "Python", "SQL", "DBMS", "Computer Networks"],
    badge: "University Track"
  },
  {
    id: "personal-projects",
    title: "Personal Projects & Prototypes",
    tagline: "Autonomous Product Ideation & Execution",
    period: "Continuous",
    description: "Designing and engineering full-stack and machine learning applications independently to solve real problems and explore cutting-edge tooling.",
    keyPoints: [
      "Built 'LPU Campus Closet', a full-stack student marketplace enabling hassle-free item reservations.",
      "Created 'Fake or Real? AI Detection Platform' bridging Hugging Face APIs with reactive client dashboards.",
      "Developed a suite of Python Flask web utilities for attendance logging, task tracking, and news curation."
    ],
    technologies: ["React", "Express.js", "Python", "Flask", "MongoDB", "Tailwind CSS"],
    badge: "Independent Builder"
  },
  {
    id: "problem-solving",
    title: "Problem Solving & DSA",
    tagline: "Algorithmic Rigor & Mental Agility",
    period: "Daily Discipline",
    description: "Consistently practicing on coding platforms, decomposing complex challenges into optimal sub-problems and analyzing edge cases.",
    keyPoints: [
      "Systematic problem solving covering Arrays, Two Pointers, Sliding Windows, Stacks, HashMaps, and Binary Search.",
      "Progressing into recursive tree traversals (DFS/BFS) and foundational graph pathfinding algorithms.",
      "Refactoring solutions to achieve optimal O(N) or O(log N) time complexities with minimal auxiliary space."
    ],
    technologies: ["C++", "Python", "LeetCode", "Data Structures", "Algorithms"],
    badge: "DSA Practice"
  },
  {
    id: "continuous-learning",
    title: "Continuous Learning & Exploration",
    tagline: "Evolving with the AI Revolution",
    period: "Future-Facing",
    description: "Constantly reading research blogs, exploring AI libraries, and following industry best practices in modern software engineering.",
    keyPoints: [
      "Studying model fine-tuning, retrieval-augmented generation (RAG), and generative AI workflows.",
      "Experimenting with FastAPI for high-throughput asynchronous ML inference endpoints.",
      "Expanding system design comprehension to understand how enterprise systems handle scale, caching, and concurrency."
    ],
    technologies: ["Deep Learning", "Generative AI", "FastAPI", "Modern Cloud", "System Design"],
    badge: "Tech Growth"
  }
];

export const codingStatsPlaceholder = {
  headline: "Code. Build. Improve. Repeat.",
  subtitle: "Authentic commit and problem-solving activity tracking my daily progress as a student developer.",
  githubUsername: "ujjwalkumar",
  leetcodeUsername: "ujjwalkumar",
  statsNote: "No fabricated percentages or inflated metrics. My GitHub repositories and LeetCode profiles reflect real, ongoing practice.",
  categories: [
    { name: "Fundamentals & Logic", count: "30+", tag: "Arrays, Strings, Math" },
    { name: "Data Structures", count: "45+", tag: "Lists, Stacks, Queues, HashMaps" },
    { name: "Algorithms & Search", count: "25+", tag: "Binary Search, Two Pointers, Sorting" },
    { name: "AI/ML Experiments", count: "15+", tag: "Scikit-Learn, Pandas & Notebooks" }
  ]
};
