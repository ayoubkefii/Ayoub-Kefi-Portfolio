import { motion } from "framer-motion";
import { Download, FileText, ArrowDown } from "lucide-react";

const ResumeDownload = () => {
  const handleDownload = () => {
    const url = "/Ayoub_Kefi_CV.pdf";
    const link = document.createElement("a");
    link.href = url;
    link.download = "Ayoub_Kefi_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden">
      {/* Background animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600"
        initial={{ x: "-100%" }}
        whileHover={{ x: "0%" }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center space-x-3">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}>
          <FileText size={24} />
        </motion.div>

        <span>Download Resume</span>

        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}>
          <ArrowDown size={20} />
        </motion.div>
      </div>

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-xl"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{
          scale: 1,
          opacity: [0, 0.3, 0],
          transition: { duration: 0.6 },
        }}
      />
    </motion.button>
  );
};

export default ResumeDownload;
