import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
const Navbar = () => {
    return (
        <div>
            <div className='w-full'>
                <div className='flex items-center justify-end text-2xl text-red-200 gap-7 mr-7 mt-7'>
                <a href="https://www.linkedin.com/in/vishwajeet-borkar-b2670b292" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/VishuKunal" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

                {/* <FaLinkedin />
                <FaGithub /> */}
                </div>
            </div>
        </div>
    )
}
export default Navbar
