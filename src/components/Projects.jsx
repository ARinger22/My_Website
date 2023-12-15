import React from 'react'
import image from '../constants/Project_images'
import Projectcard from '../constants/Project_card';

export default function Projects() {
  let projects = [
    {
      imgSrc: image.machine,
      altText: "machine",
      title: "Handwritten Digit Predictor",
      description: 'Website | Machine Learning Model',
      info: "model to predict the hand written digits ",
      languages: ['python', 'html', 'javascript'],
    },
    {
      imgSrc: image.gui,
      altText: "GUi",
      title: "RISC-V Simulator",
      description: 'Course Project | Data Structure',
      info: "Additional information about the card goes here.",
      languages: ['python', 'clang', 'c2lang'],
    },
    {
      imgSrc: image.cycle,
      altText: "Cycle",
      title: "Cycle Theft Model",
      description: 'Hackathon Project | Machine Learning',
      info: "Additional information about the card goes here.",
      languages : ['python', 'opencv', 'colab']
    },
    {
      imgSrc: image.note_bot,
      altText: "noteapp",
      title: "Notes App",
      description: 'Android Application | Notes Bot',
      info: "Mobile Application to add the notes.",
      languages: ['reactjs', 'nodejs'],
    },
    {
      imgSrc: image.blockchain,
      altText: "Blockchain",
      title: "IOT Blockchain",
      description: 'Website | Blockchain Security',
      info: "Additional information about the card goes here.",
      languages: ['python', 'solidity', 'reactjs'],
    },
    {
      imgSrc: image.commercial,
      altText: "commercial",
      title: "Store App",
      description: 'Android Application | Commercial',
      info: "Additional information about the card goes here.",
      languages: ['reactjs', 'redux'],
    },
    {
      imgSrc: image.steam,
      altText: "Steam",
      title: "Steam Database",
      description: 'Backend | Store Games & Authors',
      info: "Additional information about the card goes here.",
      languages: ['postgres', 'python', 'javascript'],
    },
    {
      imgSrc: image.automotive,
      altText: "Automotive",
      title: "IIT Ropar Club Website",
      description: 'Website | Club Activities',
      info: "Additional information about the card goes here.",
      languages: ['html', 'css', 'javascript'],
    },
    {
      imgSrc: '',
      altText: "Script",
      title: "WhatsApp Automation",
      description: 'Python Script | To Send WhatsApp Messages',
      info: "Additional information about the card goes here.",
      languages: ['python', 'selenium'],
    },
    {
      imgSrc: image.xv6,
      altText: "xv5",
      title: "XV6 Update",
      description: 'Course Project | Commands Added',
      info: "Additional information about the card goes here.",
      languages: ['clang'],
    },
    {
      imgSrc: image.QLearning,
      altText: "QLearning",
      title: "QLearning Algo",
      description: 'Course Project | Reinforcement Learning',
      info: "Additional information about the card goes here.",
      languages: ['python'],
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
