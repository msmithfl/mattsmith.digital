import React from 'react'

const Devlogs = ({content}) => {
  return (
    <>
        {content.devlogs.slice().reverse().map((devlog, index, arr) => (
            <div key={index} className='pb-10'>
                <h1 className="text-2xl font-bold text-white text-left font-exo2-regular">{devlog.title}</h1>
                <div className="flex justify-center mt-4 pb-2">
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${devlog.videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-white text-left font-exo2-p">{devlog.description}</p>
                
                {index !== arr.length - 1 && <hr className="my-4 border-white" />}
            </div>
        ))}
    </>
  )
}

export default Devlogs