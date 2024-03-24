import React from "react";
import "./Minititle.css";
import { motion } from "framer-motion";

const Minititle = (props) => {
  return (
    <motion.div
      className="mini-title"
      initial={{
        y: 80,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 0.4,
        duration: 1,
      }}
    >
      <h3>{props.title}</h3>
    </motion.div>
  );
};

export default Minititle;
