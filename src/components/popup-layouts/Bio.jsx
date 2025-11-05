import React from 'react'

const Bio = ({content}) => {
  return (
    <>
        <div className="flex flex-col items-center justify-center text-left">
            <h1 className="text-2xl font-bold text-white text-left font-exo2-regular pb-4">{content.description}</h1>
        </div>
    </>
  )
}

export default Bio