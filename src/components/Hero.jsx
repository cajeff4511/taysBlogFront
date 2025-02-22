import React from 'react';
import { motion } from 'framer-motion';
import hero from '../assets/hero.png';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="h-[100vh] w-full bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        className="p-10 rounded-lg mb-[15%]"
      >
        <motion.h1 
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-[150px] text-center mb-5 text-white italic"
        >
          Living Well
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-center text-white text-[20px] tracking-widest"
        >
          FAITH. FITNESS. FINDS. FLIGHTS.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1, duration: 1 }}
          className="text-center text-white text-[20px] tracking-widest"
        >
          BY TAYLOR STEWART
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
