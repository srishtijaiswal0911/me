import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Hi there! I'm an Computer Science Grad Student at UF eager to secure challenging Software Engineering or Machine Learning roles that require me to learn new technologies. Through my B.Tech at The SRM University, India, I gained hands-on experience in software development and machine learning, honing my skills and proficiency in the field. I've had the opportunity to work for about 2 years, starting as a Programmer Analyst at Cognizant and later as a Risk and Financial Advisory Analyst at Deloitte. 
            </p>
            <br />
            <p className='text-xl'>
                But that's not all there is to me! I have a deep passion for classical singing, and I love to blend beautiful melodies with the world of technology. My goal is to apply my technical skills, problem-solving abilities, and industry knowledge to create innovative solutions. 
                <br />
                <br />
                Working to bring a positive impact on the world - one code at a time!
            </p>
        </div>
    </div>
  )
}

export default About