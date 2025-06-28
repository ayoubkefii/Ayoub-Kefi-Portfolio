import { motion } from "framer-motion";
import { Code, Palette, Database, Smartphone, Globe, Zap } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const About = () => {
  const skills = [
    { name: "React", icon: Code, level: 90 },
    { name: "Angular", icon: Code, level: 85 },
    { name: "Flutter", icon: Code, level: 80 },
    { name: "HTML", icon: Code, level: 90 },
    { name: "CSS", icon: Code, level: 90 },
    { name: "JavaScript", icon: Code, level: 85 },
    { name: "TypeScript", icon: Code, level: 80 },
    { name: "Tailwind CSS", icon: Palette, level: 85 },
    { name: "Framer Motion", icon: Palette, level: 80 },
    { name: "PHP", icon: Code, level: 80 },
    { name: "Symfony", icon: Code, level: 75 },
    { name: "Node.js", icon: Code, level: 80 },
    { name: "Express.js", icon: Code, level: 75 },
    { name: "LoopBack", icon: Code, level: 75 },
    { name: "MySQL", icon: Database, level: 80 },
    { name: "MongoDB", icon: Database, level: 75 },
    { name: "JWT Auth", icon: Zap, level: 80 },
    { name: "REST APIs", icon: Zap, level: 85 },
    { name: "Firebase", icon: Database, level: 70 },
    { name: "Git/GitHub", icon: Globe, level: 85 },
    { name: "Vite", icon: Globe, level: 80 },
    { name: "VS Code", icon: Globe, level: 90 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up" delay={0.2}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center mb-16">
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                About <span className="text-gradient">Me</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Passionate about creating digital experiences that make a
                difference
              </motion.p>
            </motion.div>
          </ScrollReveal>

          {/* Profile Picture in About */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex justify-center mb-6">
            <img
              src={`${import.meta.env.BASE_URL}ayoub.JPG`}
              alt="Ayoub Kefi"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 shadow-lg object-cover bg-white dark:bg-slate-800"
              style={{ objectFit: "cover" }}
            />
          </motion.div>

          {/* Personal Info */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <ScrollReveal direction="left" delay={0.3}>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Who I Am
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  I'm a junior web developer and a computer technician with
                  solid technical skills in troubleshooting, hardware, and
                  systems. I have experience building modern web and mobile
                  applications using a variety of technologies. I'm passionate
                  about learning, problem-solving, and delivering high-quality
                  solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  I believe that design is about more than just making things
                  look pretty – it's about solving problems and creating
                  intuitive, enjoyable experiences for users.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                    <Globe size={20} />
                    <span>Remote Work</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                    <Zap size={20} />
                    <span>Fast Delivery</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-effect rounded-2xl p-8">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Name:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      Ayoub Kefi
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Email:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      ayoubelkefi@gmail.com
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Location:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      Nabeul, TN
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Experience:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      2+ Years
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Availability:
                    </span>
                    <span className="font-medium text-green-600 dark:text-green-400">
                      Available
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-white/5 dark:bg-black/5">
        <div className="container-custom">
          <ScrollReveal direction="up" delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                My <span className="text-gradient">Skills</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                I've worked with a variety of technologies to create amazing
                digital experiences
              </p>
            </motion.div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill.name} direction="up" delay={0.1 * index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <skill.icon
                      size={24}
                      className="text-blue-600 dark:text-blue-400"
                    />
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                    />
                  </div>
                  <div className="text-right mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal direction="up" delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Work <span className="text-gradient">Experience</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                My professional journey in web development, IT, and technical
                support
              </p>
            </motion.div>
          </ScrollReveal>

          {/* Modern Timeline/Experience Cards */}
          <div className="space-y-8">
            {/* Junior Web Developer (Training & Projects) */}
            <ScrollReveal direction="left" delay={0.1}>
              <motion.div className="glass-effect rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <span className="text-blue-600 dark:text-blue-400 text-3xl mr-4">
                    🧑‍💻
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Junior Web Developer (Training & Projects)
                    </h3>
                    <div className="text-blue-600 dark:text-blue-400 font-medium">
                      Tunisie Telecom – Web Developer Training
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      📍 Tunisia — 2024
                    </div>
                  </div>
                </div>
                <ul className="list-disc ml-10 text-gray-600 dark:text-gray-400 text-sm space-y-1 mt-2 md:mt-0">
                  <li>Developed web pages using HTML, CSS, and JavaScript</li>
                  <li>Built responsive layouts and functional web forms</li>
                  <li>Connected frontend with backend using PHP and MySQL</li>
                  <li>
                    Practiced real-world scenarios for user input, form
                    handling, and data storage
                  </li>
                </ul>
              </motion.div>
            </ScrollReveal>

            {/* Academic & Freelance Projects */}
            <ScrollReveal direction="right" delay={0.2}>
              <motion.div className="glass-effect rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <span className="text-green-600 dark:text-green-400 text-3xl mr-4">
                    💡
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Academic & Freelance Projects
                    </h3>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      2023–Present
                    </div>
                  </div>
                </div>
                <ul className="list-disc ml-10 text-gray-600 dark:text-gray-400 text-sm space-y-1 mt-2 md:mt-0">
                  <li>
                    Created full-stack applications using Symfony, Angular,
                    Flutter, and LoopBack
                  </li>
                  <li>
                    Developed an e-learning mobile app (SUP4 DEV – FlutterLearn)
                    using Flutter + PHP/MySQL
                  </li>
                  <li>
                    Built a camping rental website with Symfony (equipment,
                    events, suggestions)
                  </li>
                  <li>
                    Developed a recipe book app (Angular + LoopBack) with
                    favorites and filtering
                  </li>
                  <li>
                    Designed and deployed this portfolio using React, Tailwind,
                    Framer Motion
                  </li>
                </ul>
              </motion.div>
            </ScrollReveal>

            {/* Computer Maintenance Technician */}
            <ScrollReveal direction="left" delay={0.3}>
              <motion.div className="glass-effect rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <span className="text-yellow-500 dark:text-yellow-400 text-3xl mr-4">
                    🔧
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Computer Maintenance Technician
                    </h3>
                    <div className="text-blue-600 dark:text-blue-400 font-medium">
                      STE SEF INFO — 2022–2023
                      <br />
                      STE HI TECH EXPRESS — 2023
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      📍 Tunisia
                    </div>
                  </div>
                </div>
                <ul className="list-disc ml-10 text-gray-600 dark:text-gray-400 text-sm space-y-1 mt-2 md:mt-0">
                  <li>Diagnosed hardware and software faults</li>
                  <li>
                    Repaired and maintained desktops, laptops, and peripherals
                  </li>
                  <li>
                    Installed operating systems, drivers, and antivirus/security
                    tools
                  </li>
                  <li>
                    Provided technical support and regular system maintenance
                  </li>
                </ul>
              </motion.div>
            </ScrollReveal>

            {/* Network Technician (Training) */}
            <ScrollReveal direction="right" delay={0.4}>
              <motion.div className="glass-effect rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <span className="text-indigo-500 dark:text-indigo-400 text-3xl mr-4">
                    🌐
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Network Technician (Training)
                    </h3>
                    <div className="text-blue-600 dark:text-blue-400 font-medium">
                      Tunisie Telecom — 2022
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      📍 Tunisia
                    </div>
                  </div>
                </div>
                <ul className="list-disc ml-10 text-gray-600 dark:text-gray-400 text-sm space-y-1 mt-2 md:mt-0">
                  <li>Managed and maintained local network infrastructures</li>
                  <li>
                    Conducted network performance analysis and troubleshooting
                  </li>
                  <li>
                    Provided technical support to users and ensured uptime
                  </li>
                </ul>
              </motion.div>
            </ScrollReveal>

            {/* Junior Web Developer (Freelance & Academic) */}
            <ScrollReveal direction="left" delay={0.5}>
              <motion.div className="glass-effect rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <span className="text-blue-500 dark:text-blue-400 text-3xl mr-4">
                    🖥️
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Junior Web Developer
                    </h3>
                    <div className="text-blue-600 dark:text-blue-400 font-medium">
                      Freelance & Academic Projects
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      Remote / Tunisia — Jan 2023 – Present
                    </div>
                  </div>
                </div>
                <ul className="list-disc ml-10 text-gray-600 dark:text-gray-400 text-sm space-y-1 mt-2 md:mt-0">
                  <li>
                    Developed full-stack web and mobile apps using React,
                    Angular, Flutter, and Symfony
                  </li>
                  <li>
                    Built and deployed a full-featured e-learning platform (SUP4
                    DEV – FlutterLearn) with user authentication, course
                    management, and backend APIs using PHP/MySQL
                  </li>
                  <li>
                    Created a Camping Web App with Symfony that enables users to
                    rent equipment, participate in events, and suggest materials
                  </li>
                  <li>
                    Designed a modern portfolio site with parallax scrolling,
                    glassmorphism UI, dark mode, and Framer Motion animations
                  </li>
                  <li>
                    Collaborated on a Recipe Book App (Angular + LoopBack) with
                    filtering, favorites, and dynamic categories
                  </li>
                  <li>
                    Used JWT authentication, REST APIs, and Firebase for secure
                    and real-time functionality
                  </li>
                  <li>
                    Deployed applications using Vite, GitHub Pages, and local
                    servers for testing/demo
                  </li>
                </ul>
              </motion.div>
            </ScrollReveal>

            {/* Computer Technician (Self-employed) */}
            <ScrollReveal direction="right" delay={0.6}>
              <motion.div className="glass-effect rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <span className="text-yellow-600 dark:text-yellow-400 text-3xl mr-4">
                    🔧
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Computer Technician
                    </h3>
                    <div className="text-blue-600 dark:text-blue-400 font-medium">
                      Self-employed / Local Services
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">
                      Tunisia — 2021 – Present
                    </div>
                  </div>
                </div>
                <ul className="list-disc ml-10 text-gray-600 dark:text-gray-400 text-sm space-y-1 mt-2 md:mt-0">
                  <li>
                    Provided on-site and remote tech support for
                    hardware/software issues
                  </li>
                  <li>
                    Assembled and maintained desktops, laptops, and networking
                    components
                  </li>
                  <li>
                    Diagnosed and repaired Windows OS, drivers, and performance
                    problems
                  </li>
                  <li>
                    Installed and configured routers, modems, printers, and
                    other peripherals
                  </li>
                  <li>
                    Performed system cleanups, virus removals, backups, and OS
                    installations
                  </li>
                  <li>
                    Delivered training and advice to clients on best IT
                    practices
                  </li>
                </ul>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
