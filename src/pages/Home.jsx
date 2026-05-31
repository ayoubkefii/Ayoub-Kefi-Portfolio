import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown, Download, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";
import ScrollReveal from "../components/ScrollReveal";
import TechStack from "../components/TechStack";
import ResumeDownload from "../components/ResumeDownload";

const Home = () => {
  const { isDark } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [1, 1.1]), {
    stiffness: 100,
    damping: 30,
  });

  const scrollToAbout = () => {
    document
      .getElementById("about-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Hero Section with Enhanced Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-animated"
        />

        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 mesh-gradient opacity-50"></div>

        {/* Particle Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced Floating Elements with 3D Effect */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "120%"]) }}
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-500/30 to-yellow-500/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]) }}
          variants={floatingVariants}
          animate="animate"
          transition={{ duration: 8, delay: 1 }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "180%"]) }}
          variants={floatingVariants}
          animate="animate"
          transition={{ duration: 7, delay: 2 }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-amber-400/30 to-yellow-400/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]) }}
          variants={floatingVariants}
          animate="animate"
          transition={{ duration: 9, delay: 0.5 }}
          className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-full blur-3xl"
        />

        {/* Animated Grid Pattern */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
          className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(212,165,116,0.3)_1px,transparent_0)] bg-[length:50px_50px]"></div>
        </motion.div>

        {/* Content with Parallax */}
        <motion.div
          style={{ y, opacity, scale }}
          className="container-custom section-padding relative z-10">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto">
            {/* Greeting with Sparkle */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-2 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                <Sparkles className="text-amber-400" size={20} />
              </motion.div>
              <p className="text-amber-400 font-medium text-lg">
                Hello, I'm
              </p>
            </motion.div>

            {/* Profile Picture with 3D Effect */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotateY: 10, rotateX: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex justify-center mb-8 perspective-1000">
              <motion.div
                className="relative"
                whileHover={{ rotateY: 10, rotateX: 10 }}
                style={{ transformStyle: "preserve-3d" }}>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur-xl opacity-50 animate-pulse-glow"
                />
                <motion.img
                  src={`${import.meta.env.BASE_URL}ayoub.png`}
                  alt="Ayoub Kefi"
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-amber-500 shadow-2xl object-cover bg-white/10 backdrop-blur-sm"
                  whileHover={{ boxShadow: "0 0 40px rgba(212, 165, 116, 0.6)" }}
                />
              </motion.div>
            </motion.div>

            {/* Name with 3D Gradient Text */}
            <motion.h1
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              <motion.span
                className="text-gradient inline-block"
                whileHover={{ textShadow: "0 0 30px rgba(212, 165, 116, 0.8)" }}>
                Ayoub Kefi
              </motion.span>
            </motion.h1>

            {/* Enhanced Typewriter Animation with Glow */}
            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-3xl font-medium mb-8 text-gray-700 dark:text-gray-300">
              <motion.div
                className="inline-block px-6 py-3 glass-card rounded-2xl">
                <TypeAnimation
                  sequence={[
                    "Full Stack Web Developer",
                    2000,
                    "Problem Solver",
                    2000,
                    "Creative Thinker",
                    2000,
                    "React Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-gradient"
                />
              </motion.div>
            </motion.div>

            {/* Description with Fade */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed glass-card p-6 rounded-2xl">
              I'm a full stack web developer and a computer technician with
              experience in web/mobile development, troubleshooting, hardware,
              and systems. Passionate about building modern apps and solving
              real-world problems.
            </motion.p>

            {/* CTA Buttons with Enhanced Hover */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <ResumeDownload />
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center justify-center gap-2">
                  <span>View My Work</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats with Counter Animation */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              {[
                { number: "5+", label: "Projects" },
                { number: "2+", label: "Years" },
                { number: "100%", label: "Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.15, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="glass-card text-center p-4">
                  <motion.div
                    className="text-3xl font-bold text-gradient-blue mb-1"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}>
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}>
            <ChevronDown
              size={28}
              className="text-gray-600 dark:text-gray-400 hover:text-amber-400 transition-colors"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="container-custom relative z-10">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Tech <span className="text-gradient">Stack</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <TechStack />
          </ScrollReveal>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-section" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="container-custom relative z-10">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                I'm a passionate developer with expertise in modern web
                technologies. I love creating intuitive and engaging user
                experiences that solve real-world problems.
              </p>
              <Link to="/about" className="btn-primary inline-block">
                Learn More About Me
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
