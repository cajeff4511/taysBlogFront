import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function BlogsContainer({ token }) {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const res = await axios.get('https://tayblogbackend-production.up.railway.app/blogs');
      setBlogs(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <motion.div 
      className="flex flex-col items-center justify-start h-[100vh] bg-[#8ea5b0] text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h1 variants={itemVariants} className="text-5xl mb-[50px]">
        as of late
      </motion.h1>
    
      <motion.div 
        className="w-[80%] h-full flex flex-wrap gap-2 justify-center"
        variants={containerVariants}
      >
        {blogs.map((item) => (
          <motion.div 
            key={item._id} 
            className="w-[350px] h-[400px] flex flex-col justify-start items-center" 
            variants={itemVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
          >
            <Link to={`/blog/${item._id}`}>
              <motion.img
                src={item.img}
                alt={item.title}
                className="h-[300px] w-[300px] object-cover rounded-sm"
                whileHover={{ scale: 1.05 }}
              />
            </Link>
            <motion.h3 className="text-white text-xl" variants={itemVariants}>
              {item.category}
            </motion.h3>
            <motion.h1 className="text-white text-3xl font-bold" variants={itemVariants}>
              {item.title}
            </motion.h1>
            <motion.p className="text-white text-md italic" variants={itemVariants}>
              {new Date(item.createdAt).toISOString().split('T')[0]}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default BlogsContainer;
