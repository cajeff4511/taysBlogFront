import React from 'react';
import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <div 
      className="h-[100vh] w-full bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className=" p-10 rounded-lg mb-[15%]">
        <h1 className="text-[150px] text-center mb-5 text-white italic">Living Well</h1>
        <p className="text-center text-white text-[20px] tracking-widest">FAITH. FITNESS. FINDS. FLIGHTS.</p>
        <p className="text-center text-white text-[20px] tracking-widest">BY TAYLOR STEWART</p>
      </div>
    </div>
  );
}

export default Hero;
