// src/pages/AddEditBlog.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function AddEditBlog({ token }) {
  const { id } = useParams(); // If editing, this is the blog ID
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [img, setImg] = useState(''); // store path of uploaded image
  const [category, setCategory] = useState('faith cat');

  // Redirect if not logged in
  useEffect(() => {
    if (!token) {
      alert('You must be logged in to access this page.');
      navigate('/login');
    }
  }, [token, navigate]);

  // If editing, fetch blog details
  useEffect(() => {
    if (id) {
      axios
        .get('https://tays-blog-backend1-production.up.railway.app/blogs')
        .then((res) => {
          const found = res.data.find((b) => b._id === id);
          if (found) {
            setTitle(found.title);
            setImg(found.img);
            if (found.category) {
              setCategory(found.category);
            }
            setBlogContent(found.blog || '');
          }
        })
        .catch((err) => console.error(err));
    }
  }, [id]);

  // ---- File Upload Handler ----
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!token) {
      alert('You must be logged in to upload images.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', file); // "image" must match the Multer field name

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.post(
        'https://tays-blog-backend1-production.up.railway.app/upload',
        formData,
        config
      );

      if (res.data.filePath) {
        setImg(res.data.filePath);
      }
    } catch (error) {
      console.error(error);
      alert('Error uploading image.');
    }
  };

  // ---- Submit Handler ----
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert('You must be logged in to add or edit blogs.');
      return;
    }

    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const blogData = {
        title,
        blog: blogContent, // HTML from ReactQuill
        img,
        category,
      };

      if (id) {
        // Edit existing blog
        await axios.put(
          `https://tays-blog-backend1-production.up.railway.app/blogs/${id}`,
          blogData,
          config
        );
      } else {
        // Create new blog
        await axios.post(
          'https://tays-blog-backend1-production.up.railway.app/blogs',
          blogData,
          config
        );
      }
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Error saving blog.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white p-6 shadow rounded">
      <h1 className="text-2xl font-bold mb-4">{id ? 'Edit Blog' : 'Add Blog'}</h1>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border w-full p-2"
            required
          />
        </div>

        {/* Blog Content (ReactQuill) */}
        <div className="mb-4">
          <label className="block text-gray-700">Blog Content</label>
          <ReactQuill
            theme="snow"
            value={blogContent}
            onChange={setBlogContent}
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link'],
                ['clean']
              ],
            }}
          />
        </div>

        {/* Image File Upload */}
        <div className="mb-4">
          <label className="block text-gray-700">Upload Featured Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="border w-full p-2"
          />
          {img && (
            <div className="mt-2">
              <p className="text-sm text-gray-500">Preview:</p>
              <img
                src={`https://tays-blog-backend1-production.up.railway.app/${img}`}
                alt="Preview"
                className="max-w-xs max-h-40 object-cover border"
              />
            </div>
          )}
        </div>
hello
        {/* Category */}
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border w-full p-2"
            required
          >
            <option value="faith cat">Faith Cat</option>
            <option value="fitness cat">Fitness Cat</option>
            <option value="flights cat">Flights Cat</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          {id ? 'Update Blog' : 'Create Blog'}
        </button>
      </form>
    </div>
  );
}

export default AddEditBlog;
