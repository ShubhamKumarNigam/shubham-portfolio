// Central data file for Dr. Shubham Kumar Nigam's academic portfolio
// All website content comes from this file.

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  status: "published" | "accepted" | "submitted" | "under-review";
  type: "conference" | "journal" | "workshop" | "tutorial" | "shared-task" | "demo";
  topic: string[];
  summary: string;
  abstract: string;
  impact: string;
  posterType: string;
  links: {
    proceedings?: string;
    anthology?: string;
    arxiv?: string;
    github?: string;
    hfDataset?: string;
    hfModel?: string;
    hfResults?: string;
    conference?: string;
    project?: string;
    slides?: string;
    poster?: string;
  };
  bibtexText?: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  name: string;
  posterType: string;
  problem: string;
  method: string;
  impact: string;
  publications: string[];
  links: {
    website?: string;
    github?: string;
    arxiv?: string;
    hfDataset?: string;
    hfModel?: string;
    project?: string;
  };
  tags: string[];
}

export interface DatasetModel {
  id: string;
  name: string;
  type: "Dataset" | "Model" | "Tool" | "Benchmark";
  domain: string;
  description: string;
  relatedPapers: string[];
  links: {
    website?: string;
    github?: string;
    hfDataset?: string;
    hfModel?: string;
    arxiv?: string;
  };
}

export interface Talk {
  id: string;
  title: string;
  venue: string;
  date: string;
  location: string;
  format: string;
  tags: string[];
  links: {
    slides?: string;
    video?: string;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date?: string;
  type: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
}

export interface WorkingProject {
  id: string;
  title: string;
  status: "Ongoing" | "Under Review" | "In Progress" | "Prototype" | "Collaboration";
  description: string;
  objective: string;
  expectedImpact: string;
  collaborators: string[];
  timeline: string;
  progress: number;
  relatedPublications: string[];
  relatedDatasetsModels: string[];
  posterType: string;
  tags: string[];
}

export interface ResearchArea {
  id: string;
  title: string;
  icon: string;
  description: string;
  projects: string[];
  publications: string[];
  gradient: string;
}

export interface TeachingEntry {
  id: string;
  role: string;
  course: string;
  institution: string;
  period: string;
  description?: string;
}

export const profile = {
  name: "Dr. Shubham Kumar Nigam",
  initials: "SKN",
  title: "Research Fellow",
  affiliation: "School of Computer Science, University of Birmingham Dubai",
  location: "Dubai, UAE",
  email: "s.k.nigam@bham.ac.uk",
  emailAlt: "shubhamkumarnigam@gmail.com",
  phone: "+91 98936 60159",
  summary:
    "Dr. Shubham Kumar Nigam is a researcher advancing Responsible, Scalable, and Interpretable AI across Core Machine Learning, Law, and Healthcare. His work spans AI memory management, distributed training, test-time training, efficient LLM systems, reasoning, agents, and evaluation—alongside specialized research in Legal AI, Explainable AI, and Healthcare AI.",
  bio: [
    "Dr. Shubham Kumar Nigam is a Research Fellow at the School of Computer Science, University of Birmingham Dubai, where he leads research on the KAMAL Health Project—developing interpretable and responsible AI systems for healthcare decision support and patient-centric care across Arabic and English languages.",
    "He completed his Ph.D. in Computer Science and Engineering from IIT Kanpur under the supervision of Prof. Arnab Bhattacharya. His doctoral research, 'AI in Law: Comprehending the Indian Legal System using Artificial Intelligence,' introduced several large-scale datasets, domain-specific models, and benchmark frameworks that are now widely used in Legal NLP.",
    "His research spans Core AI/ML, AI Memory Management, Distributed Training, Test-Time Training, Efficient LLM Systems, LLM Reasoning and Agents, Evaluation and Benchmarking, Legal AI, Explainable AI, Natural Language Processing, AI for Healthcare, Multilingual AI, Legal Information Retrieval, and Responsible AI. He has published extensively in top-tier venues including ACL, NAACL, EMNLP, COLING, AACL-IJCNLP, and ICAIL.",
    "He is a DAAD Postdoc-NeT-AI Fellow and has received notable recognitions including a Best Paper Award at the Bridge between AI and Law at AAAI 2026, an MSCA Postdoctoral Fellowship Proposal with 92%+ evaluation score, and AI World notable paper recognition. He actively serves as a reviewer for ARR, Artificial Intelligence and Law Journal, and as a program committee member for multiple symposiums and shared tasks.",
  ],
  socials: {
    googleScholar: "https://scholar.google.com/citations?hl=en&user=73t3-rQAAAAJ",
    dblp: "https://dblp.org/pid/256/7932",
    orcid: "https://orcid.org/0000-0003-2564-7866",
    linkedin: "https://www.linkedin.com/in/dr-shubham-kumar-nigam-34670541",
    github: "https://github.com/ShubhamKumarNigam",
    huggingfaceOrg: "https://huggingface.co/L-NLProc",
    huggingfacePersonal: "https://huggingface.co/ShubhamKumarNigam",
    aclAnthology: "https://aclanthology.org/people/shubham-kumar-nigam/",
    twitter: "https://x.com/sknigam05",
    openreview: "https://openreview.net/profile?id=~Shubham_Kumar_Nigam1",
    university: "https://www.birmingham.ac.uk/dubai",
  },
  cvUrl: "",
  photo: "/images/shubham-profile.jpg",
};

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Research Fellow",
    organization: "University of Birmingham Dubai",
    location: "Dubai, UAE",
    startDate: "Aug 2025",
    endDate: "Present",
    current: true,
    description: [
      "KAMAL Health Project: developing interpretable and responsible AI systems that support clinical decision-making and improve patient-centric care across Arabic and English languages.",
    ],
  },
  {
    id: "exp-2",
    role: "Senior Student Research Associate",
    organization: "BharatGen, IIT Kanpur",
    location: "Kanpur, India",
    startDate: "May 2025",
    endDate: "July 2025",
    current: false,
    description: [
      "Project: 'BharatGPT: A Suite of Generative AI Tech for India.'",
      "Funding Agency: Department of Science and Technology (DST), Government of India.",
    ],
  },
  {
    id: "exp-3",
    role: "Research Internship",
    organization: "Adobe",
    location: "Bangalore, India",
    startDate: "May 2023",
    endDate: "Aug 2023",
    current: false,
    description: [
      "Research: 'Worked on Document Edit Propagation, optimizing algorithms to update text-heavy documents efficiently.'",
      "Project: Focused on reducing manual effort by automating intelligent text modifications across document versions.",
    ],
  },
  {
    id: "exp-4",
    role: "Project Assistant-1",
    organization: "Aeronautical Development Agency (ADA)",
    location: "Bangalore, India",
    startDate: "Sep 2017",
    endDate: "Dec 2017",
    current: false,
    description: [
      "Project: 'Worked as part of a team optimizing software flow to reduce latency in aircraft weapon systems. Focused on enhancing computational efficiency for real-time avionics processing.'",
      "Under: Department of Defence Research and Development (DR&D) of India's Ministry of Defence, Government of India.",
    ],
  },
];

export const education = [
  {
    degree: "Ph.D. in Computer Science and Engineering",
    institution: "Indian Institute of Technology Kanpur",
    location: "Kanpur, Uttar Pradesh, India",
    period: "2017 – 2025",
    cgpa: "7.00",
    thesis: "AI in Law: Comprehending the Indian Legal System using Artificial Intelligence",
    supervisor: "Prof. Arnab Bhattacharya",
  },
  {
    degree: "M.Tech. in Computer Science and Engineering",
    institution: "Indian Institute of Engineering Science and Technology",
    location: "Howrah, West Bengal, India",
    period: "2015 – 2017",
    cgpa: "78.72",
    thesis: "Solving the Heavy Hitters Problem for Streaming Data",
    supervisor: "Prof. Saptarshi Ghosh",
  },
  {
    degree: "B.E. in Information Technology",
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
    location: "Bhopal, Madhya Pradesh, India",
    period: "2008 – 2012",
    cgpa: "77.22",
  },
];

