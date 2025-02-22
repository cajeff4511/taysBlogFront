import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="h-[30vh] w-full flex flex-col items-center justify-center text-white pb-10"
    >
      <motion.div 
        className="w-[20%] h-full flex flex-col items-center justify-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2 className="text-2xl font-bold">SOCIALS</h2>
        <a className="text-xl hover:text-gray-100 underline underline-offset-3" href="https://www.instagram.com/taylorannestewart">
          @taylorannestewart
        </a>
        <a className="text-xl hover:text-gray-100 underline underline-offset-3" href="https://www.instagram.com/living.well.club">
          @living.well.club
        </a>
      </motion.div>
      <motion.h1 
        className="text-9xl"
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
