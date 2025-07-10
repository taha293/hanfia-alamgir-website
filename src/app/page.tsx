'use client'
import React from 'react'
import Hero from '@/components/Hero'
import Description from '@/components/Description'
import Jamia from '@/components/Jamia'
import Message from '@/components/Message'
import AllInstitutes from '@/components/AllInstitutes'

const page = () => {
  return (
     <main className="relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto">
            <Hero/>
        <div className="max-w-[1320px] w-full">
            <Description/>
            <Jamia/>
            <Message/>
            <AllInstitutes/>
        </div>
     </main>
  )
}

export default page