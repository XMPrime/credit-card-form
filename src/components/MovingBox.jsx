import React from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

export default function MovingBox({ boxStart, boxEnd }) {
  let boxVariants = {
    initial: {
      opacity: 0,
      height: "0px",
      width: "0px",
      top: 0,
      left: 0,
    },
    animate: {
      opacity: 1,
      height: "60px",
      width: "5.5rem",
      top: "180px",
      left: "330px",
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
