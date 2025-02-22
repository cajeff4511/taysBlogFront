import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    <div className="flex flex-col items-center text-white bg-[#8ea5b0] min-h-[70vh] w-full p-4">
      <div className="w-full sm:w-[70%]">
        <h3 className="text-lg sm:text-xl">{blog.category}</h3>
        <h1 className="text-3xl sm:text-5xl font-bold mb-2">{blog.title}</h1>
        <p className='italic mb-3 text-sm sm:text-base'>
          {new Date(blog.createdAt).toISOString().split('T')[0]}/Taylor Stewart
        </p>

        <div
          className="prose prose-invert mb-4"
          dangerouslySetInnerHTML={{ __html: blog.blog }}
        />

        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer mb-4"
        >
          Back to Home
        </button>

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
    </div>
  );
}

export default BlogDetails;
