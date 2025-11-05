import React from 'react'

const Projects = ({content}) => {
  return (
    <>
        {content.projects.map((project, index) => (
            <div key={index} className='pb-10'>
                <h1 className="text-2xl font-bold text-white text-left font-exo2-regular">{project.title}</h1>
                <h2 className="text-lg text-white text-left font-exo2-sm pb-2">{project.subtitle}</h2>
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className='w-full md:w-4/5 pb-2'
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-white text-left font-exo2-p">{project.description}</p>
                <hr className="my-2"  />
                <p className="text-white text-left font-exo2-p my-2">Built with: {project.builtWith}</p>
            </div>
        ))}
    </>
  )
}

export default Projects