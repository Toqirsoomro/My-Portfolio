import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="fade-down-right">
            <h2 className='text-4xl md:text-5'>Technologies  I work With</h2>
            <p className='text-gray-500 pt-2'>I have a solid foundation in web development , specializing in HTML, CSS, and Typescript.My experience extends to using frameworks like React and Next.js to create dynamic and user-freindly applications.I'm also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest tec    hnologies to enhance my skill set and contribute effectively to projects.</p>
        </div>
        <div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="fade-down-right">Typescript</h2>
                    <h2 data-aos="fade-down-right">React.JS</h2>
                    <h2 data-aos="fade-down-right">Next.JS</h2>
                </div>
                <div className='space-y-2'>
                    <h2 data-aos="fade-down-right">Tailwind</h2>
                    <h2 data-aos="fade-down-right">CSS</h2>
                    <h2 data-aos="fade-down-right">Node.JS</h2>
                </div>
            </div>
        </div>
      </div>
    </div>
   )
}

export default Skills
