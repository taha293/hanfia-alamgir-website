import React from 'react'

const Hero = () => {
  return (
    <section className='flex w-full flex-col md:flex-row h-[80vh]'>
        <div className="w-full md:hover:w-[112%] transition-all ease-in duration-300 h-[25%] md:h-full flex justify-center items-center bg-[#007bff]">
            <video autoPlay loop muted playsInline className='h-full w-full object-cover opacity-75 mix-blend-multiply' src="/api/video?file=v1.mp4"></video>
        </div>
        <div className="w-full md:hover:w-[112%] transition-all ease-in duration-300 h-[25%] md:h-full flex justify-center items-center bg-[#4c691d]">
            <video autoPlay loop muted playsInline className='h-full w-full object-cover opacity-75 mix-blend-multiply' src="/api/video?file=v2.mp4"></video>
        </div>
        <div className="w-full md:hover:w-[112%] transition-all ease-in duration-300 h-[25%] md:h-full flex justify-center items-center bg-[#6610f2]">
            <video autoPlay loop muted playsInline className='h-full w-full object-cover opacity-75 mix-blend-multiply' src="/api/video?file=v3.mp4"></video>
        </div>
        <div className="w-full md:hover:w-[112%] transition-all ease-in duration-300 h-[25%] md:h-full flex justify-center items-center bg-[#fd7e14]">
            <video autoPlay loop muted playsInline className='h-full w-full object-cover opacity-75 mix-blend-multiply' src="/api/video?file=v4.mp4"></video>
        </div>
    </section>
  )
}

export default Hero