export const publications: Publication[] = [
  {
    id: "pub-1",
    title: "IndicMedDialog: A Parallel Multi-Turn Medical Dialogue Dataset for Accessible Healthcare in Indic Languages",
    authors: "Shubham Kumar Nigam, Suparnojit Sarkar, and Piyush Patel",
    venue: "BioNLP @ ACL",
    year: 2026,
    status: "accepted",
    type: "workshop",
    topic: ["Healthcare AI", "Multilingual AI", "NLP"],
    summary: "Introduces a parallel multi-turn medical dialogue dataset for accessible healthcare in Indic languages, enabling multilingual medical dialogue systems.",
    abstract: "We present IndicMedDialog, a parallel multi-turn medical dialogue dataset covering multiple Indic languages. The dataset enables development of multilingual medical dialogue systems for underserved language communities, advancing healthcare accessibility through AI.",
    impact: "Advances healthcare accessibility by providing Indic language medical dialogue data for AI research.",
    posterType: "healthcare-dialogue",
    links: {
      arxiv: "https://arxiv.org/abs/2605.13292",
      github: "https://github.com/ShubhamKumarNigam/IndicMedDialog",
    },
    bibtexText: `@article{nigam2026indicmeddialog,
  title={IndicMedDialog: A Parallel Multi-Turn Medical Dialogue Dataset for Accessible Healthcare in Indic Languages},
  author={Nigam, Shubham Kumar and Sarkar, Suparnojit and Patel, Piyush},
  journal={arXiv preprint arXiv:2605.13292},
  year={2026}
}`,
    featured: true,
  },
  {
    id: "pub-2",
    title: "MedAidDialog: A Multilingual Multi-Turn Medical Dialogue Dataset for Accessible Healthcare",
    authors: "Shubham Kumar Nigam, Suparnojit Sarkar, and Piyush Patel",
    venue: "ACL Rolling Review (ARR)",
    year: 2026,
    status: "submitted",
    type: "journal",
    topic: ["Healthcare AI", "Multilingual AI", "NLP"],
    summary: "Presents a multilingual medical dialogue dataset designed to support accessible healthcare through AI-powered dialogue systems.",
    abstract: "We introduce MedAidDialog, a large-scale multilingual multi-turn medical dialogue dataset designed to support accessible healthcare through AI-powered dialogue systems. The dataset covers diverse languages and medical specialties, enabling development of inclusive healthcare dialogue agents for diverse populations worldwide.",
    impact: "Enables development of multilingual medical dialogue agents for diverse populations.",
    posterType: "healthcare-dialogue",
    links: {
      arxiv: "https://arxiv.org/abs/2603.24132",
      github: "https://github.com/ShubhamKumarNigam/MedAidDialog",
    },
    bibtexText: `@article{nigam2026medaiddialog,
  title={MedAidDialog: A Multilingual Multi-Turn Medical Dialogue Dataset for Accessible Healthcare},
  author={Nigam, Shubham Kumar and Sarkar, Suparnojit and Patel, Piyush},
  journal={arXiv preprint arXiv:2603.24132},
  year={2026}
}`,
    featured: true,
  },
  {
    id: "pub-3",
    title: "NyayaMind: A Framework for Transparent Legal Reasoning and Judgment Prediction in the Indian Legal System",
    authors: "Parjanya Aditya Shukla, Shubham Kumar Nigam, Debtanu Datta, Balaramamahanthi Deepak Patnaik, Noel Shallum, Pradeep Reddy Vanga, Saptarshi Ghosh, and Arnab Bhattacharya",
    venue: "ACL Rolling Review (ARR)",
    year: 2026,
    status: "submitted",
    type: "journal",
    topic: ["Legal AI", "Explainable AI", "NLP"],
    summary: "Proposes NyayaMind, a framework for transparent legal reasoning and judgment prediction tailored to the Indian legal system.",
    abstract: "We propose NyayaMind, a comprehensive framework for transparent legal reasoning and judgment prediction in the Indian legal system. Our approach integrates structured legal knowledge with neural reasoning to provide human-understandable justifications for judicial predictions, enhancing trust and accountability in legal AI systems.",
    impact: "Enhances trust in legal AI through transparent reasoning and explainable predictions.",
    posterType: "legal-judgment",
    links: {
      arxiv: "https://arxiv.org/abs/2604.09069",
    },
    bibtexText: `@article{shukla2026nyayamind,
  title={NyayaMind-A Framework for Transparent Legal Reasoning and Judgment Prediction in the Indian Legal System},
  author={Shukla, Parjanya Aditya and Nigam, Shubham Kumar and Datta, Debtanu and Patnaik, Balaramamahanthi Deepak and Shallum, Noel and Vanga, Pradeep Reddy and Ghosh, Saptarshi and Bhattacharya, Arnab},
  journal={arXiv preprint arXiv:2604.09069},
  year={2026}
}`,
    featured: true,
  },
  {
    id: "pub-4",
    title: "Structure-Aware Agentic and Reinforcement Learning for Legal Judgment Prediction and Explanation",
    authors: "Shubham Kumar Nigam",
    venue: "Law, Language, and AI Symposium (Bloomberg Law)",
    year: 2026,
    status: "submitted",
    type: "workshop",
    topic: ["Legal AI", "Reinforcement Learning", "Explainable AI"],
    summary: "Explores structure-aware agentic and reinforcement learning approaches for legal judgment prediction and explanation generation.",
    abstract: "This work explores structure-aware agentic and reinforcement learning approaches for legal judgment prediction and explanation generation. We investigate how incorporating legal document structure and hierarchical reasoning can improve both prediction accuracy and explanation quality in legal AI systems.",
    impact: "Brings advanced RL techniques to legal AI for improved decision-making and interpretability.",
    posterType: "reinforcement-learning",
    links: {},
    featured: true,
  },
  {
    id: "pub-5",
    title: "How Should You Charge Your Friends for Borrowing Your Stuff? Pricing Mechanisms for Shareable Goods on Networks",
    authors: "Shubham Kumar Nigam",
    venue: "IJCAI-ECAI",
    year: 2026,
    status: "submitted",
    type: "conference",
    topic: ["Game Theory", "Mechanism Design", "Networks"],
    summary: "Investigates pricing mechanisms for shareable goods on social networks using game-theoretic models.",
    abstract: "We investigate pricing mechanisms for shareable goods on social networks using game-theoretic models. Our work provides theoretical insights into optimal pricing strategies for shared resources in networked environments, balancing fairness and efficiency.",
    impact: "Provides theoretical insights into optimal pricing for shared resources in networked environments.",
    posterType: "pricing-network",
    links: {},
    bibtexText: `@inproceedings{nigam2026pricing,
  title={How Should You Charge Your Friends for Borrowing Your Stuff? Pricing Mechanisms for Shareable Goods on Networks},
  author={Nigam, Shubham Kumar},
  booktitle={IJCAI-ECAI},
  year={2026}
}`,
  },
  {
    id: "pub-6",
    title: "How English Print Media Portrays Human–Elephant Conflict in India",
    authors: "Salveru Jayati, Bonala Sai Punith, Garima Shakya, Shubham Kumar Nigam, and Reenu Punnoose",
    venue: "ICWSM",
    year: 2026,
    status: "submitted",
    type: "conference",
    topic: ["Social NLP", "Environmental Media", "NLP"],
    summary: "Analyzes how English print media portrays human-elephant conflict in India using NLP techniques.",
    abstract: "We analyze how English print media portrays human-elephant conflict in India using natural language processing techniques. Our computational analysis reveals patterns in media framing and contributes to understanding how environmental conflicts are represented in public discourse.",
    impact: "Contributes to understanding media framing of environmental conflicts through computational analysis.",
    posterType: "environmental-media",
    links: {
      arxiv: "https://arxiv.org/abs/2604.21496",
    },
    bibtexText: `@article{punith2026english,
  title={How English Print Media Frames Human-Elephant Conflicts in India},
  author={Punith, Bonala Sai and Jayati, Salveru and Shakya, Garima and Nigam, Shubham Kumar},
  journal={arXiv preprint arXiv:2604.21496},
  year={2026}
}`,
  },
  {
    id: "pub-7",
    title: "To Debias or Not to Debias?: An Empirical Study on Indian and U.S. Legal Court Prediction Tasks",
    authors: "Sumana Sree Madasu, Soumilya De, Anurag Sharma, Shubham Kumar Nigam, Upal Bhattacharya, Satvik Saha, Saptarshi Ghosh and Kripabandhu Ghosh",
    venue: "ICAIL",
    year: 2026,
    status: "submitted",
    type: "conference",
    topic: ["Legal AI", "Bias & Fairness", "Responsible AI"],
    summary: "Conducts an empirical study on debiasing techniques for legal court prediction tasks in Indian and U.S. jurisdictions.",
    abstract: "We conduct an empirical study on debiasing techniques for legal court prediction tasks in Indian and U.S. jurisdictions. Our analysis reveals critical insights into fairness and bias in cross-jurisdictional legal AI systems, providing actionable recommendations for developing more equitable legal prediction models.",
    impact: "Provides critical insights into fairness and bias in cross-jurisdictional legal AI systems.",
    posterType: "bias-fairness",
    links: {},
  },
  {
    id: "pub-8",
    title: "IBPS: Indian Bail Prediction System",
    authors: "Puspesh Kumar Srivastava, Uddeshya Raj, Praveen Patel, Shubham Kumar Nigam, Noel Shallum, and Arnab Bhattacharya",
    venue: "ACL Rolling Review (ARR)",
    year: 2026,
    status: "submitted",
    type: "journal",
    topic: ["Legal AI", "Judgment Prediction", "NLP"],
    summary: "Introduces IBPS, a system for predicting bail outcomes in the Indian legal context using AI.",
    abstract: "We introduce IBPS, the Indian Bail Prediction System, which uses machine learning to predict bail outcomes in the Indian legal context. Our system analyzes historical bail data and case characteristics to provide data-driven insights that support judicial decision-making.",
    impact: "Supports judicial decision-making by providing data-driven bail prediction capabilities.",
    posterType: "legal-judgment",
    links: {
      arxiv: "https://arxiv.org/abs/2508.07592",
      github: "https://github.com/Uddeshya-Raj/IBPS-v0.2",
    },
    bibtexText: `@article{srivastava2025ibps,
  title={Ibps: Indian bail prediction system},
  author={Srivastava, Puspesh Kumar and Raj, Uddeshya and Patel, Praveen and Nigam, Shubham Kumar and Shallum, Noel and Bhattacharya, Arnab},
  journal={arXiv preprint arXiv:2508.07592},
  year={2025}
}`,
    featured: true,
  },
  {
    id: "pub-9",
    title: "From Judgment to Justification: Building Transparent Legal AI for the Indian Judiciary",
    authors: "Shubham Kumar Nigam and Arnab Bhattacharya",
    venue: "ACL Rolling Review (ARR)",
    year: 2026,
    status: "submitted",
    type: "journal",
    topic: ["Legal AI", "Explainable AI", "NLP"],
    summary: "Presents a framework for building transparent legal AI that provides justifications for judicial predictions.",
    abstract: "We present a framework for building transparent legal AI that provides justifications for judicial predictions in the Indian judiciary. Our approach connects model predictions to human-understandable legal justifications, advancing explainable AI in law and improving trust in AI-assisted legal systems.",
    impact: "Advances explainable AI in law by connecting predictions to human-understandable justifications.",
    posterType: "legal-judgment",
    links: {},
  },
  {
    id: "pub-10",
    title: "AILQA: Evaluating AI-Driven Legal Question Answering Systems for the Indian Legal System",
    authors: "Shubham Kumar Nigam, Shubham Kumar Mishra, Noel Shallum, Kripabandhu Ghosh, and Arnab Bhattacharya",
    venue: "Artificial Intelligence and Law Journal",
    year: 2025,
    status: "submitted",
    type: "journal",
    topic: ["Legal AI", "Question Answering", "NLP"],
    summary: "Proposes AILQA, a comprehensive evaluation framework for AI-driven legal question answering in India.",
    abstract: "We propose AILQA, a comprehensive evaluation framework for AI-driven legal question answering systems in the Indian legal system. Our multi-faceted evaluation protocol sets benchmarks and identifies domain-specific challenges, advancing the development of reliable legal QA systems.",
    impact: "Sets benchmarks for legal QA systems and identifies challenges specific to the Indian legal domain.",
    posterType: "question-answering",
    links: {
      arxiv: "https://arxiv.org/abs/2309.14735",
    },
    bibtexText: `@article{nigam2023comparative,
  title={Comparative analysis of artificial intelligence for indian legal question answering (ailqa) using different retrieval and qa models},
  author={Nigam, Shubham Kumar and Mishra, Shubham Kumar and Mishra, Ayush Kumar and Shallum, Noel and Bhattacharya, Arnab},
  journal={arXiv preprint arXiv:2309.14735},
  year={2023}
}`,
    featured: true,
  },
  {
    id: "pub-11",
    title: "Segment First, Retrieve Better: Realistic Legal Search via Rhetorical Role-Based Queries",
    authors: "Shubham Kumar Nigam, Tanmay Dubey, Noel Shallum, Kripabandhu Ghosh, and Arnab Bhattacharya",
    venue: "ICAIL",
    year: 2026,
    status: "accepted",
    type: "conference",
    topic: ["Legal IR", "Rhetorical Roles", "NLP"],
    summary: "Demonstrates that segmenting legal documents by rhetorical roles before retrieval significantly improves legal search.",
    abstract: "We demonstrate that segmenting legal documents by rhetorical roles before retrieval significantly improves legal search performance. Our realistic legal search framework leverages document structure to enable more precise and relevant retrieval of legal cases and precedents.",
    impact: "Improves legal information retrieval by leveraging document structure for more precise search.",
    posterType: "rag-retrieval",
    links: {
      arxiv: "https://arxiv.org/abs/2508.00679",
      github: "https://github.com/ShubhamKumarNigam/Legal_IR",
    },
    bibtexText: `@article{nigam2025segment,
  title={Segment first, retrieve better: Realistic legal search via rhetorical role-based queries},
  author={Nigam, Shubham Kumar and Dubey, Tanmay and Shallum, Noel and Bhattacharya, Arnab},
  journal={arXiv preprint arXiv:2508.00679},
  year={2025}
}`,
    featured: true,
  },
  {
    id: "pub-12",
    title: "PROSLEX: A Novel Dataset for Expert-Annotated Legal Statute Prediction for Indian Judiciary",
    authors: "Subinay Adhikary, Upal Bhattacharya, Vivek Kumar Singh, Anurag Sharma, Shubham Kumar Nigam, Suvasis Das, Shouvik Kumar Guha, Koustav Rudra, and Kripabandhu Ghosh",
    venue: "ICAIL",
    year: 2026,
    status: "accepted",
    type: "conference",
    topic: ["Legal AI", "Statute Prediction", "NLP"],
    summary: "Introduces PROSLEX, an expert-annotated dataset for legal statute prediction in the Indian judiciary.",
    abstract: "We introduce PROSLEX, a novel dataset for expert-annotated legal statute prediction in the Indian judiciary. The dataset provides high-quality annotations that serve as a benchmark for statute prediction research, enabling development of more accurate legal AI systems.",
    impact: "Provides a high-quality benchmark for statute prediction research in Indian legal NLP.",
    posterType: "legal-judgment",
    links: {
      github: "https://github.com/subinay494/Legal_Statute_Prediction_Explanation",
      conference: "https://site.smu.edu.sg/icail-2026",
    },
  },
  {
    id: "pub-13",
    title: "Structured Legal Document Generation in India: A Model-Agnostic Wrapper Approach with VidhikDastaavej",
    authors: "Shubham Kumar Nigam, Balaramamahanthi Deepak Patnaik, Ajay Thomas, Noel Shallum, Kripabandhu Ghosh, and Arnab Bhattacharya",
    venue: "LREC",
    year: 2026,
    status: "accepted",
    type: "conference",
    topic: ["Legal AI", "Document Generation", "NLP"],
    summary: "Presents VidhikDastaavej, a model-agnostic wrapper for structured legal document generation in India.",
    abstract: "We present VidhikDastaavej, a model-agnostic wrapper approach for structured legal document generation in India. Our system enables automated generation of properly formatted legal documents while remaining adaptable to various underlying generative models.",
    impact: "Enables automated generation of structured legal documents adaptable to various underlying models.",
    posterType: "legal-document-generation",
    links: {
      proceedings: "https://lrec.elra.info/lrec2026-main-530",
      arxiv: "https://arxiv.org/abs/2504.03486",
      github: "https://github.com/ShubhamKumarNigam/VidhikDastaavej",
      hfDataset: "https://huggingface.co/datasets/L-NLProc/VidhikDastaavej",
      conference: "https://lrec2026.info/",
    },
    bibtexText: `@inproceedings{nigam-etal-2026-structured,
  title = {Structured Legal Document Generation in India: A Model-Agnostic Wrapper Approach with VidhikDastaavej},
  author = {Nigam, Shubham Kumar and Balaramamahanthi, Deepak Patnaik and Shallum, Noel and Ghosh, Kripabandhu and Bhattacharya, Arnab},
  booktitle = {Proceedings of the Fifteenth Language Resources and Evaluation Conference (LREC 2026)},
  month = {May},
  year = {2026},
  pages = {6661--6673},
  address = {Palma, Mallorca, Spain},
  publisher = {European Language Resources Association (ELRA)},
  editor = {Piperidis, Stelios and Bel, Núria and van den Heuvel, Henk and Ide, Nancy and Krek, Simon and Toral, Antonio},
  doi = {10.63317/2wswvwyqxt4k}
}`,
    featured: true,
  },
  {
    id: "pub-14",
    title: "Seeing Justice Clearly: Handwritten Legal Document Translation with OCR and Vision-Language Models",
    authors: "Parjanya Aditya Shukla, Shubham Kumar Nigam, Noel Shallum, and Arnab Bhattacharya",
    venue: "AI-Law @ AAAI",
    year: 2026,
    status: "accepted",
    type: "workshop",
    topic: ["Legal AI", "OCR", "Vision-Language Models", "Multilingual AI"],
    summary: "Develops OCR and vision-language model pipelines for translating handwritten legal documents.",
    abstract: "We develop OCR and vision-language model pipelines for translating handwritten legal documents. Our multimodal approach preserves and digitizes handwritten legal heritage, making historical legal documents accessible through modern AI techniques.",
    impact: "Preserves and digitizes handwritten legal heritage through modern multimodal AI techniques.",
    posterType: "ocr-translation",
    links: {
      proceedings: "https://bridge-ai-law.github.io/assets/pdf/nigam2026seeing.pdf",
      arxiv: "https://arxiv.org/abs/2512.18004",
      conference: "https://bridge-ai-law.github.io/",
    },
    bibtexText: `@article{nigam2025seeing,
  title={Seeing Justice Clearly: Handwritten Legal Document Translation with OCR and Vision-Language Models},
  author={Nigam, Shubham Kumar and Shukla, Parjanya Aditya and Shallum, Noel and Bhattacharya, Arnab},
  journal={arXiv preprint arXiv:2512.18004},
  year={2025}
}`,
  },
  {
    id: "pub-15",
    title: "ReGal: A First Look at PPO-based Legal AI for Judgment Prediction and Summarization in India",
    authors: "Shubham Kumar Nigam, Tanuj Tyagi, Siddharth Shukla, Aditya Kumar Guru, Balaramamahanthi Deepak Patnaik, Danush Khanna, Noel Shallum, Kripabandhu Ghosh, and Arnab Bhattacharya",
    venue: "AI-Law @ AAAI",
    year: 2026,
    status: "accepted",
    type: "workshop",
    topic: ["Legal AI", "Reinforcement Learning", "PPO", "NLP"],
    summary: "Presents ReGal, the first application of PPO-based reinforcement learning for legal judgment prediction and summarization.",
    abstract: "We present ReGal, the first application of PPO-based reinforcement learning for legal judgment prediction and summarization in India. Our approach opens new avenues for RL-based optimization in legal NLP tasks, improving both prediction accuracy and summarization quality.",
    impact: "Opens new avenues for RL-based optimization in legal NLP tasks.",
    posterType: "reinforcement-learning",
    links: {
      proceedings: "https://bridge-ai-law.github.io/assets/pdf/nigam2026regal.pdf",
      arxiv: "https://arxiv.org/abs/2512.18014",
      github: "https://github.com/ShubhamKumarNigam/ReGal",
      hfDataset: "https://huggingface.co/datasets/L-NLProc/ReGal-Dataset",
      hfResults: "https://huggingface.co/datasets/L-NLProc/ReGal-Results",
      conference: "https://bridge-ai-law.github.io/",
    },
    bibtexText: `@article{nigam2025regal,
  title={ReGal: A First Look at PPO-based Legal AI for Judgment Prediction and Summarization in India},
  author={Nigam, Shubham Kumar and Tyagi, Tanuj and Shukla, Siddharth and Guru, Aditya Kumar and Patnaik, Balaramamahanthi Deepak and Khanna, Danush and Shallum, Noel and Ghosh, Kripabandhu and Bhattacharya, Arnab},
  journal={arXiv preprint arXiv:2512.18014},
  year={2025}
}`,
    featured: true,
  },
  {
    id: "pub-16",
    title: "NyayaRAG: Realistic Legal Judgment Prediction with RAG under the Indian Common Law System",
    authors: "Shubham Kumar Nigam, Balaramamahanthi Deepak Patnaik, Shivam Mishra, Ajay Thomas, Noel Shallum, Kripabandhu Ghosh, and Arnab Bhattacharya",
    venue: "AACL-IJCNLP",
    year: 2025,
    status: "published",
    type: "conference",
    topic: ["Legal AI", "RAG", "Judgment Prediction", "NLP"],
    summary: "Proposes NyayaRAG, a Retrieval-Augmented Generation framework that simulates realistic courtroom scenarios by combining case facts, statutes, and precedents.",
    abstract: "We propose NyayaRAG, a Retrieval-Augmented Generation framework for realistic legal judgment prediction under the Indian common law system. Our approach simulates courtroom scenarios by combining case facts, statutes, and semantically retrieved precedents, significantly improving predictive accuracy and explanation quality.",
    impact: "Sets a new benchmark for realistic legal judgment prediction by grounding predictions in external legal knowledge.",
    posterType: "rag-retrieval",
    links: {
      anthology: "https://aclanthology.org/2025.ijcnlp-long.92/",
      arxiv: "https://arxiv.org/abs/2508.00709",
      github: "https://github.com/ShubhamKumarNigam/RAGLegal",
      hfDataset: "https://huggingface.co/collections/L-NLProc/nyayarag",
    },
    bibtexText: `@inproceedings{nigam-etal-2025-nyayarag,
    title = "{N}yaya{RAG}: Realistic Legal Judgment Prediction with {RAG} under the {I}ndian Common Law System",
    author = "Nigam, Shubham Kumar  and
      Patnaik, Balaramamahanthi Deepak  and
      Mishra, Shivam  and
      Thomas, Ajay Varghese  and
      Shallum, Noel  and
      Ghosh, Kripabandhu  and
      Bhattacharya, Arnab",
    booktitle = "Proceedings of the 14th International Joint Conference on Natural Language Processing and the 4th Conference of the Asia-Pacific Chapter of the Association for Computational Linguistics",
    month = dec,
    year = "2025",
    address = "Mumbai, India",
    publisher = "The Asian Federation of Natural Language Processing and The Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.ijcnlp-long.92/",
    doi = "10.18653/v1/2025.ijcnlp-long.92",
    pages = "1709--1726",
    ISBN = "979-8-89176-298-5"
}`,
    featured: true,
  },
  {
    id: "pub-17",
    title: "TathyaNyaya and FactLegalLlama: Advancing Factual Judgment Prediction and Explanation in the Indian Legal Context",
    authors: "Shubham Kumar Nigam, Balaramamahanthi Deepak Patnaik, Shivam Mishra, Noel Shallum, Kripabandhu Ghosh, and Arnab Bhattacharya",
    venue: "AACL-IJCNLP",
    year: 2025,
    status: "published",
    type: "conference",
    topic: ["Legal AI", "Fact-based Prediction", "LLMs", "NLP"],
    summary: "Introduces TathyaNyaya, the largest annotated dataset for fact-based judgment prediction and explanation, and FactLegalLlama, an instruction-tuned LLaMa-3-8B model.",
    abstract: "We introduce TathyaNyaya, the largest annotated dataset for fact-based judgment prediction and explanation, and FactLegalLlama, an instruction-tuned LLaMa-3-8B model. Our work establishes a robust foundation for realistic, transparent, and trustworthy AI in the Indian legal system.",
    impact: "Establishes a robust foundation for realistic, transparent, and trustworthy AI in the Indian legal system.",
    posterType: "legal-judgment",
    links: {
      anthology: "https://aclanthology.org/2025.findings-ijcnlp.57/",
      arxiv: "https://arxiv.org/abs/2504.04737",
      github: "https://github.com/ShubhamKumarNigam/TathyaNyaya-and-FactLegalLlama",
      hfModel: "https://huggingface.co/collections/L-NLProc/tathyanyaya-and-factlegalllama-models",
      hfDataset: "https://huggingface.co/collections/L-NLProc/tathyanyaya-and-factlegalllama-datasets",
    },
    bibtexText: `@inproceedings{nigam-etal-2025-tathyanyaya,
    title = "{T}athya{N}yaya and {F}act{L}egal{L}lama: Advancing Factual Judgment Prediction and Explanation in the {I}ndian Legal Context",
    author = "Nigam, Shubham Kumar  and
      Patnaik, Balaramamahanthi Deepak  and
      Mishra, Shivam  and
      Shallum, Noel  and
      Ghosh, Kripabandhu  and
      Bhattacharya, Arnab",
    booktitle = "Proceedings of the 14th International Joint Conference on Natural Language Processing and the 4th Conference of the Asia-Pacific Chapter of the Association for Computational Linguistics",
    month = dec,
    year = "2025",
    address = "Mumbai, India",
    publisher = "The Asian Federation of Natural Language Processing and The Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.findings-ijcnlp.57/",
    doi = "10.18653/v1/2025.findings-ijcnlp.57",
    pages = "985--1002",
    ISBN = "979-8-89176-303-6"
}`,
    featured: true,
  },
  {
    id: "pub-18",
    title: "LegalSeg: Unlocking the Structure of Indian Legal Judgments Through Rhetorical Role Classification",
    authors: "Shubham Kumar Nigam, Tanmay Dubey, Govind Sharma, Noel Shallum, Kripabandhu Ghosh, and Arnab Bhattacharya",
    venue: "NAACL",
    year: 2025,
    status: "published",
    type: "conference",
    topic: ["Legal AI", "Rhetorical Roles", "Segmentation", "NLP"],
    summary: "Introduces LegalSeg, the largest annotated dataset for rhetorical role classification in Indian legal judgments, with over 7,000 documents and 1.4 million sentences.",
    abstract: "We introduce LegalSeg, the largest annotated dataset for rhetorical role classification in Indian legal judgments, containing over 7,000 documents and 1.4 million sentences. Our comprehensive benchmark significantly advances legal document understanding by providing structural annotations at unprecedented scale.",
    impact: "Significantly advances legal document understanding by providing structural annotations at unprecedented scale.",
    posterType: "rhetorical-segmentation",
    links: {
      anthology: "https://aclanthology.org/2025.findings-naacl.63/",
      arxiv: "https://arxiv.org/abs/2502.05836",
      github: "https://github.com/ShubhamKumarNigam/LegalSeg",
      hfModel: "https://huggingface.co/collections/L-NLProc/legalseg-models-67b8b42b5e1b74491fec8345",
      hfDataset: "https://huggingface.co/collections/L-NLProc/legalseg-dataset",
    },
    bibtexText: `@inproceedings{nigam-etal-2025-legalseg,
    title = "{L}egal{S}eg: Unlocking the Structure of {I}ndian Legal Judgments Through Rhetorical Role Classification",
    author = "Nigam, Shubham Kumar  and
      Dubey, Tanmay  and
      Sharma, Govind  and
      Shallum, Noel  and
      Ghosh, Kripabandhu  and
      Bhattacharya, Arnab",
    booktitle = "Findings of the Association for Computational Linguistics: NAACL 2025",
    month = apr,
    year = "2025",
    address = "Albuquerque, New Mexico",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.findings-naacl.63/",
    doi = "10.18653/v1/2025.findings-naacl.63",
    pages = "1129--1144",
    ISBN = "979-8-89176-195-7"
}`,
    featured: true,
  },
  {
    id: "pub-19",
    title: "NyayaAnumana & InLegalLlama: The Largest Indian Legal Judgment Prediction Dataset and Specialized Language Model for Enhanced Decision Analysis",
    authors: "Shubham Kumar Nigam, Balaramamahanthi Deepak Patnaik, Shivam Mishra, Noel Shallum, Kripabandhu Ghosh, and Arnab Bhattacharya",
    venue: "COLING",
    year: 2025,
    status: "published",
    type: "conference",
    topic: ["Legal AI", "Judgment Prediction", "LLMs", "NLP"],
    summary: "Introduces NyayaAnumana, the largest and most diverse corpus of Indian legal cases (702,945 cases), and INLegalLlama, a domain-specific generative LLM for legal judgment prediction.",
    abstract: "We introduce NyayaAnumana, the largest and most diverse corpus of Indian legal cases with 702,945 cases, and INLegalLlama, a domain-specific generative LLM for legal judgment prediction. Our model achieves approximately 90% F1-score, setting a new standard for legal AI in India.",
    impact: "Achieves approximately 90% F1-score in prediction tasks, setting a new standard for legal AI in India.",
    posterType: "legal-judgment",
    links: {
      anthology: "https://aclanthology.org/2025.coling-main.738/",
      arxiv: "https://arxiv.org/abs/2412.08385",
      github: "https://github.com/ShubhamKumarNigam/NyayaAnumana-and-INLegalLlama",
      hfModel: "https://huggingface.co/L-NLProc",
      hfDataset: "https://huggingface.co/collections/L-NLProc/nyayaanumana-and-inlegalllama-dataset",
    },
    bibtexText: `@inproceedings{nigam-etal-2025-nyayaanumana,
    title = "{NYAYAANUMANA} and {INLEGALLLAMA}: The Largest {I}ndian Legal Judgment Prediction Dataset and Specialized Language Model for Enhanced Decision Analysis",
    author = "Nigam, Shubham Kumar  and
      Balaramamahanthi, Deepak Patnaik  and
      Mishra, Shivam  and
      Shallum, Noel  and
      Ghosh, Kripabandhu  and
      Bhattacharya, Arnab",
    booktitle = "Proceedings of the 31st International Conference on Computational Linguistics",
    month = jan,
    year = "2025",
    address = "Abu Dhabi, UAE",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.coling-main.738/",
    pages = "11135--11160"
}`,
    featured: true,
  },
  {
    id: "pub-20",
    title: "Rethinking Legal Judgement Prediction in a Realistic Scenario in the Era of Large Language Models",
    authors: "Shubham Kumar Nigam, Aniket Deroy, Subhankar Maity, and Arnab Bhattacharya",
    venue: "NLLP @ EMNLP",
    year: 2024,
    status: "published",
    type: "workshop",
    topic: ["Legal AI", "LLMs", "Judgment Prediction", "NLP"],
    summary: "Investigates legal judgment prediction in realistic scenarios using only information available at the time of case presentation, evaluating transformers and LLMs.",
    abstract: "We investigate legal judgment prediction in realistic scenarios using only information available at the time of case presentation. Our evaluation of transformers and large language models highlights significant gaps between LLM capabilities and expert-level performance in realistic legal prediction settings.",
    impact: "Highlights gaps between LLM capabilities and expert-level performance in realistic legal prediction settings.",
    posterType: "legal-judgment",
    links: {
      anthology: "https://aclanthology.org/2024.nllp-1.6/",
      arxiv: "https://arxiv.org/abs/2410.10542",
      github: "https://github.com/ShubhamKumarNigam/Realistic_LJP",
      hfModel: "https://huggingface.co/collections/L-NLProc/realistic-ljp-models-671e8ed671a1f530eeb81221",
      hfDataset: "https://huggingface.co/collections/L-NLProc/realistic-ljp-datasets-670ccbeab5aea07a37e86df8",
    },
    bibtexText: `@inproceedings{nigam-etal-2024-rethinking,
    title = "Rethinking Legal Judgement Prediction in a Realistic Scenario in the Era of Large Language Models",
    author = "Nigam, Shubham Kumar  and
      Deroy, Aniket  and
      Maity, Subhankar  and
      Bhattacharya, Arnab",
    booktitle = "Proceedings of the Natural Legal Language Processing Workshop 2024",
    month = nov,
    year = "2024",
    address = "Miami, FL, USA",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2024.nllp-1.6",
    pages = "61--80"
}`,
  },
  {
    id: "pub-21",
    title: "Legal Judgment Reimagined: PredEx and the Rise of Intelligent AI Interpretation in Indian Courts",
    authors: "Shubham Kumar Nigam, Anurag Sharma, Danush Khanna, Noel Shallum, Kripabandhu Ghosh, and Arnab Bhattacharya",
    venue: "ACL",
    year: 2024,
    status: "published",
    type: "conference",
    topic: ["Legal AI", "Judgment Prediction", "Explanation", "NLP"],
    summary: "Introduces PredEx, the largest expert-annotated dataset for legal judgment prediction and explanation in India, with over 15,000 annotations and instruction-tuned LLMs.",
    abstract: "We introduce PredEx, the largest expert-annotated dataset for legal judgment prediction and explanation in India, with over 15,000 annotations. We also develop instruction-tuned LLMs that establish PredEx as a groundbreaking benchmark for legal judgment prediction and explanation research.",
    impact: "Establishes PredEx as a groundbreaking benchmark for legal judgment prediction and explanation research.",
    posterType: "legal-judgment",
    links: {
      anthology: "https://aclanthology.org/2024.findings-acl.255/",
      arxiv: "https://arxiv.org/abs/2406.04136",
      github: "https://github.com/ShubhamKumarNigam/PredEx",
      hfDataset: "https://huggingface.co/collections/L-NLProc/predex-datasets-6650a75907cc2255eab18d01",
    },
    bibtexText: `@inproceedings{nigam-etal-2024-legal,
    title = "Legal Judgment Reimagined: {P}red{E}x and the Rise of Intelligent {AI} Interpretation in {I}ndian Courts",
    author = "Nigam, Shubham  and
      Sharma, Anurag  and
      Khanna, Danush  and
      Shallum, Noel  and
      Ghosh, Kripabandhu  and
      Bhattacharya, Arnab",
    booktitle = "Findings of the Association for Computational Linguistics: ACL 2024",
    month = aug,
    year = "2024",
    address = "Bangkok, Thailand",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2024.findings-acl.255",
    doi = "10.18653/v1/2024.findings-acl.255",
    pages = "4296--4315"
}`,
    featured: true,
  },
  {
    id: "pub-22",
    title: "Nonet at SemEval-2023 Task 6: Methodologies for Legal Evaluation",
    authors: "Shubham Kumar Nigam, Aniket Deroy, Noel Shallum, Ayush Kumar Mishra, Anup Roy, Shubham Kumar Mishra, Arnab Bhattacharya, Saptarshi Ghosh, and Kripabandhu Ghosh",
    venue: "SemEval @ ACL",
    year: 2023,
    status: "published",
    type: "shared-task",
    topic: ["Legal AI", "Shared Task", "NLP"],
    summary: "Describes the Nonet team submission to SemEval-2023 Task 6 on LegalEval, achieving 1st place in Court Judgment Prediction with Explanation (Task-C2).",
    abstract: "We describe the Nonet team submission to SemEval-2023 Task 6 on LegalEval, achieving 1st place in Court Judgment Prediction with Explanation (Task-C2). Our methodologies demonstrate competitive approaches for legal entity recognition, judgment prediction, and explanation generation.",
    impact: "Demonstrates competitive methodologies for legal entity recognition, judgment prediction, and explanation generation.",
    posterType: "shared-task-benchmark",
    links: {
      anthology: "https://aclanthology.org/2023.semeval-1.180/",
      arxiv: "https://arxiv.org/abs/2310.11049",
      github: "https://github.com/ShubhamKumarNigam/LegalEval23_Nonet",
    },
    bibtexText: `@inproceedings{nigam-etal-2023-nonet,
    title = "Nonet at {S}em{E}val-2023 Task 6: Methodologies for Legal Evaluation",
    author = "Nigam, Shubham Kumar  and
      Deroy, Aniket  and
      Shallum, Noel  and
      Mishra, Ayush Kumar  and
      Roy, Anup  and
      Mishra, Shubham Kumar  and
      Bhattacharya, Arnab  and
      Ghosh, Saptarshi  and
      Ghosh, Kripabandhu",
    booktitle = "Proceedings of the 17th International Workshop on Semantic Evaluation (SemEval-2023)",
    month = jul,
    year = "2023",
    address = "Toronto, Canada",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2023.semeval-1.180/",
    doi = "10.18653/v1/2023.semeval-1.180",
    pages = "1293--1303"
}`,
  },
  {
    id: "pub-23",
    title: "Overview of the 3rd Symposium on Artificial Intelligence and Law",
    authors: "Saptarshi Ghosh, Kripabandhu Ghosh, Debasis Ganguly, Dwaipayan Roy, Manish Shrivastava, Ponnurangam Kumaraguru, Shouvik Guha, Koustav Rudra, Paheli Bhattacharya, Arindam Pal, Shubham Kumar Nigam, Aniket Deroy, and Shounak Paul",
    venue: "CEUR Workshop",
    year: 2023,
    status: "published",
    type: "workshop",
    topic: ["Legal AI", "Symposium Report"],
    summary: "Provides an overview of the 3rd Symposium on Artificial Intelligence and Law (SAIL-2023).",
    abstract: "We provide an overview of the 3rd Symposium on Artificial Intelligence and Law (SAIL-2023), documenting the state and evolution of AI and Law research in India and bringing together researchers from academia and industry.",
    impact: "Documents the state and evolution of AI and Law research in India.",
    posterType: "tutorial-survey",
    links: {},
    bibtexText: `@inproceedings{ghosh2023sail,
  title={Overview of the 3rd Symposium on Artificial Intelligence and Law},
  author={Ghosh, Saptarshi and Ghosh, Kripabandhu and Ganguly, Debasis and Roy, Dwaipayan and Shrivastava, Manish and Kumaraguru, Ponnurangam and Guha, Shouvik and Rudra, Koustav and Bhattacharya, Paheli and Pal, Arindam and Nigam, Shubham Kumar and Deroy, Aniket and Paul, Shounak},
  booktitle={CEUR Workshop Proceedings},
  year={2023}
}`,
  },
  {
    id: "pub-24",
    title: "Fact-based Court Judgment Prediction",
    authors: "Shubham Kumar Nigam and Aniket Deroy",
    venue: "FIRE",
    year: 2023,
    status: "published",
    type: "conference",
    topic: ["Legal AI", "Judgment Prediction", "NLP"],
    summary: "Explores fact-based court judgment prediction using factual segments of legal cases.",
    abstract: "We explore fact-based court judgment prediction using factual segments of legal cases. Our work contributes to early-stage legal prediction research focused on factual information rather than complete judgments with reasoning.",
    impact: "Contributes to early-stage legal prediction research focused on factual information.",
    posterType: "legal-judgment",
    links: {
      proceedings: "https://dl.acm.org/doi/10.1145/3632754.3632765",
      arxiv: "https://arxiv.org/abs/2311.13350",
    },
    bibtexText: `@inproceedings{10.1145/3632754.3632765,
author = {Nigam, Shubham Kumar and Deroy, Aniket},
title = {Fact-based Court Judgment Prediction},
year = {2024},
isbn = {9798400716324},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3632754.3632765},
doi = {10.1145/3632754.3632765},
booktitle = {Proceedings of the 15th Annual Meeting of the Forum for Information Retrieval Evaluation},
pages = {78--82},
numpages = {5},
keywords = {Data Augmentation, Fact-Based Predictions, Legal Information Extraction, Rhetorical Roles, Statute Description, Summarization},
location = {Panjim, India},
series = {FIRE '23}
}`,
  },
  {
    id: "pub-25",
    title: "LLMs – the Good, the Bad or the Indispensable?: A Use Case on Legal Statute Prediction and Legal Judgment Prediction on Indian Court Cases",
    authors: "Shaurya Vats, Atharva Zope, Somsubhra De, Anurag Sharma, Upal Bhattacharya, Shubham Kumar Nigam, Shouvik Kumar Guha, Koustav Rudra, and Kripabandhu Ghosh",
    venue: "EMNLP (Findings)",
    year: 2023,
    status: "published",
    type: "conference",
    topic: ["Legal AI", "LLMs", "Judgment Prediction", "NLP"],
    summary: "Evaluates state-of-the-art LLMs on legal statute prediction and judgment prediction tasks for Indian Supreme Court cases.",
    abstract: "We evaluate state-of-the-art large language models on legal statute prediction and judgment prediction tasks for Indian Supreme Court cases. Our analysis reveals both strengths and limitations of LLMs in high-stakes legal prediction tasks, including evidence of bias that must be addressed.",
    impact: "Reveals both strengths and limitations of LLMs in high-stakes legal prediction tasks, including evidence of bias.",
    posterType: "legal-judgment",
    links: {
      anthology: "https://aclanthology.org/2023.findings-emnlp.831/",
      github: "https://github.com/somsubhra04/LLM_Legal_Prompt_Generation",
    },
    bibtexText: `@inproceedings{vats-etal-2023-llms,
    title = "{LLM}s {--} the Good, the Bad or the Indispensable?: A Use Case on Legal Statute Prediction and Legal Judgment Prediction on {I}ndian Court Cases",
    author = "Vats, Shaurya  and
      Zope, Atharva  and
      De, Somsubhra  and
      Sharma, Anurag  and
      Bhattacharya, Upal  and
      Nigam, Shubham  and
      Guha, Shouvik  and
      Rudra, Koustav  and
      Ghosh, Kripabandhu",
    booktitle = "Findings of the Association for Computational Linguistics: EMNLP 2023",
    month = dec,
    year = "2023",
    address = "Singapore",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2023.findings-emnlp.831",
    pages = "12451--12474"
}`,
  },
  {
    id: "pub-26",
    title: "Legal IR and NLP: the History, Challenges, and State-of-the-Art",
    authors: "Debasis Ganguly, Jack G. Conrad, Kripabandhu Ghosh, Saptarshi Ghosh, Pawan Goyal, Paheli Bhattacharya, Shubham Kumar Nigam, Shounak Paul",
    venue: "ECIR",
    year: 2023,
    status: "published",
    type: "tutorial",
    topic: ["Legal AI", "Information Retrieval", "NLP", "Tutorial"],
    summary: "Comprehensive tutorial covering the history, challenges, and state-of-the-art in Legal IR and NLP.",
    abstract: "We present a comprehensive tutorial covering the history, challenges, and state-of-the-art in Legal Information Retrieval and NLP. This educational resource provides researchers with foundational knowledge and current advances in the field of Legal AI.",
    impact: "Serves as a key educational resource for researchers entering the field of Legal AI.",
    posterType: "tutorial-survey",
    links: {
      proceedings: "https://rdcu.be/c86FU",
      github: "https://github.com/Law-AI/ecir2023tutorial",
    },
    bibtexText: `@inproceedings{ganguly2023legal,
  title={Legal IR and NLP: the history, challenges, and state-of-the-art},
  author={Ganguly, Debasis and Conrad, Jack G and Ghosh, Kripabandhu and Ghosh, Saptarshi and Goyal, Pawan and Bhattacharya, Paheli and Nigam, Shubham Kumar and Paul, Shounak},
  booktitle={European Conference on Information Retrieval},
  pages={331--340},
  year={2023},
  organization={Springer}
}`,
  },
  {
    id: "pub-27",
    title: "Semantic Segmentation of Legal Documents via Rhetorical Roles",
    authors: "Vijit Malik, Rishabh Sanjay, Shouvik Kumar Guha, Angshuman Hazarika, Shubham Kumar Nigam, Arnab Bhattacharya, Ashutosh Modi",
    venue: "NLLP @ EMNLP",
    year: 2022,
    status: "published",
    type: "workshop",
    topic: ["Legal AI", "Rhetorical Roles", "Segmentation", "NLP"],
    summary: "Proposes a new corpus of legal documents annotated with rhetorical roles and develops MTL-based models for semantic segmentation.",
    abstract: "We propose a new corpus of legal documents annotated with rhetorical roles and develop multi-task learning based models for semantic segmentation. This foundational work enables structured understanding of legal documents for downstream tasks.",
    impact: "Laid the foundational work for rhetorical role segmentation in Indian legal documents.",
    posterType: "rhetorical-segmentation",
    links: {
      anthology: "https://aclanthology.org/2022.nllp-1.13/",
      arxiv: "https://arxiv.org/abs/2112.01836",
      github: "https://github.com/Exploration-Lab/Rhetorical-Roles",
    },
    bibtexText: `@inproceedings{malik2022semantic,
  title={Semantic segmentation of legal documents via rhetorical roles},
  author={Malik, Vijit and Sanjay, Rishabh and Guha, Shouvik Kumar and Hazarika, Angshuman and Nigam, Shubham Kumar and Bhattacharya, Arnab and Modi, Ashutosh},
  booktitle={Proceedings of the Natural Legal Language Processing Workshop 2022},
  pages={153--171},
  year={2022}
}`,
  },
  {
    id: "pub-28",
    title: "Report on the 2nd Symposium on Artificial Intelligence and Law (SAIL) 2022",
    authors: "Saptarshi Ghosh, Kripabandhu Ghosh, Debasis Ganguly, Arnab Bhattacharya, Partha Pratim Chakrabarti, Shouvik Guha, Arindam Pal, Koustav Rudra, Prasenjit Majumder, Dwaipayan Roy, Ayan Bandopadhyay, Procheta Sen, Paheli Bhattacharya, Aniket Deroy, Upal Bhattacharya, Subinay Adhikary and Shubham Kumar Nigam",
    venue: "SIGIR Forum",
    year: 2022,
    status: "published",
    type: "workshop",
    topic: ["Legal AI", "Symposium Report"],
    summary: "Reports on the proceedings and outcomes of the 2nd Symposium on Artificial Intelligence and Law (SAIL-2022).",
    abstract: "We report on the proceedings and outcomes of the 2nd Symposium on Artificial Intelligence and Law (SAIL-2022), documenting the growing Legal AI community and emerging research directions in India.",
    impact: "Documents the growing Legal AI community and research directions in India.",
    posterType: "tutorial-survey",
    links: {
      proceedings: "https://sigir.org/wp-content/uploads/2022/07/p11.pdf",
    },
    bibtexText: `@inproceedings{ghosh2023report,
  title={Report on the 2nd Symposium on Artificial Intelligence and Law (SAIL) 2022},
  author={Ghosh, Saptarshi and Ghosh, Kripabandhu and Ganguly, Debasis and Bhattacharya, Arnab and Chakrabarti, Partha Pratim and Guha, Shouvik and Pal, Arindam and Rudra, Koustav and Majumder, Prasenjit and Roy, Dwaipayan and others},
  booktitle={ACM SIGIR Forum},
  volume={56},
  number={1},
  pages={1--7},
  year={2023},
  organization={ACM New York, NY, USA}
}`,
  },
  {
    id: "pub-29",
    title: "nigam@COLIEE-22: Legal Case Retrieval and Entailment using Cascading of Lexical and Semantic-based models",
    authors: "Shubham Kumar Nigam, Navansh Goel",
    venue: "JURISIN / COLIEE",
    year: 2022,
    status: "published",
    type: "shared-task",
    topic: ["Legal AI", "Information Retrieval", "Case Retrieval", "NLP"],
    summary: "Describes the nigam team submission to COLIEE-2022, ranking 5th in legal case retrieval and entailment tasks using cascading lexical and semantic models.",
    abstract: "We describe our submission to COLIEE-2022, ranking 5th in legal case retrieval and entailment tasks using cascading lexical and semantic models. Our results demonstrate that traditional BM25 retrieval can still outperform neural models in certain legal IR settings.",
    impact: "Demonstrates that traditional BM25 retrieval can still outperform neural models in certain legal IR settings.",
    posterType: "shared-task-benchmark",
    links: {
      proceedings: "https://link.springer.com/chapter/10.1007/978-3-031-29168-5_7",
      arxiv: "https://arxiv.org/abs/2204.07853",
      github: "https://github.com/ShubhamKumarNigam/COLIEE-22",
    },
    bibtexText: `@inproceedings{nigam2022nigam,
  title={nigam@ coliee-22: Legal case retrieval and entailment using cascading of lexical and semantic-based models},
  author={Nigam, Shubham Kumar and Goel, Navansh and Bhattacharya, Arnab},
  booktitle={Jsai international symposium on artificial intelligence},
  pages={96--108},
  year={2022},
  organization={Springer}
}`,
  },
  {
    id: "pub-30",
    title: "Plumeria at SemEval-2022 Task 6: Robust Approaches for Sarcasm Detection for English and Arabic Using Transformers and Data Augmentation",
    authors: "Shubham Kumar Nigam, Mosab Shaheen",
    venue: "SemEval @ NAACL",
    year: 2022,
    status: "published",
    type: "shared-task",
    topic: ["Social NLP", "Sarcasm Detection", "NLP"],
    summary: "Presents robust transformer-based approaches with data augmentation for sarcasm detection in English and Arabic.",
    abstract: "We present robust transformer-based approaches with data augmentation for sarcasm detection in English and Arabic. Our methods achieve consistent top rankings across multiple subtasks, demonstrating robustness and stability in cross-lingual settings.",
    impact: "Achieves consistent top rankings across multiple subtasks, demonstrating robustness and stability.",
    posterType: "sarcasm-social-nlp",
    links: {
      anthology: "https://aclanthology.org/2022.semeval-1.130/",
      arxiv: "https://arxiv.org/abs/2203.04111",
      github: "https://github.com/ShubhamKumarNigam/iSarcasm-SemEval-2022-Task-6",
    },
    bibtexText: `@inproceedings{shaheen-nigam-2022-plumeria,
    title = "Plumeria at {S}em{E}val-2022 Task 6: Sarcasm Detection for {E}nglish and {A}rabic Using Transformers and Data Augmentation",
    author = "Shaheen, Mosab  and
      Nigam, Shubham Kumar",
    booktitle = "Proceedings of the 16th International Workshop on Semantic Evaluation (SemEval-2022)",
    month = jul,
    year = "2022",
    address = "Seattle, United States",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2022.semeval-1.130/",
    doi = "10.18653/v1/2022.semeval-1.130",
    pages = "923--937"
}`,
  },
  {
    id: "pub-31",
    title: "ILDC for CJPE: Indian Legal Documents Corpus for Court Judgment Prediction and Explanation",
    authors: "Vijit Malik, Rishabh Sanjay, Shubham Kumar Nigam, Kripabandhu Ghosh, Shouvik Kumar Guha, Arnab Bhattacharya, Ashutosh Modi",
    venue: "ACL-IJCNLP",
    year: 2021,
    status: "published",
    type: "conference",
    topic: ["Legal AI", "Judgment Prediction", "Explanation", "NLP"],
    summary: "Introduces ILDC, a large corpus of 35k Indian Supreme Court cases annotated with decisions and expert explanations, proposing the Court Judgment Prediction and Explanation (CJPE) task.",
    abstract: "We introduce ILDC, a large corpus of 35,000 Indian Supreme Court cases annotated with decisions and expert explanations, proposing the Court Judgment Prediction and Explanation (CJPE) task. This pioneering work remains one of the most cited works in Indian Legal NLP.",
    impact: "Pioneered the CJPE task and remains one of the most cited works in Indian Legal NLP with over 250 citations.",
    posterType: "legal-judgment",
    links: {
      anthology: "https://aclanthology.org/2021.acl-long.313/",
      arxiv: "https://arxiv.org/abs/2105.13562",
      github: "https://github.com/Exploration-Lab/CJPE",
    },
    bibtexText: `@inproceedings{malik-etal-2021-ildc,
    title = "{ILDC} for {CJPE}: {I}ndian Legal Documents Corpus for Court Judgment Prediction and Explanation",
    author = "Malik, Vijit  and
      Sanjay, Rishabh  and
      Nigam, Shubham Kumar  and
      Ghosh, Kripabandhu  and
      Guha, Shouvik Kumar  and
      Bhattacharya, Arnab  and
      Modi, Ashutosh",
    booktitle = "Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers)",
    month = aug,
    year = "2021",
    address = "Online",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2021.acl-long.313",
    doi = "10.18653/v1/2021.acl-long.313",
    pages = "4046--4062"
}`,
    featured: true,
  },
  {
    id: "pub-32",
    title: "SwaGrader: An Honest Effort Extracting, Modular Peer-Grading Tool",
    authors: "Somu Prajapati, Ayushi Gupta, Shubham Kumar Nigam, Swaprava Nath",
    venue: "CoDS-COMAD",
    year: 2020,
    status: "published",
    type: "demo",
    topic: ["Education Technology", "Peer Grading", "NLP"],
    summary: "Demonstrates SwaGrader, a modular peer-grading tool with TRUPEQA mechanism for accurate and strategic grading in MOOCs.",
    abstract: "We demonstrate SwaGrader, a modular peer-grading tool with the TRUPEQA mechanism for accurate and strategic grading in MOOCs. Our system improves grading quality in large courses through algorithmic peer assessment correction.",
    impact: "Improves grading quality in large courses through algorithmic peer assessment correction.",
    posterType: "peer-grading-tool",
    links: {
      proceedings: "https://dl.acm.org/doi/10.1145/3371158.3371205",
    },
    bibtexText: `@inproceedings{prajapati2020swagrader,
  title={SwaGrader: A Honest Effort Extracting, Modular Peer-Grading Tool},
  author={Prajapati, Somu and Gupta, Ayushi and Nigam, Shubham Kumar and Nath, Swaprava},
  booktitle={CoDS-COMAD},
  year={2020}
}`,
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "KAMAL Health",
    posterType: "healthcare-dialogue",
    problem: "Healthcare systems in multilingual regions lack interpretable AI tools for clinical decision support and patient-centric care.",
    method: "Developing responsible AI systems that support clinical decision-making across Arabic and English languages with explainable outputs.",
    impact: "Improves patient care accessibility and clinical decision quality in multilingual healthcare environments.",
    publications: ["pub-1", "pub-2"],
    links: {},
    tags: ["Healthcare AI", "Multilingual AI", "Explainable AI", "Current"],
  },
  {
    id: "proj-2",
    name: "BharatGen / BharatGPT",
    posterType: "legal-document-generation",
    problem: "India needs indigenous generative AI technologies tailored to its diverse linguistic and cultural landscape.",
    method: "Contributed to BharatGPT, a suite of generative AI technologies for India funded by DST.",
    impact: "Advances indigenous AI capabilities for Indian languages and domains.",
    publications: [],
    links: {
      website: "https://bharatgen.iitk.ac.in/projects",
    },
    tags: ["Generative AI", "Multilingual AI", "India"],
  },
  {
    id: "proj-3",
    name: "NyayaMind",
    posterType: "legal-judgment",
    problem: "Legal AI systems often lack transparency in their reasoning processes, reducing trust among legal professionals.",
    method: "Framework for transparent legal reasoning and judgment prediction using structured thinking and explainable AI.",
    impact: "Enhances trust and interpretability in AI-assisted legal decision-making.",
    publications: ["pub-3"],
    links: {},
    tags: ["Legal AI", "Explainable AI", "Judgment Prediction"],
  },
  {
    id: "proj-4",
    name: "NyayaRAG",
    posterType: "rag-retrieval",
    problem: "Existing LJP systems ignore statutory provisions and judicial precedents, core elements of common law reasoning.",
    method: "RAG framework integrating case facts, statutes, and semantically retrieved precedents for realistic legal judgment prediction.",
    impact: "Significantly improves predictive accuracy and explanation quality by grounding predictions in external legal knowledge.",
    publications: ["pub-16"],
    links: {
      github: "https://github.com/ShubhamKumarNigam/NyayaRAG",
      arxiv: "https://arxiv.org/abs/2508.00709",
    },
    tags: ["Legal AI", "RAG", "Judgment Prediction", "Retrieval"],
  },
  {
    id: "proj-5",
    name: "TathyaNyaya / FactLegalLlama",
    posterType: "legal-judgment",
    problem: "Prior LJP datasets use complete judgments including reasoning, unlike real-world early-stage decision-making based only on facts.",
    method: "Created TathyaNyaya dataset focusing on factual statements, and FactLegalLlama, an instruction-tuned LLaMa-3-8B for fact-based prediction and explanation.",
    impact: "Enables more realistic legal prediction scenarios and improves transparency in AI-assisted legal analysis.",
    publications: ["pub-17"],
    links: {
      github: "https://github.com/ShubhamKumarNigam/TathyaNyaya-and-FactLegalLlama",
      arxiv: "https://arxiv.org/abs/2504.04737",
    },
    tags: ["Legal AI", "Fact-based Prediction", "LLMs"],
  },
  {
    id: "proj-6",
    name: "NyayaAnumana / InLegalLLaMA",
    posterType: "legal-judgment",
    problem: "Existing Indian legal datasets lack scale, diversity across court levels, and comprehensive coverage.",
    method: "Compiled NyayaAnumana (702,945 cases) and developed INLegalLlama through continual pretraining and supervised fine-tuning on Indian legal documents.",
    impact: "Achieves ~90% F1-score, setting a new benchmark for Indian legal judgment prediction.",
    publications: ["pub-19"],
    links: {
      github: "https://github.com/ShubhamKumarNigam/NyayaAnumana-and-INLegalLlama",
      arxiv: "https://arxiv.org/abs/2412.08385",
      hfModel: "https://huggingface.co/L-NLProc",
    },
    tags: ["Legal AI", "Dataset", "LLMs", "Judgment Prediction"],
  },
  {
    id: "proj-7",
    name: "LegalSeg",
    posterType: "rhetorical-segmentation",
    problem: "Legal documents are unstructured and lengthy, making automatic processing difficult without semantic segmentation.",
    method: "Created the largest annotated dataset (7,000+ docs, 1.4M sentences) with 7 rhetorical roles and benchmarked multiple SOTA models including RhetoricLLaMA.",
    impact: "Enables structured legal document understanding and improves downstream tasks like summarization and retrieval.",
    publications: ["pub-18"],
    links: {
      github: "https://github.com/ShubhamKumarNigam/LegalSeg",
      arxiv: "https://arxiv.org/abs/2502.05836",
    },
    tags: ["Legal AI", "Segmentation", "Rhetorical Roles", "Dataset"],
  },
  {
    id: "proj-8",
    name: "VidhikDastaavej",
    posterType: "legal-document-generation",
    problem: "Generating structured legal documents requires domain-specific formatting and content organization.",
    method: "Model-agnostic wrapper approach for structured legal document generation in India.",
    impact: "Automates legal document drafting while remaining adaptable to various underlying generative models.",
    publications: ["pub-13"],
    links: {
      arxiv: "https://arxiv.org/abs/2504.03486",
    },
    tags: ["Legal AI", "Document Generation", "NLP"],
  },
  {
    id: "proj-9",
    name: "AILQA",
    posterType: "question-answering",
    problem: "There is no comprehensive evaluation framework for AI-driven legal question answering in the Indian context.",
    method: "Developed AILQA, a multi-faceted evaluation framework for legal QA systems tailored to Indian law.",
    impact: "Sets benchmarks and identifies challenges for legal QA system development in India.",
    publications: ["pub-10"],
    links: {},
    tags: ["Legal AI", "Question Answering", "Evaluation"],
  },
  {
    id: "proj-10",
    name: "IBPS",
    posterType: "legal-judgment",
    problem: "Bail prediction is a critical judicial decision that lacks AI-assisted tools in the Indian context.",
    method: "Developed the Indian Bail Prediction System (IBPS) using machine learning on historical bail data.",
    impact: "Supports judicial efficiency by providing data-driven insights for bail decision-making.",
    publications: ["pub-8"],
    links: {
      arxiv: "https://arxiv.org/abs/2508.07592",
    },
    tags: ["Legal AI", "Bail Prediction", "Judicial Decision Support"],
  },
  {
    id: "proj-11",
    name: "IndicMedDialog",
    posterType: "healthcare-dialogue",
    problem: "Indic languages lack medical dialogue datasets for building accessible healthcare AI.",
    method: "Created a parallel multi-turn medical dialogue dataset covering multiple Indic languages.",
    impact: "Enables development of multilingual medical dialogue systems for underserved language communities.",
    publications: ["pub-1"],
    links: {},
    tags: ["Healthcare AI", "Multilingual AI", "Dataset", "Indic Languages"],
  },
  {
    id: "proj-12",
    name: "MedAidDialog",
    posterType: "healthcare-dialogue",
    problem: "Global healthcare AI is limited by lack of diverse multilingual medical conversation data.",
    method: "Developed a multilingual multi-turn medical dialogue dataset for accessible healthcare.",
    impact: "Supports creation of inclusive healthcare dialogue agents across languages.",
    publications: ["pub-2"],
    links: {},
    tags: ["Healthcare AI", "Multilingual AI", "Dataset"],
  },
];

