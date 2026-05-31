import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Smartphone,
  Globe,
  Zap,
  Server,
  Database as DatabaseIcon,
  Smartphone as MobileIcon,
  Palette as DesignIcon,
  Globe as WebIcon,
} from "lucide-react";

const TechStack = () => {
  const technologies = [
    {
      name: "React",
      icon: Code,
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/20",
      description: "Frontend Development",
    },
    {
      name: "Node.js",
      icon: Server,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20",
      description: "Backend Development",
    },
    {
      name: "MongoDB",
      icon: DatabaseIcon,
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      borderColor: "border-emerald-400/20",
      description: "Database",
    },
    {
      name: "React Native",
      icon: MobileIcon,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20",
      description: "Mobile Development",
    },
    {
      name: "UI/UX Design",
      icon: DesignIcon,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20",
      description: "Design & Prototyping",
    },
    {
      name: "Web Development",
      icon: WebIcon,
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
      borderColor: "border-orange-400/20",
      description: "Full Stack Web",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {technologies.map((tech) => (
        <motion.div
          key={tech.name}
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          className={`group relative p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 cursor-pointer ${tech.bgColor} ${tech.borderColor} hover:shadow-xl hover:shadow-black/10`}>
          {/* Background glow effect */}
          <div
            className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${tech.bgColor.replace(
              "/10",
              "/20"
            )}`}
          />

          <div className="relative z-10 text-center">
            <motion.div
              whileHover={{
                rotate: 360,
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
              className={`mx-auto mb-4 p-3 rounded-xl ${tech.bgColor} ${tech.borderColor} border`}>
              <tech.icon size={32} className={tech.color} />
            </motion.div>

            <h3 className={`font-semibold mb-2 ${tech.color}`}>{tech.name}</h3>

            <p className="text-xs text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tech.description}
            </p>
          </div>

          {/* Floating particles effect */}
          <motion.div
            className="absolute inset-0 overflow-hidden rounded-2xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 ${tech.color.replace(
                  "text-",
                  "bg-"
                )} rounded-full`}
                initial={{
                  x: Math.random() * 100,
                  y: Math.random() * 100,
                  opacity: 0,
                }}
                animate={{
                  x: Math.random() * 100,
                  y: Math.random() * 100,
                  opacity: [0, 1, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  },
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechStack;
