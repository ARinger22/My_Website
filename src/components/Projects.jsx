import React from 'react'
import image from '../constants/Project_images'
import Projectcard from '../constants/Project_card';

export default function Projects() {
  let projects = [
    // https://sites.google.com/view/goyalpuneet/phd-conference-grants
    {
      imgSrc: image.living,
      altText: "Machine Learning",
      title: "Roundglass MS Teams Living Tab App",
      link: 'https://drive.google.com/file/d/15MElb9v7LgM49uzuONZTL7tMeDE7C6KP/view',
      description: 'Teams Tab App | Web Development',
      info: "A Microsoft Teams Tab App to display the wellness activities and challenges for the employees of RoundGlass company. Microsoft Graph API to integrate Notfication. Socket to realtime chatting",
      languages: ['reactjs', 'nodejs', 'tailwindcss', 'socket', 'graph'],
    },
    {
      imgSrc: image.emotion,
      altText: "Machine Learning",
      title: "EgoCentric Emotional Context Analysis",
      link: 'https://github.com/ARinger22/Emotional-Context-Analysis.git',
      description: 'AR Glasses | Machine Learning',
      info: "AR Glasses to detect the emotions of the person using body, hand and fact keypoints extracted via ViTPose in front of you and display it on the display.",
      languages: ['python', 'rpi', 'microcontroller', 'arduinoide', 'opencv'],
    },
    {
      imgSrc: image.condense,
      altText: "Web Development",
      title: "Condense",
      link: 'https://github.com/ARinger22/Condense.git',
      description: 'Website | Team Project',
      info: "web application that generates transcripts, summaries from Youtube video URLs and audio and video files. Designed a PyTorch LSTM model for accurate sentiment and statistics analysis of Youtube videos",
      languages: ['reactjs', 'nodejs', 'mongodb', 'tailwindcss', 'python' ],
    },
    {
      imgSrc: image.phd,
      altText: "Web Development",
      title: "PHD Conference Grants Portal",
      link: 'https://sites.google.com/view/goyalpuneet/phd-conference-grants',
      description: 'Collage Website | Web Development',
      info: "simplify the cumbersome and time-consuming process of applying for PHD Conference grants. Students can easily apply for domestic or international PHD conferences and track the status of their application.",
      languages: ['reactjs', 'nodejs', 'mongodb', 'tailwindcss'],
    },
    {
      imgSrc: image.gui,
      altText: "GUi",
      title: "RISC-V Simulator",
      link: 'https://github.com/ARinger22/CS_204_RISCV.git',
      description: 'Assembly Language Simulator | Data Structure',
      info: "Simulator to run the RISC-V Assembly Language Code on GUI where we can see the changes in the registers and memory.",
      languages: ['python', 'clang', 'c2lang'],
    },
    {
      imgSrc: image.machine,
      altText: "machine",
      title: "Handwritten Digit Predictor",
      link: 'https://aringer22.github.io/Math_Garden_ML',
      description: 'Website | Machine Learning',
      info: "Website to predict the hand written and digits written using the mouse cursor on canvas digits using trained model.",
      languages: ['python', 'html', 'javascript', 'css'],
    },
    {
      imgSrc: image.cycle,
      altText: "Cycle",
      title: "Cycle Theft Model",
      link: 'https://github.com/ARinger22/Night_Watch_ML.git',
      description: 'Hackathon Project | Machine Learning',
      info: "Machine Learning Model to predict the cycle theft and suspicious activity of cycle stealing using camera footage or videos.",
      languages : ['python', 'opencv', 'colab']
    },
    {
      imgSrc: image.note_bot,
      altText: "noteapp",
      title: "Notes App",
      link: 'https://github.com/ARinger22/Bot_Note_App.git',
      description: 'Android Application | App Development',
      info: "A simple notes app to take notes and save them.",
      languages: ['reactjs', 'nodejs', 'mongodb'],
    },
    {
      imgSrc: image.blockchain,
      altText: "Blockchain",
      title: "IOT Blockchain",
      link: 'https://github.com/ARinger22/IOT_BlockChain.git',
      description: 'Website | Blockchain Security',
      info: "A web application for voting solution to store the IOT data on the blockchain to make it secure and immutable.",
      languages: ['python', 'solidity', 'reactjs', 'ganache'],
    },
    {
      imgSrc: image.steam,
      altText: "Steam",
      title: "Steam Database",
      link: 'https://github.com/ARinger22/SteamDataBase.git',
      description: 'Backend | Store Games & Authors',
      info: "Database to store the games and authors of the games with their details. A replica of steam database.",
      languages: ['postgres', 'python', 'javascript'],
    },
    {
      imgSrc: image.script,
      altText: "Script",
      title: "WhatsApp Automation",
      link: 'https://github.com/ARinger22/Automate_Whatsapp_Message.git',
      description: 'Python Script | Automation',
      info: "Python Script to send messages to multiple contacts on WhatsApp at different times.",
      languages: ['python', 'selenium', 'chrome'],
    }
  ]

  return (
    <div className='flex flex-col p-10 gap-10 items-center justify-center bg-gradient-to-b from-black to-gray-700' id="Project_page">
        <h1 className='flex justify-center text-white text-5xl font-[400] ' >Projects</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {projects.map((project, i) => {
            return <Projectcard key={i} project={project} />
          })
          }
        </div>
    </div>
  );
}
