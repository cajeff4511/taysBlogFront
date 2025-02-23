import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

function BlogDetails({ token }) {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get('https://tayblogbackend-production.up.railway.app/blogs');
        const found = res.data.find((b) => b._id === id);
        setBlog(found || null);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div className="p-4">Loading blog...</div>;
  }

  const handleEdit = () => {
    navigate(`/edit/${blog._id}`);
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;
    try {
      await axios.delete(
        `https://tayblogbackend-production.up.railway.app/blogs/${blog._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Blog deleted successfully.');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Error deleting blog.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-white bg-[#8ea5b0] min-h-[70vh] w-full p-4 relative"
    >
      <div className="w-full sm:w-[70%] relative">
        {/* Back to Home Button positioned at top right */}
        <motion.button
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 bg-gray-500 text-white px-4 py-2 rounded cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Home
        </motion.button>
        
        <h3 className="text-lg sm:text-xl mt-10">{blog.category}</h3>
        <h1 className="text-3xl sm:text-5xl font-bold mb-2">{blog.title}</h1>
        <p className="italic mb-3 text-sm sm:text-base">
          {new Date(blog.createdAt).toISOString().split('T')[0]}/Taylor Stewart
        </p>

        {/* Increased font size using text-lg */}
        <div
  className="prose prose-invert mb-4
    [&_ul]:list-disc [&_ul]:ml-[1.5em] [&_ul]:text-[1.2em]
    [&_li]:ml-[1.2em]
    [&_ol]:list-decimal [&_ol]:ml-[1.5em] [&_ol]:text-[1.2em]
    [&_h1]:text-[2.2em]
    [&_h2]:text-[1.6em]
    [&_h3]:text-[1.27em]
    [&_h4]:text-[1.2em]
    [&_h5]:text-[1.2em]
    [&_p]:text-[1.2em]
    [&_strong]:font-extrabold
  "
  dangerouslySetInnerHTML={{ __html: blog.blog }}
/>


        {token && (
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default BlogDetails;
