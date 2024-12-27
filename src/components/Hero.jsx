import React from 'react'
import { HERO_CONTENT } from '../constant/Index'
import studyImage from '../assets/study.jpeg';

const Hero = () => {
    return (
        <div className='flex '>
            <div>
            <div className='pb-16 mx-10 mt-20 font-serif text-6xl tracking-tight '>Vishwajeet Borkar</div>
            <div className='ml-10 text-4xl tracking-tight text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text' >FULL STACK DEVELOPER</div>
            <p className='w-1/2 py-6 ml-10 text-white myfont-light'>{HERO_CONTENT}</p>
            </div>
            <div >
                <div className='mt-24 mr-20 w-96'>
                <img src={studyImage} alt="studying"/>
                </div>
            </div>
            
            
        </div>
    )
}

export default Hero;
