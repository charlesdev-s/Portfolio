// Shared portfolio data for the Brutalist Mono design.
// Prefix public-asset paths with Vite's base URL so they resolve both at the
// site root ("/") and under a project-page sub-path (e.g. "/Portfolio/").
const B = import.meta.env.BASE_URL // always ends with "/"
const asset = (p) => `${B}${p.replace(/^\//, '')}`

export const PORTFOLIO = {
  name: "Charles Richard Gamido",
  initials: "CRG",
  role: "Full-stack & Mobile Developer",
  subroles: ["Full-stack Developer", "Mobile Engineer", "Data Analyst"],
  location: "Baliuag City, Bulacan · Philippines",
  email: "charlesrg31@gmail.com",
  emailAlt: "charlesrg311@outlook.com",
  phone: "+63 962 433 2041",
  github: "charlesdev-s",
  githubUrl: "https://github.com/charlesdev-s",
  linkedin: "Charles Richard Gamido",
  linkedinUrl: "https://www.linkedin.com/in/charles-richard-gamido-b69503347/",
  upwork: "Charles R. G.",
  upworkUrl: "https://www.upwork.com/freelancers/~0109a40a0503b7e629",
  available: true,

  headshot: asset("charles-photo.jpg"),
  resume: asset("Charles-Richard-Gamido-Resume.pdf"),

  tagline:
    "I build end-to-end mobile and web products — from AI-driven learning apps to AR campus navigation — grounded in a math and data background.",

  stats: [
    { value: "4+", label: "Shipped projects" },
    { value: "10+", label: "Languages & tools" },
    { value: "3", label: "Professional roles" },
    { value: "1.5y", label: "Leading teams" },
  ],

  education: [
    { degree: "B.S. Mathematics (Computer Science)", school: "Bulacan State University", year: "Jun 2026", note: "Thesis: AR campus navigation app (team of 5)" },
    { degree: "Senior High — STEM strand", school: "Marian College of Baliuag", year: "Jun 2022" },
  ],

  skills: {
    "Languages":   [["TypeScript", 88], ["Python", 85], ["C#", 80], ["Java", 72], ["C / C++", 70], ["Node.js", 75]],
    "Mobile & AR": [["React Native", 88], ["Unity", 75], ["ARCore / ARKit", 70], ["Expo", 80]],
    "Backend & Data": [["Supabase", 82], ["Zustand", 85], ["R / Jamovi", 78], ["GLM / Regression", 80], ["MATLAB", 65]],
    "Tooling & Design": [["Git", 88], ["Photoshop", 80], ["Illustrator", 75], ["LaTeX", 78], ["Excel (advanced)", 90]],
  },

  projects: [
    {
      id: "nichi",
      name: "Nichi",
      tag: "Featured",
      period: "Dec 2025 — Mar 2026",
      role: "Solo · Full-stack mobile",
      headline: "AI-powered Japanese learning, end-to-end",
      summary: "A cross-platform mobile app that pairs an AI tutor (Gemini) with speech-to-text pronunciation scoring and a JLPT-aligned (N5→N1) gamified SRS system.",
      problem: "Most language apps drill rote vocab. Learners stall the moment they need real conversation — and most beginners never practise speaking at all.",
      approach: "Built a React Native + TypeScript app on Supabase. Onboarding adapts the curriculum to goal, level and daily commitment. An AI Sensei handles freeform conversation; Voice Practice scores pronunciation with confidence intervals; spaced-repetition flashcards keep retention.",
      outcomes: [
        "Adaptive onboarding flow with 4 personalisation axes",
        "11 conversation topics, 5 quick-practice modes",
        "JLPT N5–N1 ladder with XP, streaks and milestones",
        "Offline-friendly vocab review with audio synthesis",
      ],
      tech: ["React Native", "TypeScript", "Gemini API", "Supabase", "Zustand", "Expo"],
      shots: [
        { src: asset("assets/nichi/01-splash.png"), cap: "Splash" },
        { src: asset("assets/nichi/10-home.png"),  cap: "Home" },
        { src: asset("assets/nichi/15-sensei.png"), cap: "Sensei AI" },
        { src: asset("assets/nichi/20-voice2.png"), cap: "Voice practice" },
        { src: asset("assets/nichi/14-vocab.png"), cap: "Vocabulary" },
        { src: asset("assets/nichi/11-flashcard1.png"), cap: "SRS card" },
        { src: asset("assets/nichi/03-onboarding-level.png"), cap: "Level select" },
        { src: asset("assets/nichi/16-progress.png"), cap: "Progress" },
      ],
    },
    {
      id: "around",
      name: "ARound BulSU",
      tag: "Thesis · Ongoing",
      period: "2025 — Present",
      role: "Team of 5 · Mobile AR",
      headline: "Real-time AR wayfinding for a 40-building campus",
      summary: "Mobile AR navigation app for Bulacan State University — building directory, indoor/outdoor pathfinding, and a campus-wide emergency response channel.",
      problem: "BulSU has dozens of named buildings spread across a dense campus. First-year students, transferees and visitors regularly miss class or appointments because there is no live map.",
      approach: "Unity + ARCore/ARKit pipeline. We model every building as a POI with metadata (department, contacts, evac route). 2D map for overview, AR overlay for last-mile, and a moderated emergency channel that can broadcast fire/flood/quake alerts with one-tap evacuate.",
      outcomes: [
        "40+ campus buildings mapped with metadata",
        "Live 2D map with category-filtered POIs",
        "AR wayfinding with on-screen direction cues",
        "Emergency broadcast with evacuate / acknowledge / call",
      ],
      tech: ["Unity", "C#", "ARCore", "ARKit", "Mapbox"],
      shots: [
        { src: asset("assets/around/01-splash.jpg"), cap: "Launch" },
        { src: asset("assets/around/02-map.jpg"), cap: "Live map" },
        { src: asset("assets/around/03-emergency.jpg"), cap: "Emergency alert" },
      ],
    },
  ],

  experience: [
    {
      role: "Virtual Assistant",
      org: "The Sales Space (Daniel Kuye)",
      where: "Remote · United Kingdom",
      period: "Mar 2026 — Apr 2026",
      bullets: [
        "Ran daily Discord community ops — student engagement, real-time support, escalation triage.",
        "Built and maintained CRM trackers and student-progress spreadsheets with daily updates.",
        "Executed outbound DM campaigns to warm leads; coordinated attendance and time-sensitive requests with the Head Coach.",
      ],
    },
    {
      role: "Admin Office Intern",
      org: "TESDA Regional Training Center Central Luzon",
      where: "Guiguinto, Bulacan",
      period: "Jun 2025 — Jul 2025",
      bullets: [
        "Digitised and reorganised institutional filing systems; encoded financial records in Excel.",
        "Co-authored employment-outcome research on 95 Dressmaking NC II graduates and presented findings to leadership.",
        "Produced multimedia content (AVP, newsletters) for institutional programs.",
      ],
    },
    {
      role: "Non-Voice Call Center Agent",
      org: "Customer Support (Hybrid)",
      where: "Bustos, Bulacan",
      period: "Jul 2022 — Jan 2023",
      bullets: [
        "Handled 200–300 daily tickets via chat and email with high resolution and QA scores.",
        "Owned data entry and issue escalation; maintained accuracy under volume.",
      ],
    },
  ],

  leadership: [
    "Lead developer & project manager — ARound BulSU thesis (team of 5)",
    "Community moderator — Discord servers (1k+ members)",
  ],
};

export default PORTFOLIO;
