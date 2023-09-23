import React from 'react';
import ganvae from '../assets/portfolio/gan-vae.jpg';
import glyph from '../assets/portfolio/glyph.jpg';
import gossip from '../assets/portfolio/gossip.jpg'
import skincancer from '../assets/portfolio/skincancer.jpg';
import blind from '../assets/portfolio/blind.png'
import twitter from '../assets/portfolio/twitter.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: ganvae,
            href: 'https://github.com/srishtijaiswal0911/ML_Report'
            
        },
        {
            id: 2,
            src: glyph,
            href: 'https://github.com/srishtijaiswal0911/GlyphOnChoropleth'
        },
        {
            id: 3,
            src: twitter,
            href: 'https://github.com/srishtijaiswal0911/twitter-clone-erlang-proj'
        },
        {
            id: 4,
            src: gossip,
            href: 'https://github.com/srishtijaiswal0911/DOSP_Project2'
        },
        {
            id: 5,
            src: skincancer,
            href: 'https://github.com/srishtijaiswal0911/skin-cancer-detection'
        },
        {
            id: 6,
            src: blind,
            href: 'https://github.com/srishtijaiswal0911/third-eye-for-blinds'
        },
    ]

  return (
    <div name='portfolio' className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:hscreen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work:</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolios.map(({id,src,href}) => (
                        <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-125'> <a href={href} target= '_blank' rel="noreferrer">Link</a></button>
                            {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button> */}
                            </div>
                        </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio