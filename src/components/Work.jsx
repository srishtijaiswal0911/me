// import React from 'react';

// const Work = () => {
//   return (
//     <div name="work" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
//         <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
//             <div className='pb-8'>
//                 <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Work Experince</p>
//             </div>
//             <p className='text-2xl mt-20 border-b-2'>
//                 Full Time
//             </p>
            // <p className='text-xl mt-10'>
            //     <a className='text-blue-300' href="https://www2.deloitte.com/us/en.html">Deloitte</a> | Advisory Analyst (July 2021 - August 2022)
            // </p>
            // <p className='text-xl'>
            //     <a className='text-blue-300' href="https://www.cognizant.com/us/en">Cognizant</a> | Programmer Analyst (September 2020 - May 2021)
            // </p>
            // <p className='text-2xl mt-20 border-b-2'>
            //     Internships
            // </p>
            // <p className='text-xl mt-10'>
            //     <a className='text-blue-300' href="https://www.cognizant.com/us/en">Cognizant</a> | Programmer Analyst Intern (January 2020 - May 2020)
            // </p>
            // <p className='text-xl'>
            //     <a className='text-blue-300' href="https://galific.com/">Galific Arts</a> | Frontend Developer Intern (June 2019 - July 2019)
            // </p>
            // <p className='text-xl'>
            //     <a className='text-blue-300' href="https://www.enviroinfrasolutions.com/">Enviro Infra Solutions</a> | Website Designing and Development Intern (May 2018 - June 2018)
            // </p>
//         </div>
//     </div>
//   )
// }

// export default Work

import React, { useState } from 'react';

const Work = () => {
  const [deloittePanelVisible, setDeloittePanelVisible] = useState(false); // State for Deloitte panel
  const [cognizant1PanelVisible, setCognizant1PanelVisible] = useState(false); // State for Cognizant1 panel
  const [cognizant2PanelVisible, setCognizant2PanelVisible] = useState(false); // State for Cognizant2 panel
  const [galificPanelVisible, setGalificPanelVisible] = useState(false); // State for Galific Arts panel

  const toggleDeloittePanel = () => {
    setDeloittePanelVisible(!deloittePanelVisible);
  };

  const toggleCognizant1Panel = () => {
    setCognizant1PanelVisible(!cognizant1PanelVisible);
  };

  const toggleCognizant2Panel = () => {
    setCognizant2PanelVisible(!cognizant2PanelVisible);
  };

  const toggleGalificPanel = () => {
    setGalificPanelVisible(!galificPanelVisible);
  };


  return (
    <div name="work" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Work Experience</p>
        </div>
        <p className='text-2xl mt-20 border-b-2'>
          Full Time
        </p>
        <div>
          <p className='text-xl mt-10 cursor-pointer hover:text-blue-300 hover:scale-105 transition-transform' onClick={toggleDeloittePanel}>
            <span className='text-blue-300'>Deloitte</span> | Advisory Analyst (Jul 2021 - Aug 2022)
          </p>
          {deloittePanelVisible && (
            <div className='mt-4 px-4 py-2 bg-gray-900 rounded-lg'>
              <ul className='list-disc pl-6'>
                <li>Drove dynamic Python-powered data analysis unveiling critical patterns and vulnerabilities, propelling the development of precision risk mitigation strategies. As a result, cybersecurity measures were significantly strengthened, leading to an impressive 20% reduction in potential threats.</li>
                <li>Proficient in designing comprehensive IT and Third-Party risk assessment strategies, conducting rigorous SOC1 & SOC2 readiness assessments, ensuring SOX readiness, and driving transformative control enhancements for operational efficiency. Additionally, executed impactful SOC assessments for a leading cloud service provider, prompting substantial security improvements and elevating SOC report ratings through meticulous analysis and strategic recommendations.</li>
                <li>Strategically led process optimization in the realm of cybersecurity by deploying Python-driven automated solutions, achieving a notable 30% reduction in manual effort, and significantly amplifying operational efficiency.</li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <p className='text-xl cursor-pointer hover:text-blue-300 hover:scale-105 transition-transform' onClick={toggleCognizant1Panel}>
            <span className='text-blue-300'>Cognizant</span> | Programmer Analyst (Sep 2020 - May 2021)
          </p>
          {cognizant1PanelVisible && (
            <div className='mt-4 px-4 py-2 bg-gray-900 rounded-lg'>
              <ul className='list-disc pl-6'>
                <li>Spearheaded two cross-functional projects in life sciences, achieving a remarkable 25% increase in departmental productivity through effective project management and collaboration with peers.</li>
                <li>Proficiently integrated and modelled Oracle and SQL databases using Oracle SQL Developer Tool and SQL Server Management Studio, optimizing performance, and supporting project requirements.</li>
                <li>Utilized Informatica to develop diverse data transformations, supporting data warehouse design, and facilitating seamless extraction, transformation, and loading of data into the target system resulting in streamlined operations and successful project outcomes for 5+ clients.</li>
              </ul>
            </div>
          )}
        </div>
        <p className='text-2xl mt-20 border-b-2'>
          Internships
        </p>
        <div className='mb-2'>
          <p className='text-xl mt-10 cursor-pointer hover:text-blue-300 hover:scale-105 transition-transform' onClick={toggleCognizant2Panel}>
            <span className='text-blue-300'>Cognizant</span> | Programmer Analyst Intern (Jan 2020 - May 2020)
          </p>
          {cognizant2PanelVisible && (
            <div className='mt-4 px-4 py-2 bg-gray-900 rounded-lg'>
              <ul className='list-disc pl-6'>
                <li>Under the guidance of experienced mentors, received extensive training in SQL, Python, PySpark, and AWS, gaining valuable insights into industry best practices. Applied this knowledge to achieve successful outcomes for clients.</li>
                <li>Assisted in optimizing SQL queries and Python scripts, contributing to the successful implementation of data solutions, and providing valuable support in meeting project milestones.</li>
              </ul>
            </div>
          )}
        </div>
        <div className='mb-2'>
          <p className='text-xl cursor-pointer hover:text-blue-300 hover:scale-105 transition-transform' onClick={toggleGalificPanel}>
            <span className='text-blue-300'>Galific Arts</span> | Frontend Developer Intern (Jun 2018 - Jul 2018)
          </p>
          {galificPanelVisible && (
            <div className='mt-4 px-4 py-2 bg-gray-900 rounded-lg'>
              <ul className='list-disc pl-6'>
                <li>Collaborated with creative teams to design visually appealing and responsive websites using HTML, CSS, Bootstrap and JavaScript for 2 clients, improving site efficiency by 35%. Demonstrated strong technical skills and a collaborative approach to drive high-quality outcomes and client satisfaction.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Work;


