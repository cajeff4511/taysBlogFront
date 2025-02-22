import React from 'react';
import { motion } from 'framer-motion';
import img from '../assets/2.png';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="h-[100vh] w-full bg-[#8ea5b0] flex sm:flex-row justify-center items-center flex-col"
    >
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-1/2 flex justify-center flex-col items-center"
      >
        <div className="max-w-[360px] min-w-[300px] mb-5">
          <h2 className="text-white text-center text-5xl bold">
            Living well out of the overflow of Christ’s love for us.
          </h2>
        </div>
        <div>
          <p className="text-white max-w-[350px] min-w-[300px] text-lg text-center">
            Hi, I’m Taylor Stewart—but if you’re new here, don’t get too used to the name because soon, I’ll be Taylor Jefferson! Welcome to my little corner of the internet, where I share my passion for wellness in every area of life. From pursuing Jesus and fun pilates flows to my favorite finds and travel spots, I’m excited to share my heart with you!
          </p>
        </div>
      </motion.div>
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-1/2 flex justify-center"
      >
        <img src={img} alt="About" />
      </motion.div>
    </motion.div>
  );
};

export default About;