export const workingProjects: WorkingProject[] = [
  {
    id: "wp-1",
    title: "Token-Efficient AI Memory Management System (Engram)",
    status: "Ongoing",
    description: "Developing a token-efficient memory management system for large language models that compresses conversation history without losing critical context.",
    objective: "Reduce token usage in long-context LLM applications while maintaining conversational coherence and recall accuracy.",
    expectedImpact: "Enables cost-effective deployment of LLM-based dialogue systems with extended memory.",
    collaborators: ["University of Birmingham Dubai"],
    timeline: "2025 – 2026",
    progress: 35,
    relatedPublications: [],
    relatedDatasetsModels: [],
    posterType: "rag-retrieval",
    tags: ["LLMs", "Memory Management", "Efficiency"],
  },
  {
    id: "wp-2",
    title: "Graph-RAG for Legal Knowledge Bases",
    status: "In Progress",
    description: "Extending RAG with knowledge graph structures for more precise legal information retrieval and reasoning.",
    objective: "Combine vector retrieval with graph traversal to improve legal precedent and statute retrieval.",
    expectedImpact: "Significantly improves retrieval precision for complex legal queries requiring multi-hop reasoning.",
    collaborators: ["IIT Kanpur", "IISER Kolkata"],
    timeline: "2025 – 2026",
    progress: 50,
    relatedPublications: ["pub-16"],
    relatedDatasetsModels: ["dm-11"],
    posterType: "rag-retrieval",
    tags: ["Legal AI", "Graph RAG", "Knowledge Graphs"],
  },
  {
    id: "wp-3",
    title: "Vectorless Generative Retrieval",
    status: "Prototype",
    description: "Exploring generative retrieval approaches that bypass traditional vector databases by generating document identifiers directly.",
    objective: "Develop efficient retrieval mechanisms for legal documents without dense vector indexing.",
    expectedImpact: "Reduces storage and computational costs for large-scale legal document collections.",
    collaborators: ["University of Birmingham Dubai"],
    timeline: "2025 – 2026",
    progress: 25,
    relatedPublications: [],
    relatedDatasetsModels: [],
    posterType: "rag-retrieval",
    tags: ["Generative Retrieval", "Legal IR", "Efficiency"],
  },
  {
    id: "wp-4",
    title: "Action Oriented Model Orchestrator",
    status: "Ongoing",
    description: "Building an orchestration framework for coordinating multiple specialized AI models for complex legal and healthcare workflows.",
    objective: "Enable seamless integration of domain-specific models for end-to-end task completion.",
    expectedImpact: "Improves system reliability and performance in multi-step legal and healthcare AI pipelines.",
    collaborators: ["University of Birmingham Dubai"],
    timeline: "2025 – 2026",
    progress: 40,
    relatedPublications: [],
    relatedDatasetsModels: [],
    posterType: "legal-judgment",
    tags: ["MLOps", "Model Orchestration", "Legal AI", "Healthcare AI"],
  },
  {
    id: "wp-5",
    title: "Test Time Training (TTT) for Legal Adaptation",
    status: "In Progress",
    description: "Investigating test-time training techniques to adapt language models to unseen legal domains without fine-tuning.",
    objective: "Improve zero-shot and few-shot performance of LLMs on specialized legal tasks at inference time.",
    expectedImpact: "Reduces need for task-specific fine-tuning while maintaining high accuracy on diverse legal tasks.",
    collaborators: ["IIT Kanpur"],
    timeline: "2025 – 2026",
    progress: 30,
    relatedPublications: [],
    relatedDatasetsModels: [],
    posterType: "legal-judgment",
    tags: ["LLMs", "Test-Time Training", "Legal AI"],
  },
  {
    id: "wp-6",
    title: "Diffusion-Based Small Language Models (SLM)",
    status: "Prototype",
    description: "Exploring diffusion-based training paradigms for efficient small language models tailored to legal and medical domains.",
    objective: "Develop compact, efficient language models with diffusion-based generation for resource-constrained environments.",
    expectedImpact: "Enables deployment of capable language models on edge devices and in low-resource settings.",
    collaborators: ["University of Birmingham Dubai"],
    timeline: "2025 – 2026",
    progress: 20,
    relatedPublications: [],
    relatedDatasetsModels: [],
    posterType: "legal-document-generation",
    tags: ["Diffusion Models", "SLM", "Efficiency"],
  },
  {
    id: "wp-7",
    title: "Document Generation Efficiently",
    status: "In Progress",
    description: "Optimizing legal and medical document generation pipelines for speed, quality, and resource efficiency.",
    objective: "Reduce inference time and computational cost for structured document generation while maintaining quality.",
    expectedImpact: "Makes automated document generation viable for real-time applications.",
    collaborators: ["University of Birmingham Dubai", "IIT Kanpur"],
    timeline: "2025 – 2026",
    progress: 45,
    relatedPublications: ["pub-13"],
    relatedDatasetsModels: ["dm-5"],
    posterType: "legal-document-generation",
    tags: ["Document Generation", "Efficiency", "Legal AI"],
  },
  {
    id: "wp-8",
    title: "Automated ODR Platform",
    status: "Prototype",
    description: "Building an Online Dispute Resolution (ODR) platform powered by AI for efficient conflict resolution.",
    objective: "Automate mediation and resolution workflows for small claims and consumer disputes.",
    expectedImpact: "Reduces court burden and provides accessible dispute resolution for common legal conflicts.",
    collaborators: ["University of Birmingham Dubai"],
    timeline: "2025 – 2026",
    progress: 30,
    relatedPublications: [],
    relatedDatasetsModels: [],
    posterType: "legal-judgment",
    tags: ["ODR", "Legal Tech", "Access to Justice"],
  },
  {
    id: "wp-9",
    title: "Mechanistic Interpretability for Legal AI",
    status: "Ongoing",
    description: "Studying the internal representations of legal AI models to understand how they make judicial predictions.",
    objective: "Uncover circuits and attention patterns responsible for legal reasoning in transformer models.",
    expectedImpact: "Improves trust and enables targeted improvements in legal AI systems.",
    collaborators: ["IIT Kanpur", "IISER Kolkata"],
    timeline: "2025 – 2026",
    progress: 25,
    relatedPublications: [],
    relatedDatasetsModels: [],
    posterType: "bias-fairness",
    tags: ["Mechanistic Interpretability", "Legal AI", "Explainable AI"],
  },
  {
    id: "wp-10",
    title: "VLLM OCR for Legal Documents",
    status: "In Progress",
    description: "Developing vision-language model based OCR systems for handwritten and degraded legal documents.",
    objective: "Achieve high-accuracy text extraction from challenging legal document images including handwritten notes.",
    expectedImpact: "Preserves historical legal documents and enables digitization of paper-based court records.",
    collaborators: ["IIT Kanpur"],
    timeline: "2025 – 2026",
    progress: 40,
    relatedPublications: ["pub-14"],
    relatedDatasetsModels: [],
    posterType: "ocr-translation",
    tags: ["OCR", "Vision-Language Models", "Legal AI"],
  },
  {
    id: "wp-11",
    title: "Legal Biasness Detection and Mitigation",
    status: "Ongoing",
    description: "Systematically identifying and mitigating biases in legal AI predictions across demographic dimensions.",
    objective: "Develop fairness-aware training and evaluation protocols for legal judgment prediction systems.",
    expectedImpact: "Promotes equitable AI systems that do not disadvantage specific groups in judicial contexts.",
    collaborators: ["IIT Kanpur", "IISER Kolkata"],
    timeline: "2025 – 2026",
    progress: 35,
    relatedPublications: ["pub-7"],
    relatedDatasetsModels: [],
    posterType: "bias-fairness",
    tags: ["Fairness", "Bias Mitigation", "Responsible AI", "Legal AI"],
  },
  {
    id: "wp-12",
    title: "Predictive Modelling for Healthcare Outcomes",
    status: "In Progress",
    description: "Applying predictive modeling techniques to healthcare data for early intervention and decision support.",
    objective: "Build accurate predictive models for patient outcomes using multimodal healthcare data.",
    expectedImpact: "Supports clinicians with data-driven insights for proactive patient care.",
    collaborators: ["University of Birmingham Dubai"],
    timeline: "2025 – 2026",
    progress: 50,
    relatedPublications: ["pub-1", "pub-2"],
    relatedDatasetsModels: ["dm-6", "dm-7"],
    posterType: "healthcare-dialogue",
    tags: ["Healthcare AI", "Predictive Modeling", "Decision Support"],
  },
];

