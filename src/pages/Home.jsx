// src/pages/Home.jsx
import React from 'react'
import BlogsContainer from '../components/BlogsContainer'
import Hero from '../components/Hero'
import About from '../components/About'

function Home({ token }) {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <BlogsContainer token={token} />
    </div>
  )
}

export default Home
