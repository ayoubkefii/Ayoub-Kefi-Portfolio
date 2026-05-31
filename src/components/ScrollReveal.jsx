import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 50,
  duration = 0.6,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: once,
    margin: "-100px 0px -100px 0px",
  });

  const getVariants = () => {
    const baseVariants = {
      hidden: {
        opacity: 0,
        scale: 0.95,
      },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: duration,
          delay: delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    };

    switch (direction) {
      case "up":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: distance },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case "down":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, y: -distance },
          visible: { ...baseVariants.visible, y: 0 },
        };
      case "left":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: distance },
          visible: { ...baseVariants.visible, x: 0 },
        };
      case "right":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, x: -distance },
          visible: { ...baseVariants.visible, x: 0 },
        };
      case "scale":
        return {
          ...baseVariants,
          hidden: { ...baseVariants.hidden, scale: 0.8 },
          visible: { ...baseVariants.visible, scale: 1 },
        };
      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
