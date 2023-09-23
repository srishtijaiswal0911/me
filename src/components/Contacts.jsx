import React from 'react';

const Contacts = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full my-auto'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>If you're interested in connecting, let's join forces and embark on an exciting journey of growth and collaboration : )</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/63a04665-bda0-41c3-a534-539764572f01" 
                method='POST'
                className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type="text" 
                    name="name" 
                    placeholder='Enter your name' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <input 
                    type="text" 
                    name="email" 
                    placeholder='Enter your email' 
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
                    <textarea 
                    name="message" 
                    placeholder='Enter your message'
                    rows="10" 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>                
            </div>
            <footer class="text-sm pt-10 text-white text-center">
                &copy; 2023 S. J.  All rights reserved.
            </footer>
        </div>
    </div>
  )
}

export default Contacts