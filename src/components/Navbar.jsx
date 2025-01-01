import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from '../constants'
import {logo2, menu, close} from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState("")
  return (
    <nav 
    className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
        to="/"
        className='flex items-center gap-2'
        onClick={() => {setActive("");
          window.scrollTo(0, 0)
        }}>
          
  <img src={logo2} alt="logo" className="w-12 h-12 rounded-full object-cover" />

  <div className="flex flex-col items-start">
  <p className="text-white text-[12px] sm:text-[16px] md:text-[20px] font-bold cursor-pointer">
  My Digital Canvas
</p>
<span className="text-gray-300 text-[8px] sm:text-[12px] md:text-[14px] font-medium">
  A Showcase of Possibilities
</span>

</div>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} 
          alt="menu" className="w-6 h-6 cursor-pointer object-contain" 
          onClick={() => setToggle(!toggle)}
          
          />
  
        </div>
        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[150px] z-30 rounded-2xl`} >
        <ul className='list-none flex flex-col gap-4 justify-end items-start'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[14px] font-medium cursor-pointer`}
              onClick={() => {setActive(nav.title);setToggle(!toggle)}}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        </div>
      </div>

    </nav>
  )
}

export default Navbar