import React from 'react'
import { SkillCard3 } from '../components/SkillCard'
import Lang_images from '../constants/Lang_images'

const image_card = () => {
  return(
    <img
      // src={reactjs}
      alt="reactjs"
      className="mx-auto w-10 h-10 object-contain"
    />
  )
}

const Project_card = ({project}) => {
  return (
      <SkillCard3
          imgSrc={project.imgSrc}
          altText={project.altText}
          title={project.title}
          description={project.description}
          info={project.info}
          languages={project.languages}
      />
  )
}


export default Project_card;
