import React from 'react'

const Footer = () => {
  return (
    <div className='h-[30vh] w-[100vh] flex flex-col items-center justify-center text-white pb-10'>
        <div className=' w-[20%] h-full flex flex-col items-center justify-start'>
            <h2 className='text-xl font-bold'>SOCIALS</h2>
            <a className='text-xl' href='https://www.instagram.com/taylorannestewart'>@taylorannestewart</a>
            <a className='text-xl' href="https://www.instagram.com/living.well.club">@living.well.club</a>
        </div>
        <h1 className='text-9xl'>Living Well</h1>
    </div>
  )
}

export default Footer