import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const flipVariants = {
  initial: {
    rotateY: 0,
  },
  animate: {
    rotateY: 0,
  },
  exit: {
    rotateY: 180,
    transition: { duration: 0.5 },
  },
};

export default function FlipY({ id, children }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className='char'
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
