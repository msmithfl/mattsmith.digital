import React from 'react'

const Experience = ({content}) => {
  return (
    <>
        {content.jobs.map((job, index) => (
            <div key={index} className='pb-10'>
                <h1 className="text-2xl font-bold text-white text-left font-exo2-regular">{job.title}</h1>
                <h2 className="text-lg text-white text-left font-exo2-sm">{job.subtitle}</h2>
                <hr className="my-2" />
                <p className="text-white text-left font-exo2-p">{job.description}</p>
            </div>
        ))}
     </>
  )
}

export default Experience