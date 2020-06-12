// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

// const charVariations = {
//   hidden: {
//     opacity: 0,
//     y: "-20px",
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       // staggerChildren: 0.4,
//       // mass: 0.4,
//       // damping: 8,
//     },
//   },
// };

// export default function Character(props) {
//   const [inProp, setInProp] = useState(false);
//   const [char, setChar] = useState("#");

//   useEffect(() => {
//     setInProp(true);
//   }, [props.char]);
//   return (
//       <TransitionGroup>

//       </TransitionGroup>
//     <CSSTransition
//       in={inProp}
//       timeout={1000}
//       classNames='char'
//       //   mountOnEnter
//       //   unmountOnExit
//       //   onEnter={() => setInProp(true)}
//       //   onExited={() => {
//       //     setInProp(false);
//       //     setInProp(true);
//       //   }}
//     >
//       <div className='char'>{props.char}</div>
//     </CSSTransition>
//   );
// }

// {
//   /* <div
// className='char'
// variants={charVariations}
// initial='hidden'
// animate='visible'
// >{`${char}`}</div> */
// }
