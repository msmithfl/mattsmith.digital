import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = ({content}) => {
  return (
    <>
        <div className="flex flex-col items-center justify-center text-center py-10">
            <h1 className="text-2xl font-bold text-white text-center font-exo2-regular pb-4">{content.description}</h1>
            <div className="flex space-x-8">
                <a href={`mailto:${content.email}`} target="_blank" rel="noopener noreferrer" aria-label="Email">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white text-4xl hover:text-gray-400" />
                </a>
                <a href={content.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FontAwesomeIcon icon={faLinkedin} className="text-white text-4xl hover:text-gray-400" />
                </a>
                {/* <a href={content.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FontAwesomeIcon icon={faGithub} className="text-white text-4xl hover:text-gray-400" />
                </a> */}
            </div>
        </div>
    </>
  )
}

export default Contact