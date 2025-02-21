// src/pages/Login.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login({ setToken }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('https://tays-blog-backend1-production.up.railway.app/login', {
        username,
        password
      })
      const { token } = res.data
      // Save token
      localStorage.setItem('token', token)
      setToken(token)
      navigate('/')
    } catch (err) {
      console.error(err)
      setError('Invalid credentials or server error')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="w-full max-w-sm bg-white p-6 shadow rounded">
        {error && <div className="bg-red-100 text-red-700 p-2 mb-3">{error}</div>}
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border w-full p-2" 
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border w-full p-2" 
            required
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
