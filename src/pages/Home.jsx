import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown, Download, ArrowRight } from "lucide-react";
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
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

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
        staggerChildren: 0.2,
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
    <div className="min-h-screen" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background Layers */}
        <motion.div
          style={{ y }}
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
              : "bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100"
          }`}
        />

        {/* Floating Elements with Parallax */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]) }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "150%"]) }}
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"
        />

        {/* Background Pattern with Parallax */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "25%"]) }}
          className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
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
            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-blue-600 dark:text-blue-400 font-medium mb-4">
              Hello, I'm
            </motion.p>

            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex justify-center mb-6">
              <img
                src={`${import.meta.env.BASE_URL}ayoub.JPG`}
                alt="Ayoub Kefi"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 shadow-lg object-cover bg-white dark:bg-slate-800"
                style={{ objectFit: "cover" }}
              />
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="text-gradient">Ayoub Kefi</span>
            </motion.h1>

            {/* Typewriter Animation */}
            <motion.div
              variants={itemVariants}
              className="text-2xl md:text-3xl font-medium mb-8 text-gray-600 dark:text-gray-300">
              <TypeAnimation
                sequence={[
                  "Junior Web Developer & Computer Technician",
                  2000,
                  "Problem Solver",
                  2000,
                  "Creative Thinker",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-600 dark:text-blue-400"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm a junior web developer and a computer technician with
              experience in web/mobile development, troubleshooting, hardware,
              and systems. Passionate about building modern apps and solving
              real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center">
              <ResumeDownload />
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary">
                  <span>View My Work</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
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
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}>
          <ChevronDown
            size={24}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          />
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding">
        <div className="container-custom">
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
      <section id="about-section" className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                I'm a passionate developer with expertise in modern web
                technologies. I love creating intuitive and engaging user
                experiences that solve real-world problems.
              </p>
              <Link to="/about" className="btn-primary">
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
