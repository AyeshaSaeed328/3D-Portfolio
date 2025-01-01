import React from 'react'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section 
    className='w-full h-screen mx-auto relative'>
    <div 
      className={`${styles.paddingX} absolute inset-0 top-[120px] flex flex-col items-center text-center`}>
      <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span className='text-[#915eff]'>Ayesha</span>
      </h1>
      <p className={`${styles.heroSubText} short:mt-0 mt-5 mb-10 text-white`}>
        Crafting seamless and innovative web applications tailored for modern solutions.
      </p>
    </div>
    <ComputersCanvas />
  </section>
  

  )
}

export default Hero