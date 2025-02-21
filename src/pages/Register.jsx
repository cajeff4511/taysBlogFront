// src/pages/Register.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('https://tayblogbackend-production.up.railway.app/register', {
        username,
        password
      })
      setMessage(res.data.message)
      setError(null)
      // Optionally redirect to login after success
      setTimeout(() => {
        navigate('/login')
      }, 1500)
    } catch (err) {
      console.error(err)
      setError('Registration failed')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <form onSubmit={handleRegister} className="w-full max-w-sm bg-white p-6 shadow rounded">
        {message && <div className="bg-green-100 text-green-700 p-2 mb-3">{message}</div>}
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
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
