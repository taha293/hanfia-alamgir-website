import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import { NavbarMenu } from './navbardialog';

const Header = () => {
  return (
    <header>
          <div className="flex !justify-center relative bg-[#58742c] text-white overflow-hidden py-1 group font-[500] ">
        <p className="text-white z-10 relative cursor-pointer text-[14px] lg:text-[16px]">Hanfia Alamgir</p>
        </div>
       <nav className="h-[60px] flex justify-between px-5 w-full">
                    <Image className="py-[6px]" src="/logo2.png" alt="" width={62} height={115}/>
            <div className='hidden  md:flex' id='navid'>
                <ul className='flex justify-center items-center gap-4'>
                <Link href={"/"} className='inline-block my-0 text-[14px] text-[#58742c] font-[500] hover:font-bold'>HOME</Link>
                <Link href={"/"} className='inline-block my-0 text-[14px] text-[#58742c] font-[500] hover:font-bold'>INSTITUTES</Link>
                <Link href={"/"} className='inline-block my-0 text-[14px] text-[#58742c] font-[500] hover:font-bold'>OUR TEAM</Link>
                <Link href={"/"} className='inline-block my-0 text-[14px] text-[#58742c] font-[500] hover:font-bold'>ABOUT US</Link>
                <Link href={"/"} className='inline-block my-0 text-[14px] text-[#58742c] font-[500] hover:font-bold'>OUR PURPOSE</Link>
                </ul>
            </div>
            <div className="flex justify-center items-center text-[26px] text-[#86ba3e]  md:hidden">
            <NavbarMenu/>
            </div>
        </nav>
    </header>
  )
}

export default Header