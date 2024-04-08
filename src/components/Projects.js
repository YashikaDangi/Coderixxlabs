import React from 'react'
import Carousel from './Carousel'

const Projects = () => {
  return (
<>
    <div className="flex justify-between items-center bg-[#EFD6FF] shadow-lg" id="Projects">
      <div className='flex p-4 m-4'>
        <img className='w-full h-14 bg-p px-4' 
        alt="logo" 
        src="https://coderixx.com/assets/images/GithubPng.webp" />

       <img className='w-full h-14 px-4' 
        alt="logo" 
        src="https://coderixx.com/assets/images/MongoDB.webp" />
      
      <img className='w-full h-14 px-4' 
        alt="logo" 
        src="https://coderixx.com/assets/images/NextjsPng.webp" />
      
      <img className='w-full h-14 px-4' 
        alt="logo" 
        src="https://coderixx.com/assets/images/NodejsPng.webp" />
      
      <img className='w-full h-14 px-4' 
        alt="logo" 
        src="https://coderixx.com/assets/images/ReactPng.webp" />
      
     
      </div>
      </div>

      <div className="w-full max-w-4xl p-8 px-20 mt-5 mb-20">
        <h1 className="text-white text-5xl pb-4 tracking-wide border-b border-purple-400 w-20 ">Projects</h1>
        <div className='mt-8'>
          <h1 className='text-sm tracking-wide text-purple-400'>Our Expertise and Approach</h1>
          <p className='mt-4 text-sm tracking-wide text-white'>At Coderixx, we leverage cutting-edge technologies such as [NEXTJS, MongoDB, REACTJS, ANCHOR, etc.] to create innovative blockchain solutions tailored to your business needs. Explore our portfolio and see for yourself how our expertise can transform your ideas into reality.</p>
        </div>
      </div>

      <Carousel/>

    
    
    </>
  )
}

export default Projects
