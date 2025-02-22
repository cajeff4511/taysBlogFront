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
      {token && (
        <header className="flex flex-col sm:flex-row items-center w-full justify-between p-4 bg-blue-600 text-white">
          <Link to="/" className="font-bold text-xl mb-2 sm:mb-0">
            Welcome Taylor!
          </Link>
          <nav className="flex flex-col sm:flex-row items-center">
            <Link to="/add" className="mr-0 sm:mr-4 mb-2 sm:mb-0">
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

      <Routes>
        <Route path="/" element={<Home token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog/:id" element={<BlogDetails token={token} />} />
        <Route path="/add" element={<AddEditBlog token={token} />} />
        <Route path="/edit/:id" element={<AddEditBlog token={token} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
