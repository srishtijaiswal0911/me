import React from 'react';
import HeroImage from '../assets/heroImage.jpeg';
import {MdKeyboardArrowRight} from "react-icons/md";
import { Link } from "react-scroll";
import TypedText from './TypedText'
import {BiSolidArrowToRight} from "react-icons/bi"


const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a <TypedText />
                </h2>
                <p className='text-gray-400 py-4 max-w-md'>
                    Weaving symphonies in the world of data, AI, and code – A data cruncher by day, code wizard by night, and machine learner for life.
                </p>

                <div className='inline-flex space-x-4'>
                    <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200'>
                        Portfoio
                        <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={25} className='ml-1'/></span>
                    </Link>
                    <a   smooth duration={500} 
                            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200'
                            href='/Resume_Srishti_Jaiswal.pdf'
                            download
                            target= '_blank'
                            rel="noreferrer">
                        Resume
                        <span className='group-hover:rotate-90 duration-300'><BiSolidArrowToRight size={25} className='ml-1'/></span>
                    </a>
                </div>
                
            </div>

            <div><img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' /></div>
        </div>
    </div>
  )
}

export default Home