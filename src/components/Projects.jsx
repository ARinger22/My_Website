import React from 'react'
import { SkillCard3 } from './SkillCard'
import image from '../constants/Project_images'
import Projectcard from '../constants/Project_card';

export default function Projects() {
  let language = [];
  let projects = [
    {
      imgSrc: image.machine,
      altText: "machine",
      title: "Handwritten Digit Predictor",
      description: 'Website | Machine Learning Model',
      info: "Additional information about the card goes here.",
      languages: 'html , css, javascript',
    },
    {
      imgSrc: image.gui,
      altText: "GUi",
      title: "RISC-V Simulator",
      description: 'Course Project | Data Structure',
      info: "Additional information about the card goes here.",
    },
    {
      imgSrc: image.cycle,
      altText: "Cycle",
      title: "Cycle Theft Model",
      description: 'Hackathon Project | Machine Learning',
      info: "Additional information about the card goes here.",
    },
    {
      imgSrc: image.note_bot,
      altText: "commercial",
      title: "Store App",
      description: 'Android Application | Commercial',
      info: "Additional information about the card goes here.",
    },
    {
      imgSrc: image.blockchain,
      altText: "commercial",
      title: "Store App",
      description: 'Android Application | Commercial',
      info: "Additional information about the card goes here.",
    },
    {
      imgSrc: image.commercial,
      altText: "commercial",
      title: "Store App",
      description: 'Android Application | Commercial',
      info: "Additional information about the card goes here.",
    },
    {
      imgSrc: image.automotive,
      altText: "commercial",
      title: "Store App",
      description: 'Android Application | Commercial',
      info: "Additional information about the card goes here.",
    },
    {
      imgSrc: '',
      altText: "commercial",
      title: "WhatsApp Automation",
      description: 'Automation Script | To Send WhatsApp Messages',
      info: "Additional information about the card goes here.",
    },
    {
      imgSrc: image.xv6,
      altText: "commercial",
      title: "Store App",
      description: 'Android Application | Commercial',
      info: "Additional information about the card goes here.",
    }
  ]

  return (
    <div className='h-5500 flex items-center justify-center bg-gradient-to-b from-black to-gray-700' id="Project_page">
      <div className='flex-row mb-16'>
        <h1 className='flex justify-center text-blue-600 text-5xl font-bold mt-16'>Projects</h1>
        <div className="mx-20 grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-16">
          {projects.map((project) => {
            return <Projectcard project={project} />
          })
          }
        </div>
      </div>
    </div>
  );
}
