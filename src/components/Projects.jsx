import React from 'react'
import image from '../constants/Project_images'
import Projectcard from '../constants/Project_card';
import Lang_images from '../constants/Lang_images'

export default function Projects() {
  let projects = [
    {
      imgSrc: image.machine,
      altText: "machine",
      title: "Handwritten Digit Predictor",
      description: 'Website | Machine Learning Model',
      info: "model to predict the hand written digits ",
      languages: [Lang_images.python, Lang_images.html, Lang_images.javascript],
    },
    {
      imgSrc: image.gui,
      altText: "GUi",
      title: "RISC-V Simulator",
      description: 'Course Project | Data Structure',
      info: "Additional information about the card goes here.",
      languages: [Lang_images.python, Lang_images.clang, Lang_images.c2lang],
    },
    {
      imgSrc: image.cycle,
      altText: "Cycle",
      title: "Cycle Theft Model",
      description: 'Hackathon Project | Machine Learning',
      info: "Additional information about the card goes here.",
      languages : [Lang_images.python, Lang_images.opencv, Lang_images.colab]
    },
    {
      imgSrc: image.note_bot,
      altText: "noteapp",
      title: "Notes App",
      description: 'Android Application | Notes Bot',
      info: "Mobile Application to add the notes.",
      languages: [Lang_images.reactjs, Lang_images.nodejs],
    },
    {
      imgSrc: image.blockchain,
      altText: "Blockchain",
      title: "IOT Blockchain",
      description: 'Website | Blockchain Security',
      info: "Additional information about the card goes here.",
      languages: [Lang_images.python, Lang_images.solidity, Lang_images.reactjs],
    },
    {
      imgSrc: image.commercial,
      altText: "commercial",
      title: "Store App",
      description: 'Android Application | Commercial',
      info: "Additional information about the card goes here.",
      languages: [Lang_images.reactjs, Lang_images.redux],
    },
    {
      imgSrc: image.steam,
      altText: "Steam",
      title: "Steam Database",
      description: 'Backend | Store Games & Authors',
      info: "Additional information about the card goes here.",
      languages: [Lang_images.postgres, Lang_images.python, Lang_images.javascript],
    },
    {
      imgSrc: image.automotive,
      altText: "Automotive",
      title: "IIT Ropar Club Website",
      description: 'Website | Club Activities',
      info: "Additional information about the card goes here.",
      languages: [Lang_images.html, Lang_images.css, Lang_images.javascript],
    },
    {
      imgSrc: '',
      altText: "Script",
      title: "WhatsApp Automation",
      description: 'Python Script | To Send WhatsApp Messages',
      info: "Additional information about the card goes here.",
      languages: [Lang_images.python, Lang_images.selenium],
    },
    {
      imgSrc: image.xv6,
      altText: "xv5",
      title: "XV6 Update",
      description: 'Course Project | Commands Added',
      info: "Additional information about the card goes here.",
      languages: [Lang_images.clang],
    },
    {
      imgSrc: image.QLearning,
      altText: "QLearning",
      title: "QLearning Algo",
      description: 'Course Project | Reinforcement Learning',
      info: "Additional information about the card goes here.",
      languages: ['html', 'css', 'javascript'],
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