export const datasetsModels: DatasetModel[] = [
  {
    id: "dm-1",
    name: "ILDC",
    type: "Dataset",
    domain: "Legal AI",
    description: "Indian Legal Documents Corpus with 35k Supreme Court cases annotated for Court Judgment Prediction and Explanation (CJPE).",
    relatedPapers: ["pub-31"],
    links: {
      github: "https://github.com/Exploration-Lab/CJPE",
    },
  },
  {
    id: "dm-2",
    name: "NyayaAnumana",
    type: "Dataset",
    domain: "Legal AI",
    description: "The largest Indian legal judgment prediction dataset with 702,945 preprocessed cases from Supreme Court, High Courts, Tribunal Courts, District Courts, and Daily Orders.",
    relatedPapers: ["pub-19"],
    links: {
      github: "https://github.com/ShubhamKumarNigam/NyayaAnumana-and-INLegalLlama",
      arxiv: "https://arxiv.org/abs/2412.08385",
    },
  },
  {
    id: "dm-3",
    name: "TathyaNyaya",
    type: "Dataset",
    domain: "Legal AI",
    description: "The largest annotated dataset for Fact-based Judgment Prediction and Explanation (FJPE) in the Indian legal domain, with four components: NyayaFacts, NyayaScrape, NyayaSimplify, and NyayaFilter.",
    relatedPapers: ["pub-17"],
    links: {
      github: "https://github.com/ShubhamKumarNigam/TathyaNyaya-and-FactLegalLlama",
      arxiv: "https://arxiv.org/abs/2504.04737",
    },
  },
  {
    id: "dm-4",
    name: "LegalSeg",
    type: "Dataset",
    domain: "Legal AI",
    description: "The largest annotated dataset for rhetorical role classification with 7,000+ documents and 1.4M sentences labeled with 7 rhetorical roles.",
    relatedPapers: ["pub-18"],
    links: {
      github: "https://github.com/ShubhamKumarNigam/LegalSeg",
      arxiv: "https://arxiv.org/abs/2502.05836",
    },
  },
  {
    id: "dm-5",
    name: "VidhikDastaavej",
    type: "Tool",
    domain: "Legal AI",
    description: "A model-agnostic wrapper for structured legal document generation in India.",
    relatedPapers: ["pub-13"],
    links: {
      arxiv: "https://arxiv.org/abs/2504.03486",
    },
  },
  {
    id: "dm-6",
    name: "IndicMedDialog",
    type: "Dataset",
    domain: "Healthcare AI",
    description: "A parallel multi-turn medical dialogue dataset for accessible healthcare in Indic languages.",
    relatedPapers: ["pub-1"],
    links: {},
  },
  {
    id: "dm-7",
    name: "MedAidDialog",
    type: "Dataset",
    domain: "Healthcare AI",
    description: "A multilingual multi-turn medical dialogue dataset for accessible healthcare.",
    relatedPapers: ["pub-2"],
    links: {},
  },
  {
    id: "dm-8",
    name: "InLegalLLaMA",
    type: "Model",
    domain: "Legal AI",
    description: "A domain-specific generative large language model tailored to the Indian legal system, trained through continual pretraining and supervised fine-tuning over LLaMa.",
    relatedPapers: ["pub-19"],
    links: {
      github: "https://github.com/ShubhamKumarNigam/NyayaAnumana-and-INLegalLlama",
      hfModel: "https://huggingface.co/L-NLProc",
    },
  },
  {
    id: "dm-9",
    name: "FactLegalLLaMA",
    type: "Model",
    domain: "Legal AI",
    description: "An instruction-tuned variant of LLaMa-3-8B optimized for fact-based judgment prediction and explanation generation.",
    relatedPapers: ["pub-17"],
    links: {
      github: "https://github.com/ShubhamKumarNigam/TathyaNyaya-and-FactLegalLlama",
      hfModel: "https://huggingface.co/L-NLProc",
    },
  },
  {
    id: "dm-10",
    name: "RhetoricLLaMA",
    type: "Model",
    domain: "Legal AI",
    description: "An instruction-tuned large language model for rhetorical role classification in legal documents.",
    relatedPapers: ["pub-18"],
    links: {
      github: "https://github.com/ShubhamKumarNigam/LegalSeg",
      hfModel: "https://huggingface.co/L-NLProc",
    },
  },
  {
    id: "dm-11",
    name: "NyayaRAG",
    type: "Tool",
    domain: "Legal AI",
    description: "A Retrieval-Augmented Generation framework for realistic legal judgment prediction under the Indian common law system.",
    relatedPapers: ["pub-16"],
    links: {
      github: "https://github.com/ShubhamKumarNigam/NyayaRAG",
      arxiv: "https://arxiv.org/abs/2508.00709",
    },
  },
  {
    id: "dm-12",
    name: "IBPS",
    type: "Tool",
    domain: "Legal AI",
    description: "Indian Bail Prediction System for supporting bail decision-making using machine learning.",
    relatedPapers: ["pub-8"],
    links: {
      arxiv: "https://arxiv.org/abs/2508.07592",
    },
  },
];

