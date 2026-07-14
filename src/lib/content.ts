// Central content store for the Miller Lab site.
// Pulled from WebsiteContent-WM.docx (July 2026 draft). Update freely as copy is finalized.

export const lab = {
  name: "Miller Lab",
  shortName: "Miller Lab",
  tagline: "Accelerating Biomedical Discovery Through AI-Powered Computation",
  missionStatement:
    "The Miller Lab employs advanced computational techniques to accelerate biomedical discoveries through artificial intelligence (AI), molecular simulations (e.g., molecular dynamics and docking), and bioinformatics. We combine machine learning (ML), structural biology, and high-performance computing (HPC) to predict disease mechanisms, identify therapeutic targets, and develop software tools that make sophisticated computational science accessible to researchers in medicine, biology, and chemistry. Our goal is to close the gap between biological data and clinically relevant insights through reproducible, AI-driven research.",
  audienceStatement:
    "The Miller Lab serves as a collaborative computational research hub, building partnerships with investigators worldwide. Our primary audience is faculty and researchers to whom we provide computational expertise that complements their experimental work across disciplines including medicine, pharmacology, neuroscience, cancer biology, chemistry, and biology. By integrating artificial intelligence, molecular simulation, bioinformatics, and high-performance computing into biomedical research, we help investigators generate preliminary data, strengthen grant proposals, and accelerate scientific progress. We also seek collaborations beyond our home institution with external academics, research consortia, and government-funded teams working on interdisciplinary projects in computational biology, drug discovery, precision medicine, and translational science. Additionally, we partner with biotechnology, pharmaceutical, and healthcare organizations interested in advanced computational modeling and AI-driven methods.",
  missionIntro:
    "We combine AI, molecular simulation, and bioinformatics with high-performance computing. The result: sharper predictions about disease mechanisms and therapeutic targets, built on data other labs can reproduce.",
  audienceIntro:
    "We partner with investigators at Loyola and beyond, adding computational firepower to research that would otherwise take years at the bench.",
  // Approved hero copy — see .claude/skills/miller-instrument-theme/SKILL.md
  heroKicker: "A computational biomedical research lab",
  heroHeadline: ["We turn ", "data", " into insight."] as const,
  heroDek:
    "We run AI, molecular simulation, and bioinformatics on serious computing power — so researchers in medicine, biology, and chemistry get real answers, faster.",
  contactEmail: "wamillerlab@gmail.com",
  affiliation: "Department of Medicine · Department of Molecular Pharmacology and Neuroscience",
  // Placeholder — swap in the real GoFundMe campaign URL once it exists.
  donateUrl: "#",
  social: {
    linkedin: "https://linkedin.com/in/whelton-miller-lab-060297279",
    twitter: "https://twitter.com/WAMillerLab",
    youtube: "https://www.youtube.com/@WAMillerLab",
  },
};

// Scannable breakdown of the mission statement — used anywhere the full
// paragraph would otherwise run long (home, about).
export const missionPillars = [
  {
    title: "Predict & identify",
    description: "AI and ML models that predict disease mechanisms and surface therapeutic targets.",
  },
  {
    title: "Simulate & model",
    description: "Molecular dynamics, docking, and structural biology at atomic resolution.",
  },
  {
    title: "Scale with HPC",
    description: "High-performance computing that makes sophisticated computation accessible to any lab.",
  },
  {
    title: "Publish reproducibly",
    description: "Workflows and results built for peer review, reuse, and clinical relevance.",
  },
];

// Scannable breakdown of the audience statement.
export const audienceSegments = [
  {
    title: "Faculty & Researchers",
    description:
      "Computational expertise that complements experimental work in medicine, pharmacology, neuroscience, cancer biology, chemistry, and biology.",
  },
  {
    title: "External Collaborators",
    description:
      "Academic partners, research consortia, and government-funded teams in computational biology, drug discovery, and precision medicine.",
  },
  {
    title: "Industry Partners",
    description:
      "Biotechnology, pharmaceutical, and healthcare organizations applying AI-driven modeling to biomedical challenges.",
  },
];

