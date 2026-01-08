
import { Experience, Certification, Skill } from './types';

export const PERSONAL_INFO = {
  name: "Odessa Amparado",
  title: "Outage Management Specialist",
  location: "Cebu City, Philippines",
  email: "odessa.cabanog@gmail.com",
  phone: "+63 991 218 3434",
  summary: "Results-driven professional with 16+ years of combined expertise in technical support and bugs/incident management. Skilled in managing bugs, incidents, and Change processes, ensuring timely resolutions and quality customer experiences. Proficient in prioritization, cross-team collaboration, and meeting SLA commitments.",
  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "University of Cebu",
    years: "2003 - 2007"
  }
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Outage Management Specialist",
    company: "IONOS Philippines Inc.",
    period: "April 2018 – January 2025",
    description: "End-to-end responsibility for external and internal customer communication and for activities related to incidents, bugs, IT-Ops ticket and Change lifecycle management.",
    highlights: [
      "Main contact for Customer Care worldwide for bug/incident escalations",
      "Control of proactive and reactive communication toward stakeholders",
      "Ensuring required service level for bugs and incidents are met",
      "Information management among all interfaces including social media and IVR"
    ]
  },
  {
    role: "Bugs Specialist",
    company: "IONOS Philippines Inc.",
    period: "February 2016 – April 2018",
    description: "In charge of identification and request for creation of bug reports for all IONOS products. Responsible for disseminating technical and procedural knowledge.",
    highlights: [
      "Overall owner of all identified bugs in the product ecosystem",
      "Maintained online FAQ and knowledge-based articles",
      "Generated weekly and monthly performance reports for bug tracking",
      "Conducted technical trainings on new products and features"
    ]
  },
  {
    role: "eShop Specialist",
    company: "IONOS Philippines Inc.",
    period: "February 2012 – February 2016",
    description: "Providing advanced support and updates on e-Commerce (eShop) products. Responsible for training new support agents.",
    highlights: [
      "Worked closely with product managers for future development projects",
      "Main point of contact for e-Commerce technical concerns",
      "Handled technical training about advanced configurations",
      "Backup 2nd level support for the entire operations floor"
    ]
  },
  {
    role: "Subject Matter Expert",
    company: "IONOS Philippines Inc.",
    period: "October 2010 – February 2012",
    description: "In-charge of improving team performance through technical knowledge dissemination and continuous coaching.",
    highlights: [
      "Handled escalated calls and emails from 1st level agents",
      "Assisted 1st level agents with complex technical difficulties",
      "Acted as a multiplier of information and provider of procedural updates",
      "Conducted shift debriefings on common technical errors"
    ]
  },
  {
    role: "Technical Support Representative",
    company: "IONOS Philippines Inc.",
    period: "January 2008 – October 2010",
    description: "Responsible for resolving technical problems for IONOS customers via phone and email.",
    highlights: [
      "Delivered premium customer service and technical solutions",
      "Troubleshot and analyzed customer concerns effectively",
      "Interacted with multiple departments to resolve complex issues",
      "Consistently met and exceeded customer satisfaction goals"
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "Analytical & Problem-Solving", category: "Professional" },
  { name: "Incident & Bug Management", category: "Technical" },
  { name: "Change Lifecycle Management", category: "Technical" },
  { name: "Customer Service Excellence", category: "Soft" },
  { name: "Leadership & Mentoring", category: "Soft" },
  { name: "Jira (Ticket Management)", category: "Technical" },
  { name: "SLA Commitment", category: "Professional" },
  { name: "Escalation Handling", category: "Professional" },
  { name: "Root Cause Analysis", category: "Technical" },
  { name: "eCommerce (eShop) Support", category: "Technical" }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "ITIL 4 Foundation",
    issuer: "PeopleCert",
    date: "August 2019",
    description: "Certified in ITIL with a strong focus on incident and change management processes."
  },
  {
    title: "ITIL 4 Create Deliver and Support",
    issuer: "PeopleCert",
    date: "August 2022",
    description: "Knowledge of service management and value stream integration."
  },
  {
    title: "NIT Training - Near Hire Training",
    issuer: "Accenture / NIT",
    date: "Sept 2025 - Present",
    description: "Intensive 6-month program providing foundational IT skills."
  },
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    date: "November 2025",
    description: "Data cleaning, analysis, visualization, and industry insights."
  },
  {
    title: "Intro to ChatGPT and Generative AI",
    issuer: "Udemy Business",
    date: "November 2025",
    description: "Foundational knowledge of GenAI concepts and automation."
  },
  {
    title: "Foundations of UX Design",
    issuer: "Coursera",
    date: "December 2025",
    description: "User-centered design principles and best practices."
  }
];
