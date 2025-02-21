// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BlogDetails from './pages/BlogDetails';
import AddEditBlog from './pages/AddEditBlog';
import Footer from './components/Footer';

function App() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // On load, check if we have a token in localStorage
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#8ea5b0] text-gray-800 w-full flex flex-col items-center">
      {/* Navigation Header only visible when logged in */}
      {token && (
        <header className="flex items-center w-full justify-between p-4 bg-blue-600 text-white">
          <Link to="/" className="font-bold text-xl">
           Welcome Taylor!
          </Link>
          <nav>
            <Link to="/add" className="mr-4">
              Add Blog
            </Link>
            <button
              onClick={handleLogout}
              className="bg-blue-700 px-3 py-1 rounded"
            >
              Logout
            </button>
          </nav>
        </header>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog/:id" element={<BlogDetails token={token} />} />
        <Route path="/add" element={<AddEditBlog token={token} />} />
        <Route path="/edit/:id" element={<AddEditBlog token={token} />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
