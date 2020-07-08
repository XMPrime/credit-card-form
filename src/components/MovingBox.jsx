import React from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

export default function MovingBox({ boxStart, boxEnd }) {
  let boxVariants = {
    initial: {
      height: "0px",
      width: "0px",
    },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
    },
  };
  Object.assign(boxVariants.initial, boxStart);
  Object.assign(boxVariants.animate, boxEnd);

  return (
    <motion.div
      className='moving-box'
      key={uuidv4()}
      variants={boxVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    ></motion.div>
  );
}
