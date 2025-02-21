import React from 'react'
import img from '../assets/2.png'

const About = () => {
  return (
    <div className='h-[100vh] bg-[#8ea5b0] flex sm:flex-row justify-center items-center flex-col'>
      <div className='w-1/2 flex justify-center flex-col items-center'>
        <div className='max-w-[350px] min-w-[300px]'>
          <h2 className='text-white text-center text-4xl bold'>living well out of the overflow of Christ’s love for us.</h2>
        </div>
        <div>
          <p className=' text-white max-w-[350px] min-w-[300px] text-lg text-center'>Hi, I’m Taylor Stewart—but if you’re new here, don’t get too used to the name because soon, I’ll be Taylor Jefferson! Welcome to my little corner of the internet, where I share my passion for wellness in every area of life. From pursuing Jesus and fun pilates flows to my favorite finds and travel spots, I’m excited to share my heart with you!</p>
        </div>
      </div>
      <div className='w-1/2 flex justify-center'>
        <img src={img} alt="/" />
      </div>
    </div>
  )
}

export default About