export const talks: Talk[] = [
  {
    id: "talk-1",
    title: "From Courts to Clinics: Building Responsible and Explainable AI Systems for Society",
    venue: "Academics and Career Council (PG), Research Talk Series, IIT Kanpur",
    date: "02 February 2026",
    location: "India",
    format: "Virtual",
    tags: ["Legal AI", "Healthcare AI", "Explainable AI", "Responsible AI"],
    links: {},
  },
  {
    id: "talk-2",
    title: "From Courts to Clinics: Building Responsible and Explainable AI Systems for Society",
    venue: "COREQ Research Seminar Series, University of Birmingham Dubai",
    date: "18 November 2025",
    location: "Dubai, UAE",
    format: "In-person",
    tags: ["Legal AI", "Healthcare AI", "Explainable AI", "Responsible AI"],
    links: {},
  },
  {
    id: "talk-3",
    title: "NyayaSutra: Enabling Reliable and Interpretable Legal Judgment through Structured Thinking",
    venue: "3rd Symposium on NLP for Social Good",
    date: "26 June 2025",
    location: "Virtual",
    format: "Virtual",
    tags: ["Legal AI", "Interpretability", "Judgment Prediction"],
    links: {},
  },
  {
    id: "talk-4",
    title: "NyayaMind: Transparent and Scalable Legal Reasoning in the Indian Judiciary",
    venue: "AI & Law Forum",
    date: "10 May 2025",
    location: "NLSIU Campus, Bengaluru, India",
    format: "In-person",
    tags: ["Legal AI", "Transparent AI", "Judgment Prediction"],
    links: {},
  },
  {
    id: "talk-5",
    title: "Legal IR and NLP: Challenges, and State-of-the-Art",
    venue: "Symposium on Artificial Intelligence and Law (SAIL), 2023",
    date: "2023",
    location: "India",
    format: "In-person",
    tags: ["Legal IR", "NLP", "Tutorial"],
    links: {},
  },
  {
    id: "talk-6",
    title: "Legal IR and NLP: Challenges, and State-of-the-Art",
    venue: "European Conference on Information Retrieval (ECIR), 2023",
    date: "2023",
    location: "Dublin, Ireland",
    format: "In-person",
    tags: ["Legal IR", "NLP", "Tutorial"],
    links: {
      slides: "https://github.com/Law-AI/ecir2023tutorial",
    },
  },
];

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "DAAD Postdoc-NeT-AI Fellow",
    description: "Selected for the international research networking program funded by DAAD, Germany.",
    date: "2025",
    type: "Fellowship",
  },
  {
    id: "ach-2",
    title: "MSCA Postdoctoral Fellowship Proposal – 92%+ Score",
    description: "Marie Skłodowska-Curie Actions (Horizon Europe) postdoctoral fellowship proposal received a 92%+ merit evaluation score.",
    date: "2025",
    type: "Fellowship",
  },
  {
    id: "ach-3",
    title: "Best Paper Award – Bridge between AI and Law @ AAAI 2026",
    description: "Won the Best Paper Award at the Bridge between AI and Law workshop at AAAI 2026.",
    date: "2026",
    type: "Award",
  },
  {
    id: "ach-4",
    title: "AI World Notable Paper Recognition",
    description: "10 Notable AI Research Papers featured by AI World for impactful contributions to AI.",
    date: "2024",
    type: "Recognition",
  },
  {
    id: "ach-5",
    title: "Institute Fellowship for Ph.D. Scholars",
    description: "MHRD fellowship for Ph.D. studies at IIT Kanpur.",
    date: "2017 – 2025",
    type: "Fellowship",
  },
  {
    id: "ach-6",
    title: "Institute Fellowship for M.Tech. Scholars",
    description: "MHRD fellowship for M.Tech. studies at IIEST Shibpur.",
    date: "2015 – 2017",
    type: "Fellowship",
  },
  {
    id: "ach-7",
    title: "Conference Volunteering & Service",
    description: "Volunteered at ACL-2021, ACL-2025, NAACL-2022, NAACL-2025, COLING-2025.",
    date: "2021 – 2025",
    type: "Service",
  },
  {
    id: "ach-8",
    title: "Financial Support – Dubai Future Foundation (DFF)",
    description: "Financial support to attend AAAI-2026 (Singapore).",
    date: "2026",
    type: "Travel Grant",
  },
  {
    id: "ach-9",
    title: "Financial Support – Research-I Foundation",
    description: "Support to attend FIRE-2023, NAACL-2022, ACL-2025, COLING-2025, and NAACL-2025.",
    date: "2022 – 2025",
    type: "Travel Grant",
  },
  {
    id: "ach-10",
    title: "Conference Travel Grants",
    description: "Travel grants from CoDS-COMAD-2019, IndoML-2023, CoDS-COMAD-2020, IndoML-2024, ARCS-2025.",
    date: "2019 – 2025",
    type: "Travel Grant",
  },
  {
    id: "ach-11",
    title: "Reviewer / Program Committee Service",
    description: "Reviewer for ARR (2022–2025), Artificial Intelligence and Law Journal (2024–2025). PC member for BHASHA-2025, SAIL-2021/2022/2023.",
    date: "2021 – 2025",
    type: "Service",
  },
];

