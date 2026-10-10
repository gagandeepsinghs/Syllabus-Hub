export const syllabuses = [
  {
    id: "ai-ml",
    title: "AI/ML",
    subtitle: "Complete Roadmap",
    description: "Step-by-step topics to learn Artificial Intelligence and Machine Learning.",
    icon: "BrainCircuit",
    image: "/assets/AiML.png",
    modules: [
      {
        id: "m1",
        title: "PYTHON FOR AI/ML",
        icon: "Terminal",
        category: "foundation",
        topics: [
          "Python Basics (if not known)",
          "Data Types & Structures",
          "Functions",
          "OOP (Basic)",
          "Numpy Basics",
          "Pandas Basics",
          "Matplotlib Basics",
          "Seaborn Basics",
          "Jupyter Notebook",
          "File Handling",
          "Exception Handling"
        ]
      },
      {
        id: "m2",
        title: "MATHEMATICS FOR ML",
        icon: "Calculator",
        category: "foundation",
        topics: [
          "Linear Algebra",
          "- Vectors & Matrices",
          "- Eigenvalues, Eigenvectors",
          "Calculus",
          "- Derivatives",
          "- Gradients",
          "Probability",
          "- Random Variables",
          "- Distributions",
          "Statistics",
          "- Mean, Median, Mode",
          "- Variance, Std Deviation",
          "- Correlation, Covariance",
          "Hypothesis Testing",
          "Bayes Theorem"
        ]
      },
      {
        id: "m3",
        title: "STATISTICS & PROBABILITY",
        icon: "BarChart3",
        category: "foundation",
        topics: [
          "Descriptive Statistics",
          "Probability Distributions",
          "- Normal, Binomial",
          "- Poisson, Uniform",
          "Sampling Techniques",
          "Central Limit Theorem",
          "Confidence Interval",
          "Hypothesis Testing",
          "- Z-test, T-test, Chi-square",
          "ANOVA (Basics)",
          "Correlation & Regression (Basic)"
        ]
      },
      {
        id: "m4",
        title: "MACHINE LEARNING ALGORITHMS",
        icon: "Cpu",
        category: "core",
        topics: [
          "Supervised Learning",
          "- Linear Regression",
          "- Logistic Regression",
          "- Decision Tree",
          "- Random Forest",
          "- Support Vector Machine (SVM)",
          "- K-Nearest Neighbors (KNN)",
          "Unsupervised Learning",
          "- K-Means Clustering",
          "- Hierarchical Clustering",
          "- DBSCAN",
          "- PCA",
          "Ensemble Techniques",
          "- Bagging, Boosting",
          "- XGBoost (Basics)"
        ]
      },
      {
        id: "m5",
        title: "MODEL EVALUATION & TUNING",
        icon: "Target",
        category: "core",
        topics: [
          "Train, Validation, Test Split",
          "Confusion Matrix",
          "Accuracy, Precision, Recall, F1-Score",
          "ROC-AUC Curve",
          "Cross Validation",
          "- K-Fold Cross Validation",
          "Bias-Variance Tradeoff",
          "Hyperparameter Tuning",
          "- Grid Search",
          "- Randomized Search"
        ]
      },
      {
        id: "m6",
        title: "DEEP LEARNING (BASICS)",
        icon: "Network",
        category: "advanced",
        topics: [
          "Perceptron",
          "Artificial Neural Networks (ANN)",
          "Activation Functions",
          "Loss Functions",
          "Backpropagation",
          "Gradient Descent",
          "Optimizers (SGD, Adam, RMSprop)",
          "Dropout & Regularization",
          "Convolutional Neural Networks (CNN) Basics",
          "Recurrent Neural Networks (RNN) Basics"
        ]
      },
      {
        id: "m7",
        title: "NLP (NATURAL LANGUAGE PROCESSING)",
        icon: "MessageSquareText",
        category: "advanced",
        topics: [
          "Text Preprocessing",
          "- Tokenization",
          "- Stop Words",
          "- Stemming, Lemmatization",
          "Bag of Words (BoW)",
          "TF-IDF",
          "Word Embeddings",
          "- Word2Vec",
          "- GloVe",
          "Sentiment Analysis (Basics)",
          "Text Classification (Basics)"
        ]
      },
      {
        id: "m8",
        title: "COMPUTER VISION (BASICS)",
        icon: "Eye",
        category: "advanced",
        topics: [
          "Image Representation",
          "Image Preprocessing",
          "Feature Extraction",
          "OpenCV Basics",
          "Image Classification (CNN)",
          "Object Detection (YOLO Basics)",
          "Transfer Learning (Basics)"
        ]
      },
      {
        id: "m9",
        title: "ADVANCED TOPICS",
        icon: "Lightbulb",
        category: "advanced",
        topics: [
          "Feature Engineering",
          "Dimensionality Reduction (PCA, t-SNE)",
          "Handling Imbalanced Data",
          "Time Series Analysis (ARIMA)",
          "Anomaly Detection",
          "Reinforcement Learning (Overview)",
          "AutoML (Overview)"
        ]
      },
      {
        id: "m10",
        title: "REAL-WORLD PROJECTS",
        icon: "Briefcase",
        category: "practical",
        topics: [
          "End-to-End ML Project",
          "Classification Projects",
          "Regression Projects",
          "Clustering Projects",
          "NLP Projects",
          "Computer Vision Projects",
          "Deploy ML Model (Web App)",
          "Portfolio on GitHub/Kaggle"
        ]
      }
    ]
  },
  {
    id: "ai-engineer",
    title: "AI Engineer",
    subtitle: "Complete Syllabus",
    description: "Learn to build, deploy, and scale AI models.",
    icon: "Cpu",
    image: "/assets/AI Engineer.png",
    modules: [
       { id: "m1", title: "PYTHON FUNDAMENTALS", category: "foundation", topics: ["Python Basics & Setup", "Variables, Data Types", "Operators & Expressions", "Control Flow (if, elif, else)", "Loops (for, while)", "Functions & Modules", "File Handling", "Exception Handling", "OOP in Python", "Virtual Environments", "Useful Libraries"] },
       { id: "m2", title: "MATHEMATICS & STATISTICS", category: "foundation", topics: ["Linear Algebra", "Calculus (Basic)", "Probability & Statistics", "Descriptive & Inferential", "Distributions", "Hypothesis Testing", "Correlation & Covariance", "Optimization Basics", "Understanding Model Math For Deep Learning"] },
       { id: "m3", title: "DATA HANDLING & ANALYSIS", category: "core", topics: ["NumPy for Numerical Data", "Pandas for Data Manipulation", "Data Cleaning & Preprocessing", "Handling Missing Values", "Data Visualization", "Exploratory Data Analysis (EDA)", "Feature Engineering", "Working with Real-world Datasets", "SQL for Data Extraction"] },
       { id: "m4", title: "MACHINE LEARNING", category: "core", topics: ["What is Machine Learning?", "Types of ML (Supervised, Unsupervised, Reinforcement)", "Regression & Classification", "Common Algorithms", "Model Evaluation (Metrics)", "Overfitting & Underfitting", "Cross Validation", "Hyperparameter Tuning", "Scikit-learn Library", "End-to-End ML Projects"] },
       { id: "m5", title: "DEEP LEARNING", category: "core", topics: ["Neural Networks Basics", "Activation Functions", "Loss Functions", "Optimizers (SGD, Adam)", "CNN (Computer Vision)", "RNN, LSTM, GRU (NLP)", "Transfer Learning", "TensorFlow / Keras / PyTorch", "Model Training & Evaluation", "Building Deep Learning Projects"] },
       { id: "m6", title: "NATURAL LANGUAGE PROCESSING", category: "advanced", topics: ["Text Processing & Cleaning", "Tokenization, Stemming, Lemmatization", "Bag of Words, TF-IDF", "Word Embeddings (Word2Vec, GloVe)", "Transformer Architecture", "BERT, GPT, LLM Models", "Fine-tuning LLMs", "Prompt Engineering", "RAG (Retrieval Augmented Generation)", "Real-world NLP Projects (Chatbot, Summarizer)"] },
       { id: "m7", title: "COMPUTER VISION", category: "advanced", topics: ["Image Processing Basics", "OpenCV", "Image Augmentation", "CNN for Image Classification", "Object Detection (YOLO, SSD)", "Image Segmentation", "Face Recognition", "Pre-trained Models (ResNet, VGG)", "Real-world CV Projects"] },
       { id: "m8", title: "GENERATIVE AI", category: "advanced", topics: ["What is Generative AI?", "Diffusion Models (Stable Diffusion)", "Text to Image Generation", "Image to Image / Inpainting", "Text Generation (GPT, LLAMA)", "ControlNet, LoRA, DreamBooth", "Multimodal AI (Text + Image)", "Creative AI Projects"] },
       { id: "m9", title: "AI SYSTEMS & MLOps", category: "advanced", topics: ["Model Deployment (FastAPI)", "REST APIs for AI Models", "Docker & Containerization", "Cloud Platforms (AWS, GCP, Azure)", "CI/CD for ML", "Model Monitoring", "Scalability & Optimization", "Version Control (Git, GitHub)", "Experiment Tracking (MLflow)", "Production Best Practices"] },
       { id: "m10", title: "ADVANCED TOPICS", category: "advanced", topics: ["Reinforcement Learning", "Multi-Agent Systems", "AI Agents & Tool Use (LangChain)", "Vector Databases (FAISS, Chroma)", "LangChain & LLM Frameworks", "RAG Pipelines", "Agentic AI (Autonomous Agents)", "Fine-tuning & Model Alignment", "Safety, Ethics & Bias in AI", "Latest AI Research & Trends"] }
    ]
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    subtitle: "Complete Syllabus",
    description: "Master data visualization, SQL, and business intelligence.",
    icon: "PieChart",
    image: "/assets/Data Analyst.png",
    modules: [
       { id: "m1", title: "PYTHON BASICS", category: "foundation", topics: ["Introduction to Python", "Python Installation", "Variables", "Data Types", "Type Casting", "Input & Output", "Comments", "Operators", "Conditional Statements", "Loops", "break, continue, pass", "Strings", "String Methods", "Lists", "List Methods", "Tuples", "Sets", "Set Methods", "Dictionaries", "Dictionary Methods", "Functions", "Lambda Functions", "List Comprehension", "File Handling", "Exception Handling", "Modules", "Packages", "Virtual Environment"] },
       { id: "m2", title: "EXCEL", category: "foundation", topics: ["Excel Interface", "Data Entry & Editing", "Data Formatting", "Formulas & Functions (Basic, Advanced)", "Cell References", "Conditional Formatting", "Data Validation", "Sort & Filter", "Data Cleaning", "Text Functions", "Date & Time Functions", "Logical Functions", "Lookup Functions (VLOOKUP, HLOOKUP, INDEX MATCH, XLOOKUP)", "Pivot Tables", "Pivot Charts", "What-If Analysis", "Charts & Graphs", "Dashboard in Excel", "Power Query (Get & Transform)"] },
       { id: "m3", title: "SQL", category: "core", topics: ["Introduction to SQL", "SQL Installation", "Database Concepts", "SELECT Statement", "WHERE Clause", "ORDER BY", "GROUP BY", "HAVING Clause", "AND, OR, NOT Operators", "IN, BETWEEN, LIKE", "Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)", "Joins (INNER, LEFT, RIGHT, FULL)", "Subqueries", "Union", "Date Functions", "Case Statements", "Views", "CTE (Common Table Expressions)"] },
       { id: "m4", title: "POWER BI", category: "core", topics: ["Power BI Interface", "Get Data (Import)", "Data Transformation (Power Query Editor, Clean & Transform, Column Operations)", "Data Modeling (Relationships, Cardinality, Data Types)", "DAX (Calculated Column, Calculated Measure, Important DAX)", "Visualizations (Bar Chart, Line Chart, Pie Chart, Table, Matrix, Slicers, Cards, KPIs)", "Filters (Visual, Page, Report)", "Dashboard in Power BI", "Publish & Share Report"] },
       { id: "m5", title: "STATISTICS", category: "core", topics: ["Introduction to Statistics", "Types of Data", "Measures of Central Tendency", "Measures of Dispersion", "Probability Basics", "Normal Distribution", "Correlation", "Hypothesis Testing (Null, Alternate, p-value)", "Confidence Interval", "Sampling Techniques"] },
       { id: "m6", title: "DATA CLEANING", category: "core", topics: ["Handling Missing Values", "Removing Duplicates", "Data Type Conversion", "Text Cleaning", "Outlier Detection", "Consistency Check", "Data Validation"] },
       { id: "m7", title: "DATA ANALYSIS", category: "advanced", topics: ["Exploratory Data Analysis (EDA)", "Univariate Analysis", "Bivariate Analysis", "Multivariate Analysis", "Trend Analysis", "Pattern Analysis", "Comparative Analysis", "Correlation Analysis", "Insight Generation"] },
       { id: "m8", title: "DATA VISUALIZATION", category: "advanced", topics: ["Principles of Visualization", "Choosing Right Chart", "Bar Chart", "Line Chart", "Pie Chart", "Scatter Plot", "Histogram", "Box Plot", "Heatmap", "Dashboard Design Tips"] },
       { id: "m9", title: "ADVANCED TOPICS", category: "advanced", topics: ["Advanced Excel (Power Pivot, Power View, Advanced Formulas)", "Advanced SQL (Window Functions, Rank, NTILE, LEAD, LAG)", "Advanced Power BI (Bookmarks, Drill Through, RLS)"] },
       { id: "m10", title: "REAL-WORLD PROJECTS", category: "practical", topics: ["Sales Dashboard", "HR Analytics Dashboard", "Financial Report Analysis", "Customer Analysis", "Marketing Performance", "Inventory Analysis", "Survey Data Analysis", "End-to-End Project"] }
    ]
  },
  {
    id: "data-science",
    title: "Data Science",
    subtitle: "Complete Syllabus",
    description: "Deep dive into statistical analysis and predictive modeling.",
    icon: "ScatterChart",
    image: "/assets/Data Science.png",
    modules: [
       { id: "m1", title: "MATHEMATICS & STATISTICS", category: "foundation", topics: ["Descriptive Statistics", "Probability Theory", "Distributions (Normal, Binomial, Poisson)", "Hypothesis Testing", "Confidence Intervals", "Correlation & Covariance", "Linear Algebra Basics", "Calculus Basics", "Bayes' Theorem", "Central Limit Theorem"] },
       { id: "m2", title: "PYTHON FOR DATA SCIENCE", category: "foundation", topics: ["Python Basics", "Data Types & Structures", "Functions & Modules", "Numpy", "Pandas", "Data Manipulation", "Data Aggregation", "Handling Missing Data", "File I/O", "Exception Handling", "List Comprehension", "Regular Expressions"] },
       { id: "m3", title: "DATA COLLECTION & SOURCES", category: "foundation", topics: ["Types of Data (Structured, Semi-structured, Unstructured)", "Data Sources (APIs, Web Scraping, Databases, Public Datasets)", "Web Scraping (BeautifulSoup, Requests, Selenium)", "APIs & JSON Handling"] },
       { id: "m4", title: "DATA CLEANING & PREPROCESSING", category: "core", topics: ["Data Cleaning Steps", "Handling Missing Values", "Removing Duplicates", "Data Type Conversion", "Outlier Detection", "Normalization", "Standardization", "Encoding Categorical Data (Label, One-Hot)", "Feature Engineering Basics"] },
       { id: "m5", title: "EXPLORATORY DATA ANALYSIS (EDA)", category: "core", topics: ["Univariate Analysis", "Bivariate Analysis", "Multivariate Analysis", "Summary Statistics", "Data Visualization", "Correlation Analysis", "Outlier Analysis", "Distribution Plots", "Insight Generation"] },
       { id: "m6", title: "DATA VISUALIZATION", category: "core", topics: ["Data Visualization Principles", "Matplotlib", "Seaborn", "Plotly", "Charts & Graphs", "Dashboard Basics"] },
       { id: "m7", title: "MACHINE LEARNING FUNDAMENTALS", category: "core", topics: ["Introduction to ML", "Types of Machine Learning", "Train, Test, Validation Split", "Overfitting vs Underfitting", "Bias - Variance Tradeoff", "Cross Validation", "Evaluation Metrics"] },
       { id: "m8", title: "SUPERVISED LEARNING ALGORITHMS", category: "core", topics: ["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest", "Support Vector Machine (SVM)", "K-Nearest Neighbors (KNN)", "Naive Bayes", "Gradient Boosting", "XGBoost", "Model Evaluation & Tuning"] },
       { id: "m9", title: "UNSUPERVISED LEARNING ALGORITHMS", category: "core", topics: ["K-Means Clustering", "Hierarchical Clustering", "DBSCAN", "Principal Component Analysis (PCA)", "Association Rule Learning (Apriori)", "Anomaly Detection"] },
       { id: "m10", title: "ADVANCED TOPICS", category: "advanced", topics: ["Ensemble Techniques (Bagging, Boosting, Stacking)", "Hyperparameter Tuning", "Dimensionality Reduction", "Feature Selection", "Imbalanced Data Handling", "Time Series Analysis", "NLP Basics"] },
       { id: "m11", title: "DEEP LEARNING (OPTIONAL ADVANCED)", category: "advanced", topics: ["Introduction to Deep Learning", "Neural Networks", "Activation Functions", "CNN", "RNN", "LSTM", "Dropout & Regularization", "TensorFlow / Keras Basics"] },
       { id: "m12", title: "BIG DATA & TOOLS", category: "advanced", topics: ["Introduction to Big Data", "Hadoop Ecosystem", "Spark Basics (PySpark)", "SQL for Data Science", "NoSQL Databases (MongoDB)", "Data Warehousing Concepts"] },
       { id: "m13", title: "DEPLOYMENT & COMMUNICATION", category: "practical", topics: ["Model Deployment Basics (Flask / Streamlit)", "REST APIs", "Pickle / Joblib", "Dashboard with Streamlit", "Storytelling with Data", "Presentation Skills", "Domain Knowledge"] },
       { id: "m14", title: "REAL-WORLD PROJECTS", category: "practical", topics: ["End-to-End Data Science Projects", "Problem Statement Understanding", "Data Collection", "EDA & Visualization", "Model Building", "Evaluation & Improvement", "Deployment & Reporting", "Business Impact"] }
    ]
  },
  {
    id: "python-developer",
    title: "Python Developer",
    subtitle: "Complete Syllabus",
    description: "Learn Python from basics to advanced frameworks.",
    icon: "Terminal",
    image: "/assets/Python.png",
    modules: [
       { id: "m1", title: "PYTHON FUNDAMENTALS", category: "foundation", topics: ["Variables", "Data Types", "Operators", "Input / Output", "Type Casting", "Comments"] },
       { id: "m2", title: "CONTROL FLOW", category: "foundation", topics: ["if", "if-else", "elif", "Nested if", "Match Case"] },
       { id: "m3", title: "LOOPS", category: "foundation", topics: ["for", "while", "break", "continue", "pass"] },
       { id: "m4", title: "STRINGS", category: "foundation", topics: ["All String Methods", "String Formatting (f-string, format())", "Regular Expressions (Regex)"] },
       { id: "m5", title: "DATA STRUCTURES", category: "foundation", topics: ["List", "Tuple", "Set", "Dictionary", "All Methods", "Nested Data Structures"] },
       { id: "m6", title: "FUNCTIONS", category: "foundation", topics: ["def", "return", "Arguments", "*args", "**kwargs", "Lambda", "Recursion"] },
       { id: "m7", title: "COMPREHENSIONS", category: "foundation", topics: ["List Comprehension", "Dictionary Comprehension", "Set Comprehension"] },
       { id: "m8", title: "BUILT-IN FUNCTIONS", category: "foundation", topics: ["map()", "filter()", "zip()", "enumerate()", "sorted()", "any() / all()", "sum(), max(), min()"] },
       { id: "m9", title: "FILE HANDLING", category: "core", topics: ["Read", "Write", "Append", "CSV Files", "JSON Files"] },
       { id: "m10", title: "EXCEPTION HANDLING", category: "core", topics: ["try", "except", "else", "finally", "raise", "Custom Exceptions"] },
       { id: "m11", title: "OOP (OBJECT ORIENTED PROGRAMMING)", category: "core", topics: ["Class & Object", "Constructor", "Instance Variables", "Class Variables", "Inheritance", "Polymorphism", "Encapsulation", "Abstraction", "Method Overriding"] },
       { id: "m12", title: "ADVANCED PYTHON", category: "advanced", topics: ["Iterators", "Generators", "Decorators", "Context Managers", "Closures", "Modules", "Packages"] },
       { id: "m13", title: "STANDARD LIBRARIES", category: "advanced", topics: ["os", "sys", "math", "random", "datetime", "pathlib", "shutil", "logging"] },
       { id: "m14", title: "DATABASES", category: "core", topics: ["SQLite", "MySQL", "PostgreSQL"] },
       { id: "m15", title: "APIs", category: "core", topics: ["requests", "REST API", "JSON"] },
       { id: "m16", title: "WEB FRAMEWORK", category: "core", topics: ["Flask (or)", "FastAPI"] },
       { id: "m17", title: "TESTING", category: "advanced", topics: ["unittest", "pytest"] },
       { id: "m18", title: "ENVIRONMENT", category: "advanced", topics: ["pip", "Virtual Environment", "requirements.txt"] },
       { id: "m19", title: "VERSION CONTROL", category: "advanced", topics: ["Git", "GitHub"] },
       { id: "m20", title: "DEPLOYMENT", category: "practical", topics: ["Docker (Basic)", "Linux Commands", "AWS / Render / Railway (Basic)"] }
    ]
  },
  {
    id: "python-with-ai",
    title: "Python with AI",
    subtitle: "Complete Syllabus",
    description: "Combine Python programming with AI applications.",
    icon: "Bot",
    image: "/assets/Python with AI.png",
    modules: [
       { id: "m1", title: "FOUNDATION", category: "foundation", topics: ["What is Python?", "History & Features", "Python Setup", "Syntax & Basics", "Variables & Data Types", "Operators & Expressions", "Input / Output", "Comments & Indentation"] },
       { id: "m2", title: "PYTHON CORE", category: "foundation", topics: ["Control Flow (if, elif, else)", "Loops (for, while)", "Functions", "Modules & Packages", "File Handling", "Exception Handling", "Built-in Functions"] },
       { id: "m3", title: "DATA STRUCTURES", category: "foundation", topics: ["Lists", "Tuples", "Sets", "Dictionaries", "Strings", "List Comprehension", "Collections Module"] },
       { id: "m4", title: "OOP & ADVANCED PYTHON", category: "core", topics: ["Object-Oriented Programming (Class, Object, Inheritance)", "Polymorphism", "Encapsulation", "Abstraction", "Decorators", "Generators", "Lambda Functions"] },
       { id: "m5", title: "DATA ANALYSIS", category: "core", topics: ["NumPy Basics", "Pandas Basics", "Data Cleaning", "Data Manipulation", "GroupBy & Aggregation", "Data Visualization (Matplotlib / Seaborn)"] },
       { id: "m6", title: "MACHINE LEARNING", category: "core", topics: ["What is ML?", "Types of ML", "Supervised Learning", "Unsupervised Learning", "Train-Test Split", "Feature Engineering", "ML Algorithms (Regression, Classification)", "Model Evaluation"] },
       { id: "m7", title: "DEEP LEARNING", category: "advanced", topics: ["What is Deep Learning?", "Neural Networks Basics", "Activation Functions", "Loss Functions", "Optimizers", "TensorFlow / Keras", "CNN", "RNN / LSTM Basics"] },
       { id: "m8", title: "NLP (NATURAL LANGUAGE PROCESSING)", category: "advanced", topics: ["Text Processing", "Tokenization", "Stopwords, Stemming, Lemmatization", "Bag of Words, TFF-IDF", "Word Embeddings", "Transformers Overview", "Sentiment Analysis", "NLP Libraries (NLTK, SpaCy)"] },
       { id: "m9", title: "GENERATIVE AI", category: "advanced", topics: ["What is Generative AI?", "LLMs Overview", "Prompt Engineering", "Hugging Face Basics", "Text Generation", "Image Generation", "Embeddings & Vector DBs", "RAG (Retrieval Augmented Generation)"] },
       { id: "m10", title: "AI APPLICATIONS", category: "practical", topics: ["Chatbots & Assistants", "Recommendation Systems", "Computer Vision Basics", "Voice AI", "Automation with AI", "API Integration", "Deploying AI Models", "Real-world Projects"] }
    ]
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    subtitle: "Complete Syllabus",
    description: "Master LLMs, diffusion models, and prompt engineering.",
    icon: "Sparkles",
    image: "/assets/Generative Ai.png",
    modules: [
       { id: "m1", title: "FOUNDATION", category: "foundation", topics: ["What is Generative AI?", "History & Evolution", "Types of Generative AI", "Key Concepts (Model, Token, Inference)", "Generative AI vs Traditional AI"] },
       { id: "m2", title: "PYTHON FOR GEN AI", category: "foundation", topics: ["Python Basics", "Functions, OOP, Modules", "Numpy Basics", "Pandas Basics", "API Calls with Python", "JSON Handling", "Environment Variables", "Virtual Environment", "Request, HTTP, Tools"] },
       { id: "m3", title: "MACHINE LEARNING FUNDAMENTALS", category: "foundation", topics: ["Supervised Learning", "Unsupervised Learning", "Neural Networks Basics", "Activation Functions", "Loss Functions", "Gradient Descent", "Overfitting vs Underfitting", "Model Evaluation Basics"] },
       { id: "m4", title: "DEEP LEARNING FUNDAMENTALS", category: "core", topics: ["Neural Networks Deep Dive", "Convolutional Neural Networks", "Recurrent Neural Networks", "Transformers Architecture", "Attention Mechanism", "Embeddings Basics", "Positional Encoding", "Transfer Learning"] },
       { id: "m5", title: "NLP FUNDAMENTALS", category: "core", topics: ["Text Processing", "Tokenization", "Stopwords, Stemming, Lemmatization", "Bag of Words, TF-IDF", "Word Embeddings", "Context & Semantics", "Introduction to Transformers", "BERT, GPT, T5 Overview"] },
       { id: "m6", title: "LARGE LANGUAGE MODELS (LLMS)", category: "core", topics: ["What is LLM?", "How LLMs Work?", "Pre-training, Fine-tuning", "Instruction Tuning", "LLM Architectures (GPT Family)", "Token Limits & Context Window", "Capabilities & Limitations", "Choosing the Right LLM"] },
       { id: "m7", title: "PROMPT ENGINEERING", category: "core", topics: ["What is Prompt?", "Prompt Engineering Basics", "Zero-shot, One-shot, Few-shot", "Chain of Thought (CoT)", "System Prompts", "Role Prompting", "Prompt Templates", "Best Practices"] },
       { id: "m8", title: "RAG (RETRIEVAL AUGMENTED GENERATION)", category: "advanced", topics: ["What is RAG?", "Why RAG is Important?", "Embeddings & Vector Search", "Vector Databases", "Document Loading", "Chunking Strategies", "Retrieval + Generation", "RAG Pipeline"] },
       { id: "m9", title: "GENERATIVE AI MODELS & MODALITIES", category: "advanced", topics: ["Text Generation (LLMs)", "Image Generation (DALL-E, Midjourney, Stable Diffusion)", "Code Generation (Codex, GitHub Copilot)", "Audio Generation (Music, Voice)", "Video Generation", "Multimodal Models (GPT-4V etc.)"] },
       { id: "m10", title: "BUILDING GEN AI APPLICATIONS", category: "practical", topics: ["LLM API Integration (OpenAI, Hugging Face, Anthropic)", "LangChain Basics", "Tools & Agents", "Memory in LLM Apps", "Streamlit / Gradio Apps", "Chatbot Development", "Function Calling"] }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Complete Syllabus",
    description: "SEO, SEM, Social Media, and Content Marketing.",
    icon: "Megaphone",
    image: "/assets/Digital Marketing Complete Syllabus.png",
    modules: [
       { id: "m1", title: "DIGITAL MARKETING FUNDAMENTALS", category: "foundation", topics: ["What is Digital Marketing", "History & Growth", "Types of Digital Marketing", "Online vs Offline Marketing", "Digital Marketing Channels", "Career Opportunities", "How Search Engines Work", "Domain, Hosting & Website Basics", "Marketing Funnel", "Key Metrics & KPI", "Latest Trends"] },
       { id: "m2", title: "SOCIAL MEDIA MANAGEMENT", category: "core", topics: ["Social Media Platforms Overview", "Creating & Optimizing Profiles", "Content Strategy & Planning", "Content Types (Image, Video, Reel, Carousel)", "Scheduling & Automation Tools", "Hashtag Strategy", "Community Management", "Analytics & Performance Tracking", "Paid vs Organic Growth", "Practical Live Projects"] },
       { id: "m3", title: "SEARCH ENGINE OPTIMIZATION (SEO)", category: "core", topics: ["What is SEO & How Search Works", "On-Page SEO (Title, Meta, Content)", "Keyword Research (Tools & Strategy)", "Technical SEO (Site Speed, Sitemap, Robots.txt)", "Off-Page SEO (Backlinks)", "Local SEO (Google Business Profile)", "Content SEO & Blogging", "SEO Tools (Google Search Console, Ahrefs, SEMrush, Ubersuggest)", "Competitor Analysis", "SEO Reporting"] },
       { id: "m4", title: "GOOGLE ADS (PPC)", category: "core", topics: ["What is Google Ads", "Campaign Types (Search, Display, Shopping, Video, App)", "Keyword Research & Match Types", "Ad Creation", "Bidding Strategy & Budgeting", "Audience Targeting", "Conversion Tracking", "Google Analytics Integration", "Optimization & Reporting", "Hands-on Live Campaign Setup"] },
       { id: "m5", title: "META ADS (FACEBOOK & INSTAGRAM ADS)", category: "core", topics: ["Meta Ads Overview", "Campaign Objectives", "Audience Targeting", "Ad Formats", "Ad Creative & Copywriting", "Pixel Setup & Conversion Tracking", "Retargeting & Remarketing", "Budget & Bidding Strategy", "Ads Manager Dashboard", "Performance Analysis & Optimization", "Live Campaign Project"] },
       { id: "m6", title: "CONTENT MARKETING & COPYWRITING", category: "core", topics: ["Content Marketing Basics", "Types of Content", "Blog Writing & SEO Content", "Social Media Content Creation", "Ad Copywriting", "Email Content", "Storytelling & Brand Messaging", "Content Calendar", "Tools for Content Creation", "Content Performance Analysis"] },
       { id: "m7", title: "EMAIL MARKETING", category: "core", topics: ["What is Email Marketing", "Benefits & Use Cases", "Building Email Lists", "Email Marketing Tools (Mailchimp, Brevo, etc.)", "Creating Email Campaigns", "Designing Email Templates", "Segmentation & Personalization", "Automation (Drip Campaigns)", "Email Analytics & Improvement", "Legal Guidelines (CAN-SPAM, GDPR)"] },
       { id: "m8", title: "CANVA & CANVA WITH AI", category: "core", topics: ["Introduction to Canva", "Creating Social Media Creatives", "Designing Banners, Posters, Thumbnails", "Reels & Video Editing in Canva", "Brand Kit & Templates", "Magic Design & AI Tools", "Text to Image / Text to Video", "AI Background Remover", "AI Writing & Content Ideas", "Practical Projects for Real Platforms"] },
       { id: "m9", title: "ADOBE PHOTOSHOP (BASICS TO INTERMEDIATE)", category: "advanced", topics: ["Photoshop Interface", "Working with Layers", "Image Editing & Retouching", "Photo Manipulation", "Social Media Creatives Design", "Banners, Posters, Thumbnails", "Color Correction & Filters", "Text Effects", "Exporting for Web & Print", "Practical Design Projects"] },
       { id: "m10", title: "WEBSITE DESIGNING (HTML, CSS, JAVASCRIPT)", category: "advanced", topics: ["HTML Basics", "CSS Styling", "Responsive Design", "JavaScript Basics", "DOM Manipulation", "Form Validation", "Mini Projects", "Tools & Browser Developer Console", "Introduction to Web Hosting & Domain Deployment"] },
       { id: "m11", title: "BOOTSTRAP", category: "advanced", topics: ["What is Bootstrap", "Grid System", "Responsive Layouts", "Navbar, Footer, Cards", "Forms & Components", "Buttons, Alerts, Modals", "Creating a Complete Website Using Bootstrap", "Customization", "Real-world Projects"] },
       { id: "m12", title: "ANALYTICS & REPORTING", category: "practical", topics: ["Google Analytics 4 (GA4)", "Google Search Console", "Social Media Insights", "UTM Tracking", "Campaign Performance Analysis", "ROI & Conversion Tracking", "Creating Reports & Dashboards", "Data Visualization Basics"] }
    ]
  }
];
