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
    href: "#",
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
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "/images/p1.jpg",
    techStack: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
    image: "/images/p2.jpg",
    techStack: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI Content Generator",
    description:
      "GPT-powered content creation platform for marketers with templates and workflow automation.",
    image: "/images/p3.jpg",
    techStack: ["React", "Python", "OpenAI", "FastAPI"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Real Estate Platform",
    description:
      "Property listing platform with virtual tours, mortgage calculator, and agent booking system.",
    image: "/images/p4.jpg",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Maps API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Fitness Tracker",
    description:
      "Cross-platform mobile app for workout tracking, nutrition logging, and progress analytics.",
    image: "/images/p5.jpg",
    techStack: ["React Native", "Firebase", "Node.js", "Charts"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Learning Management System",
    description:
      "Educational platform with video streaming, quizzes, progress tracking, and certificates.",
    image: "/images/p6.jpg",
    techStack: ["Next.js", "Prisma", "AWS S3", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Terminal },
      { name: "Tailwind CSS", icon: Palette },
      { name: "React Native", icon: Smartphone },
      { name: "Vue.js", icon: Layout },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express", icon: Layers },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "GraphQL", icon: Cpu },
      { name: "REST APIs", icon: Cloud },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "Docker", icon: Server },
      { name: "AWS", icon: Cloud },
      { name: "Linux", icon: Terminal },
      { name: "Figma", icon: Palette },
      { name: "CI/CD", icon: Cpu },
    ],
  },
];