import React from 'react'
import Link from 'next/link'

const AllInstitutes = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-[1fr,1fr,1fr,1fr]'>
      <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: "url('/jamia.png')" }}>
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-44 lg:h-48 xl:h-52 gap-4 text-white">
          <h1 className='text-xl lg:text-2xl font-bold italic'>Jamia</h1>
          <Link href={"/"} className="text-white underline font-medium rounded-lg px-4 xl:px-5 italic text-center me-2 mb-2 text-sm xl:text-base">Read more</Link>
        </div>
        </div>
      <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: "url('/sardkhana.png')" }}>
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-44 lg:h-48 xl:h-52 gap-4 text-white">
          <h1 className='text-xl lg:text-2xl font-bold italic'>SardKhana</h1>
          <Link href={"/"} className="text-white underline font-medium rounded-lg px-4 xl:px-5 italic text-center me-2 mb-2 text-sm xl:text-base">Read more</Link>
        </div>
        </div>
      <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: "url('/uni.png')" }}>
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-44 lg:h-48 xl:h-52 gap-4 text-white">
          <h1 className='text-xl lg:text-2xl font-bold italic'>University</h1>
          <Link href={"/"} className="text-white underline font-medium rounded-lg px-4 xl:px-5 italic text-center me-2 mb-2 text-sm xl:text-base">Read more</Link>
        </div>
        </div>
      <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: "url('/madrasa.png')" }}>
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-44 lg:h-48 xl:h-52 gap-4 text-white">
          <h1 className='text-xl lg:text-2xl font-bold italic'>Madrasa</h1>
          <Link href={"/"} className="text-white underline font-medium rounded-lg px-4 xl:px-5 italic text-center me-2 mb-2 text-sm xl:text-base">Read more</Link>
        </div>
        </div>
    </div>
  )
}

export default AllInstitutes