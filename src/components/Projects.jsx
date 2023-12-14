import React from 'react'
import { Card, SkillCard3 } from './SkillCard'
import automotive from '../assets/automotive.png'
import commercial from '../Project_Images/Amazon_app.png'
import machine from '../Project_Images/Machine_Learning.png'
import GUi from '../Project_Images/GUI.png'

export default function Projects() {
  return (
    <div className='h-5500 flex items-center justify-center bg-gradient-to-b from-black to-gray-700' id="Project_page">
      <div className='mb-16'>
        <h1 className='flex justify-center text-blue-600 text-5xl font-bold text-white mt-16'>Projects</h1>
        <div className="mx-auto grid grid-cols-2 gap-4 mt-16">
          <SkillCard3
            imgSrc={machine}
            altText="machine"
            title="Card Title"
            info="Additional information about the card goes here."
          />
          <SkillCard3
            imgSrc={GUi}
            altText="GUi"
            title="Card Title"
            info="Additional information about the card goes here."
          />
          <SkillCard3
            imgSrc={commercial}
            altText="commercial"
            title="Card Title"
            info="Additional information about the card goes here."
          />
          <SkillCard3
            imgSrc={automotive}
            altText="automotive"
            title="Card Title"
            info="Additional information about the card goes here."
          />
          <SkillCard3
            imgSrc={automotive}
            altText="automotive"
            title="Card Title"
            info="Additional information about the card goes here."
          />
        </div>
      </div>
    </div>
  )
}
