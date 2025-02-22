import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="h-auto sm:h-[30vh] w-full flex flex-col items-center justify-center text-white pb-10 p-4"
    >
      <motion.div 
        className="w-full sm:w-[20%] flex flex-col items-center justify-start mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold">SOCIALS</h2>
        <a className="text-base sm:text-xl hover:text-gray-100 underline underline-offset-3" href="https://www.instagram.com/taylorannestewart">
          @taylorannestewart
        </a>
        <a className="text-base sm:text-xl hover:text-gray-100 underline underline-offset-3" href="https://www.instagram.com/living.well.club">
          @living.well.club
        </a>
      </motion.div>
      <motion.h1 
        className="text-3xl sm:text-9xl"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        Living Well
      </motion.h1>
    </motion.div>
  );
};

export default Footer;
