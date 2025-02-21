// src/components/BlogsContainer.jsx
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function BlogsContainer({ token }) {
  const [blogs, setBlogs] = useState([])
  const navigate = useNavigate()

  const fetchBlogs = async () => {
    try {
      const res = await axios.get('https://tayblogbackend-production.up.railway.app/blogs')
      setBlogs(res.data)
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  const handleAdd = () => {
    // Navigate to the /add page
    navigate('/add')
  }

  return (
    <div className="flex flex-col items-center justify-start h-[100vh] bg-[#8ea5b0] text-white">
      <h1 className="text-5xl mb-[50px]">as of late</h1>
      <div className="w-[80%] h-full flex flex-wrap gap-2 justify-center">
        {blogs.map((item) => (
          <div key={item._id} className="w-[350px] h-[400px] flex flex-col justify-start items-center">
            <Link to={`/blog/${item._id}`}>
              <img src={`https://tayblogbackend-production.up.railway.app/${item.img}`} alt="/" className="h-[300px] w-[300px] object-cover rounded-sm" />
            </Link>
            <h3 className="text-[#032b22] text-xl">{item.category}</h3>
            <h1 className="text-[#032b22] text-3xl font-bold">{item.title}</h1>
            <p className="text-[#032b22] text-md italic">
              {new Date(item.createdAt).toISOString().split('T')[0]}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogsContainer
