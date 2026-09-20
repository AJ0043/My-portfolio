// ============================================================
//  Edit ONLY this file to change your portfolio content.
// ============================================================

const ORANGE = "#ff8a3d";
const AMBER = "#ffc857";
const CORAL = "#e5533d";

export const profile = {
  name: "Anvesh Jain",
  eyebrow: "MCA (AI & ML) — Web Developer turned Data Scientist",
  intro:
    "Two years building web applications, an MCA specialized in AI & ML, and now a full pivot into data science — models, pipelines, and the stories hiding inside data.",
  about: [
    "I hold an MCA with a specialization in Artificial Intelligence & Machine Learning, and spent the two years after that working as a web developer across different companies — building and shipping production applications, end to end.",
    "That experience taught me how software actually reaches users, but the part I kept gravitating toward was always the data underneath it. I'm now making a deliberate switch into data science, applying my AI/ML foundation to real problems.",
  ],
  contactBlurb: "Open to data science roles and collaborations — reach out any time.",
};

// A value made only of digits counts up on screen (e.g. "2").
// Each label array item is shown on its own line.
export const stats = [
  { value: "2", label: ["years", "as a web developer"] },
  { value: "MCA", label: ["AI & ML", "specialization"] },
  { value: "2", label: ["companies", "worked across"] },
];

export const skills = [
  {
    name: "Languages & core",
    items: [
      { label: "Python", percent: 90, color: ORANGE },
      { label: "SQL", percent: 75, color: ORANGE },
    ],
  },
  {
    name: "Data analysis",
    items: [
      { label: "NumPy", percent: 95, color: AMBER },
      { label: "Pandas", percent: 82, color: AMBER },
      { label: "Excel", percent: 93, color: AMBER },
    ],
  },
  {
    name: "Visualization",
    items: [
      { label: "Data Visualization", percent: 89, color: CORAL },
      { label: "Tableau", percent: 98, color: CORAL },
    ],
  },
];

// github / demo: paste real links. Leave "" and the button stays hidden.
// demoLabel: text on the second button (default "Live demo").
export const projects = [
  {
    id: 1,
    title: "E-Commerce Price & Product Intelligence",
    description:
      "Scraped product listings for price, rating, reviews, and brand; cleaned and engineered a value-for-money score, then built a Tableau dashboard surfacing top brands, categories, and price-vs-rating patterns.",
    tags: ["Web Scraping", "Pandas", "SQL", "Tableau"],
    color: ORANGE,
    github: "https://github.com/AJ0043", // TODO: replace with the project's repo link
    demo: "https://public.tableau.com", // TODO: replace with your dashboard link
    demoLabel: "Dashboard",
  },
  {
    id: 2,
    title: "Job Market & Salary Analytics",
    description:
      "Scraped job postings for title, salary, experience, and skills; standardized titles and locations, engineered experience and skill-count features, and built a Tableau dashboard on salary trends and remote vs onsite splits.",
    tags: ["Web Scraping", "SQL", "Tableau"],
    color: AMBER,
    github: "https://github.com/AJ0043", // TODO: replace with the project's repo link
    demo: "https://public.tableau.com", // TODO: replace with your dashboard link
    demoLabel: "Dashboard",
  },
  {
    id: 3,
    title: "Healthcare & Hospital Operations Analytics",
    description:
      "Cleaned patient admissions data — demographics, department, billing, length of stay — engineered age bands and cost categories, and built a Tableau dashboard tracking admission trends, costs, and top diagnoses.",
    tags: ["Pandas", "SQL", "Tableau"],
    color: CORAL,
    github: "https://github.com/AJ0043", // TODO: replace with the project's repo link
    demo: "https://public.tableau.com", // TODO: replace with your dashboard link
    demoLabel: "Dashboard",
  },
];

