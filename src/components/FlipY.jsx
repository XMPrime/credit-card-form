import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const flipVariants = {
  initial: {
    rotateY: 0,
    // perspective: 0,
  },
  animate: {
    rotateY: 0,
    transition: { duration: 0.125 },
  },
  exit: {
    rotateY: 180,
    // perspective: "1000px",
    transition: { duration: 0.25 },
  },
};

export default function FlipY({ id, children }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={id}
        variants={flipVariants}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
