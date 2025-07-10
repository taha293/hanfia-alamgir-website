import React from 'react'
import Image from 'next/image'

const Jamia = () => {
  return (
    <section className='flex'>
      <div className='hidden md:flex w-[75%] relative'>
        <Image src={"/jamia.jpg"} alt='Jamia Image' fill className='object-cover'></Image>
      </div>
      <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="relative z-10 flex flex-col px-5 sm:px-6 md:px-8 lg:px-10 lg:pr-14  xl:px-14 py-20 h-full text-white text-base md:text-lg xl:text-xl">
          <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-6'>Jamia Hanfia Alamgir</h1>
          <p>Jamia Hanfia Alamgir stands as a pillar of traditional Islamic scholarship, established to nurture students in the light of Quran, Sunnah, and the rich legacy of the Ahle Sunnat wa Jama&apos;at. Our institution is dedicated to producing morally upright, knowledgeable, and socially responsible individuals who embody both ilm (knowledge) and amal (practice).<br /> <br />
          We offer a structured curriculum that integrates classical Dars-e-Nizami studies with character-building and practical life training. At Jamia Hanfia, the focus goes beyond textbooks, we aim to inspire hearts, refine akhlaq (manners), and prepare scholars who serve the Ummah with sincerity and wisdom.<br /> <br />
          Our faculty includes qualified and experienced teachers who are deeply rooted in Islamic sciences and passionate about student development. With a growing number of alumni serving as imams, teachers, and community leaders, Jamia Hanfia continues to expand its impact across Pakistan and beyond.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Jamia