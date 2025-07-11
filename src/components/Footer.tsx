import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="shadow-sm max-w-[2560px] mx-auto bg-[#58742c]">
            <div className="w-full p-4 lg:p-5 md:py-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-between">
                    <Link href={"/"} className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src={"/logo2.png"} alt='Hanfia Alamgir Logo' width={50} height={50}></Image>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Hanfia Alamgir</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                        <li>
                            <Link href={"/"} className="hover:underline me-4 md:me-6">Home</Link>
                        </li>
                        <li>
                            <Link href={"/"} className="hover:underline me-4 md:me-6">About Us</Link>
                        </li>
                        <li>
                            <Link href={"/"} className="hover:underline me-4 md:me-6">Our Team</Link>
                        </li>
                        <li>
                            <Link href={"/"} className="hover:underline">Institutes</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-white text-center">© 2025 <Link href={"/"} className="hover:underline">Hanfia Alamgir™</Link>. All Rights Reserved.</span>
            </div>
        </footer>



    )
}

export default Footer