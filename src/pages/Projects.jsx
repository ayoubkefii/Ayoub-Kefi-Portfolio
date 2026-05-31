import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Palette,
  Smartphone,
  Star,
  Calendar,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AI SaaS Platform",
      description:
        "A full-stack AI-powered productivity platform featuring intelligent chat with streaming responses, PDF document analysis with Q&A, Kanban-style task management with drag-and-drop, and real-time analytics dashboard. Built with React, TypeScript, Node.js, and PostgreSQL, integrating Groq AI for natural language processing.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
      category: "fullstack",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma ORM",
        "Groq AI",
        "Tailwind CSS",
        "Framer Motion",
        "Recharts",
      ],
      featured: true,
      rating: 5,
      date: "2026",
      githubUrl: "https://github.com/ayoubkefii/ai-saas-platform",
      liveUrl: "https://frontend-blush-one-30.vercel.app",
    },
    {
      id: 2,
      title: "Ticketing System",
      description:
        "A comprehensive ticketing management system built with Laravel 11, featuring role-based authentication (demandeur, agent, admin), real-time notifications using Laravel WebSockets, and full CRUD operations for tickets and stock management.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      category: "web",
      technologies: [
        "Laravel 11",
        "PHP",
        "MySQL",
        "Blade",
        "TailwindCSS",
        "Laravel WebSockets",
        "Real-time Notifications",
      ],
      featured: true,
      rating: 5,
      date: "2025",
      githubUrl: "https://github.com/ayoubkefii/ticketing-system",
    },
    {
      id: 3,
      title: "Task Manager",
      description:
        "A comprehensive task management application built with Angular and LoopBack for efficient project organization and team collaboration.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["Angular", "LoopBack", "TypeScript", "Node.js"],
      featured: true,
      rating: 5,
      date: "2025",
      githubUrl: "https://github.com/ayoubkefii/task-manager",
    },
    {
      id: 4,
      title: "Conference Manager",
      description:
        "A Symfony-based conference management system for organizing events, managing attendees, and coordinating schedules.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["Symfony", "PHP", "MySQL", "Twig"],
      featured: true,
      rating: 5,
      date: "2025",
      githubUrl: "https://github.com/ayoubkefii/conference-manager",
    },
    {
      id: 5,
      title: "E-Learning Platform",
      description:
        "A comprehensive e-learning platform built with Symfony framework for course management and student progress tracking.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["Symfony", "PHP", "MySQL", "Bootstrap"],
      featured: false,
      rating: 5,
      date: "2025",
      githubUrl: "https://github.com/ayoubkefii/e-learning-platform",
    },
    {
      id: 6,
      title: "LearnUp",
      description:
        "A PHP native e-learning application with user authentication, course management, and interactive learning features.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["PHP", "MySQL", "JavaScript", "CSS"],
      featured: false,
      rating: 4,
      date: "2025",
      githubUrl: "https://github.com/ayoubkefii/learnup",
    },
    {
      id: 7,
      title: "Camping Web App",
      description:
        "A Symfony-based web app for renting camping gear, suggesting materials, and organizing events.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["Symfony", "PHP", "MySQL"],
      featured: false,
      rating: 5,
      date: "2023",
      githubUrl: "https://github.com/ayoubkefii/camping-web-app",
    },
    {
      id: 8,
      title: "FlutterLearn",
      description:
        "A mobile e-learning app built with Flutter and a PHP/MySQL backend (REST API, JWT auth).",
      image:
        "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&h=300&fit=crop",
      category: "mobile",
      technologies: ["Flutter", "PHP", "MySQL", "REST API", "JWT"],
      featured: false,
      rating: 5,
      date: "2024",
      githubUrl: "https://github.com/ayoubkefii/e_learning-",
    },
    {
      id: 9,
      title: "Recipe Book App",
      description:
        "A full-stack Angular + LoopBack app with recipe listing, filtering, and favorites.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["Angular", "LoopBack", "TypeScript", "Node.js"],
      featured: false,
      rating: 4,
      date: "2023",
      githubUrl: "https://github.com/ayoubkefii/recipe-book-app",
    },
    {
      id: 10,
      title: "Portfolio Website",
      description:
        "My personal portfolio built with React, Tailwind, and Framer Motion.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      featured: false,
      rating: 5,
      date: "2024",
      githubUrl: "https://github.com/ayoubkefii/Ayoub-Kefi-Portfolio",
    },
    {
      id: 11,
      title: "E-Commerce Platform",
      description:
        "A React/Node.js/MySQL app with authentication and product management.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["React", "Node.js", "MySQL", "JWT"],
      featured: false,
      rating: 5,
      date: "2024",
      githubUrl: "https://github.com/ayoubkefii/E-Commerce-Platform",
    },
    {
      id: 12,
      title: "PhonestoreRym",
      description:
        "A phone store web application for browsing and purchasing mobile devices.",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["JavaScript", "HTML", "CSS"],
      featured: false,
      rating: 4,
      date: "2025",
      githubUrl: "https://github.com/ayoubkefii/PhonestoreRym",
      liveUrl: "https://rym-gsm-store.netlify.app/",
    },
    {
      id: 13,
      title: "4mediagency Website",
      description:
        "Premium digital marketing agency website showcasing services and portfolio.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      featured: true,
      rating: 5,
      date: "2025",
      githubUrl: "https://github.com/ayoubkefii/4mediagency-website",
      liveUrl: "https://4mediagency.netlify.app/",
    },
    {
      id: 14,
      title: "Task Manager Laravel",
      description:
        "A Laravel-based task management application with full CRUD operations.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["Laravel", "PHP", "MySQL", "Blade"],
      featured: false,
      rating: 4,
      date: "2025",
      githubUrl: "https://github.com/ayoubkefii/task_manager_laravel",
    },
    {
      id: 15,
      title: "ChallengeLounge",
      description:
        "A challenge-based platform for competitive coding and problem-solving.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["JavaScript", "HTML", "CSS"],
      featured: false,
      rating: 4,
      date: "2025",
      githubUrl: "https://github.com/ayoubkefii/ChallengeLounge",
      liveUrl: "https://challenge-lounge.netlify.app/",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: Eye, count: projects.length },
    {
      id: "web",
      label: "Web Apps",
      icon: Code,
      count: projects.filter((p) => p.category === "web").length,
    },
    {
      id: "mobile",
      label: "Mobile Apps",
      icon: Smartphone,
      count: projects.filter((p) => p.category === "mobile").length,
    },
    {
      id: "design",
      label: "UI/UX Design",
      icon: Palette,
      count: projects.filter((p) => p.category === "design").length,
    },
  ];

  const filteredProjects = projects.filter((project) =>
    activeFilter === "all" ? true : project.category === activeFilter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="container-custom relative z-10">
          <ScrollReveal direction="up" delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                My <span className="text-gradient">Projects</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Here are some of the projects I've worked on. Each one
                represents a unique challenge and an opportunity to create
                something meaningful.
              </p>
            </motion.div>
          </ScrollReveal>

          {/* Enhanced Filter Buttons */}
          <ScrollReveal direction="up" delay={0.3}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`group relative flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-lg shadow-amber-500/25"
                      : "glass-card text-gray-300 hover:bg-white/10"
                  }`}>
                  <filter.icon
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium">{filter.label}</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold ${
                      activeFilter === filter.id ? "bg-white/20" : "bg-white/10"
                    }`}>
                    {filter.count}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </ScrollReveal>

          {/* Enhanced Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <ScrollReveal
                  key={project.id}
                  direction="up"
                  delay={0.1 * index}>
                  <motion.div
                    variants={itemVariants}
                    layout
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      rotateX: 5,
                      rotateY: 5,
                      transition: { duration: 0.3 },
                    }}
                    className="group relative perspective-1000">
                    <motion.div
                      whileHover={{ rotateX: 5, rotateY: 5 }}
                      style={{ transformStyle: "preserve-3d" }}
                      className="glass-card rounded-2xl overflow-hidden transform transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-500/30">
                      {/* Project Image with Enhanced Hover */}
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Featured Badge */}
                        {project.featured && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                            <Star size={14} />
                            <span>Featured</span>
                          </motion.div>
                        )}

                        {/* Rating */}
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm flex items-center space-x-1">
                          <Star
                            size={14}
                            className="text-yellow-400 fill-current"
                          />
                          <span>{project.rating}</span>
                        </div>

                        {/* Action Buttons - Always Visible */}
                        <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 bg-gradient-to-r from-amber-600 to-yellow-600 backdrop-blur-sm rounded-full hover:from-amber-500 hover:to-yellow-500 transition-all border border-white/20 shadow-lg">
                              <ExternalLink size={16} className="text-white" />
                            </motion.a>
                          )}
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-gradient-to-r from-amber-600 to-yellow-600 backdrop-blur-sm rounded-full hover:from-amber-500 hover:to-yellow-500 transition-all border border-white/20 shadow-lg">
                            <Github size={16} className="text-white" />
                          </motion.a>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center space-x-1 text-gray-400 text-sm">
                            <Calendar size={14} />
                            <span>{project.date}</span>
                          </div>
                        </div>

                        <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {/* Technologies with Enhanced Styling */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-amber-600/20 text-amber-400 rounded-full text-sm font-medium border border-amber-600/30 hover:bg-amber-600/30 transition-colors">
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        {/* Private projects: no Live Demo or Code buttons */}
                      </div>
                    </motion.div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Enhanced Empty State */}
          <AnimatePresence>
            {filteredProjects.length === 0 && (
              <ScrollReveal direction="up" delay={0.2}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="text-center py-16">
                  <div className="text-8xl mb-6">🔍</div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                    No projects found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Try selecting a different category
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter("all")}
                    className="btn-primary">
                    View All Projects
                  </motion.button>
                </motion.div>
              </ScrollReveal>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Projects;
