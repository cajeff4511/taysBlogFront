// src/pages/BlogDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get('https://tays-blog-backend1-production.up.railway.app/blogs');
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

  return (
    <div className="flex flex-col items-center text-white bg-[#8ea5b0] h-[100vh]">
      <div className="w-[80%]">
        <h3>{blog.category}</h3>
        <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
        <p>{new Date(blog.createdAt).toISOString().split('T')[0]}/Taylor Stewart</p>

        {/* Render Quill HTML here */}
        <div
          className="text-white mb-4"
          dangerouslySetInnerHTML={{ __html: blog.blog }}
        />
      </div>
    </div>
  );
}

export default BlogDetails;
``
