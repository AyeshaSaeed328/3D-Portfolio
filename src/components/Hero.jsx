import React from 'react'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section 
    className='w-full h-screen mx-auto relative flex items-center justify-center'>
    <div 
      className={`${styles.paddingX} absolute inset-0 top-[130px] flex flex-col items-center text-center`}>
      <h1 className={`${styles.heroHeadText} text-white`}>
        Hi, I'm <span className='text-[#915eff]'>Ayesha</span>
      </h1>
      <p className={`${styles.heroSubText} short:mt-0 mt-5 mb-10 text-white`}>
        I develop innovative web applications tailored for modern solutions.
      </p>
    </div>
    <ComputersCanvas />
    <div className='absolute xs:bottom-10 bottom-8 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
  </section>
  

  )
}

export default Hero