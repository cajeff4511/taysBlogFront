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
      className="h-auto sm:min-h-[80vh] w-full bg-[#8ea5b0] flex flex-col sm:flex-row justify-center items-center p-4"
    >
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full sm:w-1/2 flex flex-col justify-center items-center mb-6 sm:mb-0"
      >
        <div className="max-w-[370px] w-full mb-5">
          <h2 className="text-white text-center text-2xl sm:text-5xl font-bold">
            Living well out of the overflow of Christ’s love for us.
          </h2>
        </div>
        <div>
          <p className="text-white max-w-[350px] w-full text-sm sm:text-xl text-center">
            Hi, I’m Taylor Stewart—but if you’re new here, don’t get too used to the name because soon, I’ll be Taylor Jefferson! Welcome to my little corner of the internet, where I share my passion for wellness in every area of life. From pursuing Jesus and fun pilates flows to my favorite finds and travel spots, I’m excited to share my heart with you!
          </p>
        </div>
      </motion.div>
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full sm:w-1/2 flex justify-center"
      >
        <img src={img} alt="About" className="max-w-full h-auto" />
      </motion.div>
    </motion.div>
  );
};

export default About;
