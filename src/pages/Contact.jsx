import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ayoubelkefi11@gmail.com",
      link: "mailto:ayoubelkefi@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+216 25573007",
      link: "tel:+21625573007",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nabeul, Tn",
      link: "#",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
          year: new Date().getFullYear(),
        },
        PUBLIC_KEY
      );
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };


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
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="container-custom relative z-10">
          <ScrollReveal direction="up" delay={0.2}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center mb-16">
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                Get In <span className="text-gradient">Touch</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Let's work together to bring your ideas to life. I'm always open
                to discussing new projects and opportunities.
              </motion.p>
            </motion.div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <ScrollReveal direction="up" delay={0.3}>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
                  Let's Connect
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-center">
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, I'll try my best to get back to you!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center space-x-4 p-4 glass-card hover:bg-white/10 transition-all duration-300">
                      <div className="p-3 bg-amber-600/20 rounded-full">
                        <info.icon
                          size={24}
                          className="text-amber-400"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white text-center">
                    Follow Me
                  </h3>
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href="https://github.com/ayoubkefii"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 glass-card hover:bg-white/10 transition-all duration-300">
                      <Github
                        className="text-gray-700 dark:text-gray-300"
                        size={24}
                      />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/kefiayoub/"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 glass-card hover:bg-white/10 transition-all duration-300">
                      <Linkedin
                        className="text-gray-700 dark:text-gray-300"
                        size={24}
                      />
                    </motion.a>
                    <motion.a
                      href="https://wa.me/21625573007"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 glass-card hover:bg-white/10 transition-all duration-300">
                      <MessageCircle
                        className="text-gray-700 dark:text-gray-300"
                        size={24}
                      />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
