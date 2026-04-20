import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa6";

export const highlights = [
  { icon: MapPin, text: "Based in Murshidabad, WB" },
  { icon: Briefcase, text: "Open to internships & full-time roles" },
  { icon: GraduationCap, text: "MCA (Computer Science), 2026" },
  { icon: Coffee, text: "Powered by coffee & curiosity" },
];


export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abdulaziz742141@gmail.com",
    href: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=abdulaziz742141@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+916296055723",
    href: "tel:+916296055723",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Murshidabad, WB",
    href: "https://www.google.com/maps/place/Murshidabad,+West+Bengal/@24.2898741,87.6218193,9z/data=!3m1!4b1!4m6!3m5!1s0x39f97dd3a14e8043:0x701509a66edee7ed!8m2!3d24.2290007!4d88.2461183!16s%2Fm%2F026109x?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D",
  },
];

export const socialLinks = [
  { icon: FaGithub, href: "https://github.com/abdulazizdevin", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://linkedin.com/in/abdulazizdev", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://x.com/AbdulAzizDevIn", label: "Twitter" },
];

export const footerSocialLinks = [
  { icon: FaGithub, href: "https://github.com/abdulazizdevin", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/abdulazizdev", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://x.com/AbdulAzizDevIn", label: "Twitter" },
  { icon: Mail, href: "mailto:abdulaziz742141@gmail.com", label: "Email" },
  { icon: FaWhatsapp, href: "https://api.whatsapp.com/send/?phone=%2B916296055723&text&type=phone_number&app_absent=0", label: "Whatsapp" },
];

export const projects = [
  {
    title: "Learning Management System",
    description:
      "Built a full-stack Learning Management System using React.js, Node.js, Express, and MongoDB. Implemented JWT authentication, bcrypt password encryption, and Razorpay payment integration. Optimized API calls using RTK Query for better performance and user experience.",
    image: "/images/LMS-project.png",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux"],
    demoUrl: "https://lms-ovvc.onrender.com/",
    githubUrl: "https://github.com/AbdulAzizDevIn/LMS",
  },
  {
    title: "E-Commerce Platform (Myntra Clone)",
    description:
      "Developed a full-stack e-commerce application with product search, filtering, and sorting. Integrated Razorpay for secure payments and built custom authentication using Node.js and Express. Supports 200+ products with improved product discovery.",
    image: "/images/myntra-image.png",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    demoUrl: "https://myntra-clone-aziz.vercel.app",
    githubUrl: "https://github.com/AbdulAzizDevIn/Myntra-Clone",
  },
  {
    title: "Stock Images Platform",
    description:
      "Created an image search platform using React and Firebase with advanced filtering and multi-resolution downloads. Designed a responsive UI for mobile and desktop, improving usability and user engagement.",
    image: "/images/stock-image.png",
    techStack: ["React.js", "Firebase", "JavaScript", "CSS"],
    demoUrl: "https://stock-image-lyart.vercel.app/",
    githubUrl: "https://github.com/AbdulAzizDevIn/stock-image",
  },
];


export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: Code2 },
      { name: "JavaScript", icon: Terminal },
      { name: "TypeScript", icon: Terminal },
      { name: "Next.js", icon: Globe },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Material UI", icon: Layout },
      { name: "HTML", icon: Globe },
      { name: "CSS", icon: Palette },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Layers },
      { name: "MongoDB", icon: Database },
      { name: "JWT", icon: Cpu },
      { name: "REST APIs", icon: Cloud },
      { name: "Bcrypt.js", icon: Cpu },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
      { name: "Firebase", icon: Cloud },
      { name: "Postman", icon: Cpu },
      { name: "Redux / RTK", icon: Layers },
      { name: "VS Code", icon: Terminal },
      { name: "Shadcn UI", icon: Layout },
    ],
  },
];

export const experiences = [
  {
    type: "education",
    title: "Master of Computer Applications (MCA)",
    company: "Indira Gandhi National Open University",
    period: "2024 - 2026",
    description:
      "Studying core computer science subjects including data structures, algorithms, software engineering, database management systems, and computer networks. Alongside academics, building real-world web applications using modern technologies.",
    technologies: [
      "Data Structures",
      "Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
];