export const researchAreas = [
  {
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    icon: "BrainCircuit",
    blurb:
      "Machine learning models that predict disease mechanisms and surface therapeutic targets from complex biomedical data.",
  },
  {
    title: "Molecular Simulation",
    slug: "molecular-simulation",
    icon: "Atom",
    blurb:
      "Molecular dynamics and docking simulations that model protein behavior and drug-target interactions at atomic resolution.",
  },
  {
    title: "Computational Biophysics",
    slug: "computational-biophysics",
    icon: "Waves",
    blurb:
      "Structural and biophysical modeling that connects molecular-scale mechanisms to disease-relevant biological outcomes.",
  },
  {
    title: "Drug Discovery",
    slug: "drug-discovery",
    icon: "FlaskConical",
    blurb:
      "AI- and simulation-driven pipelines that accelerate the identification and evaluation of candidate therapeutics.",
  },
  {
    title: "Bioinformatics",
    slug: "bioinformatics",
    icon: "Dna",
    blurb:
      "Reproducible computational pipelines that turn sequencing and structural data into clinically relevant insight.",
  },
] as const;

// Research page "More From The Lab" panels. Sourced from Whelton's CV
// (WMiller-SSOM-CV-Standard_Final.docx, April 2026) rather than fabricated —
// swap for a full publications page once the lab is ready to build one.
export const publicationsSummary = {
  description:
    "Peer-reviewed papers on RNA editing (the ADAR protein family), antimalarial and antileishmanial drug discovery, and viral protein structure — most years since 2020.",
  ncbiUrl: "https://www.ncbi.nlm.nih.gov/myncbi/whelton.miller.1/bibliography/public/",
};

export const ongoingResearch = [
  "RNA-editing mechanisms across the ADAR1, ADAR2, and ADAR3 protein family",
  "Machine-learning models for infectious-disease sequence prediction",
  "Next-generation MRI contrast agents (ParaCEST)",
];

// Headline figures for the homepage impact bar. Counted from Whelton's CV
// (WMiller-SSOM-CV-Standard_Final.docx, prepared April 2026), scoped to his
// time as PI at Loyola (2020–present): 31 peer-reviewed publications + 4
// conference talks delivered at a Loyola venue; 6 disciplines named in the
// lab's own audience statement (medicine, pharmacology, neuroscience,
// cancer biology, chemistry, biology); 7 institutions the CV names as
// active collaborators (Ghana, UASD, Lincoln, Iowa, Kean, Penn, USciences).
export const impactStats = [
  { label: "Publications & talks", value: "35" },
  { label: "Departments supported", value: "6" },
  { label: "Active collaborations", value: "7" },
];

export const consultationSteps = [
  {
    step: "01",
    title: "Submit a consultation request",
    description:
      "Share your scientific question, available data, and research goals to start the conversation.",
  },
  {
    step: "02",
    title: "Initial meeting",
    description:
      "We discuss project objectives, candidate computational strategies, timelines, funding, and expected outcomes.",
  },
  {
    step: "03",
    title: "Tailored project plan",
    description:
      "The lab develops a scope of work, including recommended methods (AI, molecular dynamics, bioinformatics, structural modeling, drug discovery), milestones, deliverables, and estimated costs.",
  },
  {
    step: "04",
    title: "Analysis & milestone check-ins",
    description:
      "Once the scope is approved, computational work begins, with regular updates and opportunities for scientific dialogue along the way.",
  },
  {
    step: "05",
    title: "Delivery & ongoing support",
    description:
      "You receive publication-ready results, workflows, and reports, plus continued support for manuscripts, grant applications, and future research.",
  },
];

export const services = [
  {
    title: "AI-Driven Biomedical Analysis",
    description:
      "Machine learning models built around your dataset to predict disease mechanisms and prioritize therapeutic targets.",
  },
  {
    title: "Molecular Simulation & Docking",
    description:
      "Molecular dynamics and docking studies to characterize protein structure, dynamics, and drug-target interactions.",
  },
  {
    title: "Bioinformatics Pipelines",
    description:
      "Reproducible analysis pipelines for sequencing, structural, and multi-omics data, built for publication and reuse.",
  },
  {
    title: "Grant & Manuscript Support",
    description:
      "Preliminary data generation, methods writing, and computational results packaged to strengthen proposals and papers.",
  },
];

export type Researcher = {
  name: string;
  program: string;
  focus?: string;
  credentials?: string;
  scholarUrl?: string;
};

export const principalInvestigator = {
  name: "Whelton A. Miller III",
  credentials: "PhD",
  title: "Principal Investigator",
  role: [
    "Assistant Professor, Department of Medicine (Primary)",
    "Department of Molecular Pharmacology and Neuroscience",
    "Bioinformatics Program",
    "Faculty Affiliate, Lab for Applied Artificial Intelligence",
  ],
  scholarUrl: "https://scholar.google.com/citations?user=iUpdueEAAAAJ&hl=en",
};

