import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'


let MotionLink = motion(Link);

const Logo = () => {

  return (
    <div
     className='flex flex-col items-center justify-center mt-2'>
        <MotionLink href="/" 
    className='flex items-center justify-center rounded-full w-16 h-16
    bg-cyan-400
    text-white dark:border-2 dark:border-solid dark:border-light
    text-2xl font-bold "#00FFFF"'
    whileHover={{
      backgroundColor:["#00FFFF", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(131,58,180,1)", "#00FFFF"],
      transition:{duration:1, repeat: Infinity }
    }}
    >TS</MotionLink>
    </div>
  )
}

export default Logo