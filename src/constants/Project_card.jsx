import React from 'react'
import { SkillCard3 } from '../components/SkillCard'

const Project_card = ({project}) => {
  return (
    <>
      <SkillCard3
          imgSrc={project.imgSrc}
          altText={project.altText}
          title={project.title}
          description={project.description}
          info={project.info}
          languages={project.languages}  
      />
    </>
  )
}

export default Project_card;
