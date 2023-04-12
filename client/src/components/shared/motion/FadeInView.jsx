import { motion } from "framer-motion";

const fadeVariants = {
  hidden: {
    opacity: 0,
    transition: {
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const FadeInView = ({ children }) => {
  return (
    <motion.div
      variants={fadeVariants}
      initial="hidden"
      exit="exit"
      whileInView="visible"
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
};