export const teaching: TeachingEntry[] = [
  {
    id: "teach-1",
    role: "Teaching Assistant",
    course: "Design for Security",
    institution: "CSE, IIT Kanpur",
    period: "Aug – Nov 2022",
  },
  {
    id: "teach-2",
    role: "Teaching Assistant",
    course: "Data Mining",
    institution: "CSE, IIT Kanpur",
    period: "Jan – Apr 2022",
  },
  {
    id: "teach-3",
    role: "Teaching Assistant",
    course: "Deep Reinforcement Learning",
    institution: "CSE, IIT Kanpur",
    period: "Aug – Nov 2021",
  },
  {
    id: "teach-4",
    role: "Teaching Assistant",
    course: "Statistical NLP",
    institution: "CSE, IIT Kanpur",
    period: "Aug 2020 – Nov 2021",
  },
  {
    id: "teach-5",
    role: "Teaching Assistant",
    course: "Special Topics in NLP",
    institution: "CSE, IIT Kanpur",
    period: "Jan – Apr 2020",
  },
  {
    id: "teach-6",
    role: "Teaching Assistant",
    course: "Game Theory and Mechanism Design",
    institution: "CSE, IIT Kanpur",
    period: "Aug – Nov 2019",
  },
  {
    id: "teach-7",
    role: "Teaching Assistant",
    course: "Introduction to Programming",
    institution: "CSE, IIT Kanpur",
    period: "Jan – Apr 2019",
  },
  {
    id: "teach-8",
    role: "Teaching Assistant",
    course: "Advanced Topics in Algorithms and Data Structures",
    institution: "CSE, IIT Kanpur",
    period: "Aug – Nov 2018",
  },
  {
    id: "teach-9",
    role: "Teaching Assistant",
    course: "Principles of Database Systems",
    institution: "CSE, IIT Kanpur",
    period: "Jan – Apr 2018",
  },
  {
    id: "teach-10",
    role: "Mentor",
    course: "ITEC Programme – NLP & Deep Learning Training",
    institution: "CSE, IIT Kanpur",
    period: "June 2019 – Dec 2019",
    description: "Conducted training on NLP fundamentals and deep learning-based language models for international professionals under the ITEC Programme.",
  },
  {
    id: "teach-11",
    role: "Mentor",
    course: "Bachelors and Masters Student Projects",
    institution: "CSE, IIT Kanpur",
    period: "July 2019 – Aug 2025",
    description: "Mentored B.Tech. and M.Tech. students on various projects, tools, and theses resulting in publications.",
  },
  {
    id: "teach-12",
    role: "Mentor",
    course: "Internship Programme – Precedent Retrieval",
    institution: "CSE, IIT Kanpur",
    period: "July 2021 – Aug 2021",
    description: "Mentored internship on improving FIRE-2017-IRLeD task-2 Precedent Retrieval using Sent2Vec Siamese Networks.",
  },
];