export const experience = [
  {
    id: 1,
    date_range: "Mar 2026 — Present",
    title: "Career Break",
    organization: "Jaipur, Rajasthan, India · 7 mos",
    description:
      "Took a planned break to complete my degree, using the time to strengthen React.js, SQL, and data analysis — the foundation for my move into data science.",
  },
  {
    id: 2,
    date_range: "Aug 2025 — Mar 2026",
    title: "Frontend Web Developer",
    organization: "Kajkarma · Kolkata, West Bengal, India · 8 mos",
    description:
      "Worked with React.js and Next.js building responsive, scalable web applications — reusable UI components, dynamic routing, and API testing with Postman.",
  },
  {
    id: 3,
    date_range: "Jan 2023 — Nov 2023",
    title: "Full-Stack Developer (Internship)",
    organization: "Easy Dots Technologies · Agra, Uttar Pradesh, India · 11 mos",
    description:
      "Full-stack internship covering both front-end and back-end development — my first hands-on production experience.",
  },
];

// Logo files live in  public/logo/  (the "public" folder sits NEXT TO "src", not inside it).
// In paths write  "/logo/FileName.jpg"  — no "public" in front. File names are case-sensitive
// and the extension must match exactly (.jpg / .jpeg / .png / .webp).
// If a file can't be loaded, an orange badge with the "text" letters is shown instead.
export const education = [
  {
    id: 1,
    date_range: "Jun 2026 — Mar 2027",
    title: "Master's Degree Diploma, Data Science & GenAI",
    organization: "Intellipaat School of Technology · affiliated with IIT Roorkee",
    description:
      "Pursuing a master's certification in data science and generative AI, building on my MCA foundation.",
    logos: [
      { src: "/logo/intellipath.jpg", alt: "Intellipaat", text: "IP" },
      // TODO: replace "iit-roorkee.png" with the real file name of your IIT Roorkee logo
      { src: "/logo/iit-roorkee.png", alt: "IIT Roorkee", text: "IITR" },
    ],
  },
  {
    id: 2,
    date_range: "Jun 2024 — Jul 2026",
    title: "MCA, Artificial Intelligence & Machine Learning",
    organization: "Amity University · Grade: 70%",
    description:
      "Postgraduate specialization in AI & ML with a strong focus on Python — Django REST Framework and full-stack development.",
    logos: [{ src: "/logo/Amity.jpg", alt: "Amity University", text: "AU" }],
  },
  {
    id: 3,
    date_range: "Feb 2023 — Mar 2024",
    title: "Post Graduate Diploma in Computer Applications",
    organization: "Maharishi Mahesh Yogi Vedic Vishwavidyalaya · Grade: 70%",
    description: "Foundational coursework in computer science and applications.",
    logos: [
      { src: "/logo/MMYV.jpeg", alt: "Maharishi Mahesh Yogi Vedic Vishwavidyalaya", text: "MMY" },
    ],
  },
  {
    id: 4,
    date_range: "Jun 2019 — Mar 2022",
    title: "Bachelor of Commerce (B.Com)",
    organization: "Parishkar College of Global Excellence, Jaipur · Grade: A",
    description:
      "General business and commerce foundation, before pivoting toward computer science and technology.",
    // TODO: replace "parishkar.png" with the real file name of your Parishkar logo
    logos: [{ src: "/logo/parishkar.png", alt: "Parishkar College", text: "PC" }],
  },
];

export const certifications = [
  { id: 1, title: "Python, MySQL, Data Science and Django", issuer: "EduxGain", issued: "Issued Feb 2022", credential_id: "EGA201901477 · Skills: Python, MySQL +2" },
  { id: 2, title: "Post Graduate Diploma in Computer Application", issuer: "Maharishi Mahesh Yogi Vedic Vishwavidyalaya", issued: "Issued Jan 2023", credential_id: "118210574" },
  { id: 3, title: "PHP Developer Internship", issuer: "Easy Dots Technologies Private Limited", issued: "Issued Dec 2023", credential_id: "EASY/2023-24/05" },
  { id: 4, title: "Rajasthan State Certificate in Information Technology (RS-CIT)", issuer: "Vardhman Mahaveer Open University (VMOU), Kota", issued: "Issued May 2021", credential_id: "0662192" },
];

// Leave url as "" to hide a button.
export const socials = [
  { name: "Email", icon: "email", url: "mailto:anveshjainj@gmail.com" },
  { name: "GitHub", icon: "github", url: "https://github.com/AJ0043" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/anvesh-jain-22875b264/" },
  { name: "Kaggle", icon: "kaggle", url: "https://www.kaggle.com/anveshjainjain" },
];