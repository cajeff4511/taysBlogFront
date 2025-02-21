// src/App.jsx
import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BlogDetails from './pages/BlogDetails'
import AddEditBlog from './pages/AddEditBlog'

function App() {
  const [token, setToken] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // On load, check if we have a token in localStorage
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setToken(null)
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        {/* Add/Edit blog route (protected) */}
        <Route path="/add" element={<AddEditBlog token={token} />} />
        <Route path="/edit/:id" element={<AddEditBlog token={token} />} />
      </Routes>
    </div>
  )
}

export default App