export const researchAreas: ResearchArea[] = [
  {
    id: "ra-1",
    title: "Core AI/ML",
    icon: "brain-circuit",
    description: "Advancing foundational AI and machine learning techniques including model architectures, optimization, and learning paradigms for next-generation intelligent systems.",
    projects: ["proj-2", "proj-5", "proj-6"],
    publications: ["pub-5", "pub-17", "pub-19", "pub-20", "pub-21", "pub-25"],
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    id: "ra-2",
    title: "AI Memory Management",
    icon: "database",
    description: "Developing token-efficient memory systems for large language models that compress conversation history without losing critical context and enable extended reasoning.",
    projects: ["wp-1"],
    publications: [],
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: "ra-3",
    title: "Distributed Training",
    icon: "server",
    description: "Researching scalable distributed training paradigms and efficient model parallelism strategies to train large AI systems across heterogeneous compute clusters.",
    projects: ["wp-6"],
    publications: [],
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    id: "ra-4",
    title: "Test-Time Training",
    icon: "refresh-cw",
    description: "Investigating test-time training and adaptation techniques that enable language models to specialize to unseen domains at inference without expensive fine-tuning.",
    projects: ["wp-5"],
    publications: [],
    gradient: "from-amber-600 to-orange-600",
  },
  {
    id: "ra-5",
    title: "Legal AI",
    icon: "scale",
    description: "Building AI systems for legal judgment prediction, explanation, retrieval, rhetorical role segmentation, and document generation in the Indian and global legal contexts.",
    projects: ["proj-3", "proj-4", "proj-5", "proj-6", "proj-7", "proj-8", "proj-9", "proj-10"],
    publications: ["pub-8", "pub-9", "pub-10", "pub-11", "pub-12", "pub-13", "pub-14", "pub-15", "pub-16", "pub-17", "pub-18", "pub-19", "pub-20", "pub-21"],
    gradient: "from-blue-700 to-indigo-700",
  },
  {
    id: "ra-6",
    title: "Healthcare AI",
    icon: "heart-pulse",
    description: "Creating AI systems for medical dialogue, clinical decision support, predictive modeling, and patient-centric care across multilingual settings.",
    projects: ["proj-1", "proj-11", "proj-12"],
    publications: ["pub-1", "pub-2"],
    gradient: "from-rose-600 to-pink-600",
  },
  {
    id: "ra-7",
    title: "Explainable AI",
    icon: "eye",
    description: "Developing transparent and interpretable AI systems that provide human-understandable reasoning, mechanistic interpretability, and justification for predictions.",
    projects: ["proj-3", "proj-5", "proj-6", "wp-9"],
    publications: ["pub-3", "pub-4", "pub-9", "pub-17", "pub-21"],
    gradient: "from-cyan-600 to-sky-600",
  },
  {
    id: "ra-8",
    title: "Multilingual AI",
    icon: "globe",
    description: "Developing AI technologies that work across Arabic, English, Indic languages, and other multilingual settings with cross-lingual transfer capabilities.",
    projects: ["proj-1", "proj-2", "proj-11", "proj-12"],
    publications: ["pub-1", "pub-2", "pub-14", "pub-30"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: "ra-9",
    title: "LLM Reasoning \u0026 Agents",
    icon: "bot",
    description: "Exploring reasoning capabilities, agentic workflows, tool use, and multi-step problem solving in large language models for complex domain tasks.",
    projects: ["wp-4", "wp-2", "wp-3"],
    publications: ["pub-3", "pub-4", "pub-16", "pub-20"],
    gradient: "from-fuchsia-600 to-purple-600",
  },
  {
    id: "ra-10",
    title: "Evaluation \u0026 Benchmarking",
    icon: "bar-chart-3",
    description: "Designing rigorous evaluation frameworks, benchmarks, and metrics to assess AI system performance, fairness, and reliability across diverse tasks.",
    projects: ["proj-9"],
    publications: ["pub-7", "pub-10", "pub-22", "pub-25", "pub-29", "pub-30"],
    gradient: "from-teal-600 to-cyan-600",
  },
];

export const news = [
  {
    id: "news-1",
    date: "Feb 2026",
    title: "Best Paper Award at AAAI 2026 Bridge between AI and Law",
    description: "Received Best Paper Award for work on legal AI.",
  },
  {
    id: "news-2",
    date: "Nov 2025",
    title: "Invited Talk at COREQ Research Seminar, University of Birmingham Dubai",
    description: "Presented on building responsible and explainable AI systems for society.",
  },
  {
    id: "news-3",
    date: "Aug 2025",
    title: "Started as Research Fellow at University of Birmingham Dubai",
    description: "Leading the KAMAL Health Project on interpretable AI for healthcare.",
  },
  {
    id: "news-4",
    date: "2025",
    title: "Four papers accepted at AACL-IJCNLP, NAACL, and COLING 2025",
    description: "NyayaRAG, TathyaNyaya, LegalSeg, and NyayaAnumana accepted at top venues.",
  },
  {
    id: "news-5",
    date: "2024",
    title: "PredEx published at ACL 2024 Findings",
    description: "Legal Judgment Reimagined: PredEx and the Rise of Intelligent AI Interpretation in Indian Courts.",
  },
  {
    id: "news-6",
    date: "2024",
    title: "Rethinking LJP in Realistic Scenarios published at NLLP 2024",
    description: "Investigated LLM performance in realistic legal judgment prediction settings.",
  },
  {
    id: "news-7",
    date: "2023",
    title: "Nonet achieves 1st place in SemEval-2023 Task 6 (Task-C2)",
    description: "Court Judgment Prediction with Explanation.",
  },
  {
    id: "news-8",
    date: "2021",
    title: "ILDC for CJPE published at ACL-IJCNLP 2021",
    description: "Pioneered the Court Judgment Prediction and Explanation task.",
  },
];