export const graduateResearchers: Researcher[] = [
  {
    name: "Emmanuel Broni",
    program: "IPBS PhD",
    focus: "Estrogen Receptor, RNA Editing, Cancer Biology, Infectious Disease",
    scholarUrl: "https://scholar.google.com/citations?user=gz15nLcAAAAJ&hl=en",
  },
  {
    name: "ChaNyah Wood",
    program: "IPBS PhD",
    focus: "Serotonin Transporter (SERT), Infectious Disease",
  },
  {
    name: "Brendon Dal",
    program: "Bioinformatics (Intern)",
    focus: "Infectious Disease",
  },
  {
    name: "Scarlet Schuth",
    program: "M2, Medicine - STAR Program",
    focus: "RNA Editing, Infectious Disease",
  },
  {
    name: "Brandon Lim",
    program: "M2, Medicine - STAR Program",
    focus: "RNA Editing, Infectious Disease",
  },
];

export const undergraduateResearchers: Researcher[] = [
  {
    name: "Alberto Moreno",
    program: "Biochemistry",
    focus: "RNA Editing, Infectious Disease",
  },
  {
    name: "Jennifer Phyu",
    program: "Biology (Intern)",
    focus: "RNA Editing, Infectious Disease",
  },
  {
    name: "Khushi Khan",
    program: "Biology (Intern)",
    focus: "RNA Editing, Infectious Disease",
  },
];

export const alumni: Researcher[] = [
  {
    name: "Carolyn Ashley",
    credentials: "PhD",
    program: "Postdoctoral Fellow, Karolinska Institutet (DDLS Fellowship)",
    focus: "RNA Editing, Cancer Biology, Infectious Disease",
    scholarUrl: "https://scholar.google.com/citations?user=jYhxyn0AAAAJ&hl=en",
  },
  { name: "Maxwell Pierce", program: "M2, STAR Program", focus: "RNA Editing, Infectious Disease" },
  { name: "Miriam Velazquez", credentials: "MS, MBA", program: "MS/MBA Program (Rotation)", focus: "RNA Editing, Cancer Biology, Infectious Disease" },
  { name: "Sufia Khan", program: "BS (Intern), Loyola University Chicago" },
  { name: "Josephine Nimely", program: "BS (Intern), Lincoln University (PA)" },
  { name: "Cedar Davidson", program: "BS (Intern), Lincoln University (PA)" },
  { name: "Eunice Obi", program: "BS (Intern), Lincoln University (PA)" },
  { name: "J. Chioma Orizu", program: "BS (Intern), Lincoln University (PA)" },
  { name: "Kyndall Wallace", program: "MS/MBA, Loyola University Chicago" },
  { name: "Olivia Seale", program: "MS/MBA (Rotation), Loyola University Chicago" },
  { name: "Emily Krueger", program: "IPBS PhD (Rotation), Loyola University Chicago" },
  { name: "Sana Iqbal", program: "IPBS PhD (Rotation), Loyola University Chicago" },
  { name: "Andrew Striegel", program: "BS (Intern), Notre Dame University" },
  { name: "Okuneye Tunmise", program: "BS (Intern), Lincoln University (PA)" },
  { name: "Mary-Pearl T. Ojukwu", program: "BS (Intern), Lincoln University (PA)" },
  { name: "Kristeen Bebla", program: "Medicine (Intern), Loyola University Chicago" },
  { name: "Saqib Peracha", program: "Medicine (Intern), Loyola University Chicago" },
];

export const faqs = [
  {
    question: "Who can work with the Miller Lab?",
    answer:
      "We primarily support faculty and researchers across medicine, pharmacology, neuroscience, cancer biology, chemistry, and biology, and we welcome collaborations with external academics, research consortia, and biotechnology, pharmaceutical, and healthcare organizations.",
  },
  {
    question: "What does a typical collaboration look like?",
    answer:
      "Most projects start with a short consultation request, followed by a scoping meeting and a tailored project plan built around your data, timeline, and goals.",
  },
  {
    question: "Is there a cost to work with the lab?",
    answer:
      "Rate structures for internal and external collaborators are still being finalized. Reach out and we'll discuss what's feasible for your project and timeline.",
  },
  {
    question: "Can students get involved?",
    answer:
      "Yes. The lab regularly hosts graduate and undergraduate researchers and interns. Contact us about current openings and rotation opportunities.",
  },
  {
    question: "What do we receive at the end of a project?",
    answer:
      "Publication-ready results, documented workflows, and reports, along with ongoing support for manuscript writing and grant applications.",
  },
];
