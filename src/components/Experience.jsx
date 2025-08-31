import React from 'react'
import styled from 'styled-components';
import { slideInFromLeft, slideInFromRight } from './Slide'
import mentorsity from '../assets/mentorsity_image.png'
import automotive from '../assets/automotive.png'
import roundglass from '../assets/RoundGlass_logo.svg'
import reactjs from '../assets/react-2.svg'
import nodejs from '../assets/nodejs-icon.svg'
import postgres from '../assets/postgresql.svg'
import { Skills } from './Slide';
import javascript from '../assets/javascript-1.svg'
import html from '../assets/html-1.svg'
import css from '../assets/css-3.svg'
import python from '../assets/python-5.svg'
import flourish from '../assets/Flourish.svg'
import tailwindcss from '../assets/tailwind-css-2.svg'
import graphAPI from '../assets/GraphAPIlogo.png'
import azure from '../assets/Microsoft_Azure.svg.png'
import teams from '../assets/Teams_Logo.svg'
import socket from '../assets/socketio-icon.svg'

const Skill = styled.div` 
  animation : ${slideInFromLeft} 0.3s ease-in-out;
`;

const Experience2 = styled.div`
  animation : ${slideInFromRight} 0.3s ease-in-out;
`;

const ProfilePic = styled.img`
  animation : ${slideInFromLeft} 0.2s ease-in-out;
`;

export default function Experience() {
  return (
    <div className='flex flex-col w-full gap-10 p-10 items-center justify-center bg-gradient-to-b from-black to-gray-700' id="Experience_page">
      <h1 className='flex justify-center text-white text-5xl font-[400] ' data-aos="fade-up">Experiences</h1>
      <div className='grid grid-cols-1 xl2:grid-cols-2 w-full gap-10' >
        <Skill className="md:flex-row flex flex-col w-full  gap-5 items-center bg-gray-700 rounded-lg p-10 border border-purple-200"
        data-aos="fade-right"
        >
          <div className="md:w-[350px]">
            <img src={roundglass} alt="mentorsity" className="w-full object-contain" />
          </div>
          <div className="flex flex-col justify-between">
            <Skills className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Jr. Associate Software Engineer</Skills>
            <div className="flex flex-col gap-3 font-bold text-white dark:text-gray-400">
              <p>
                Working as a Data Analyst, handling data processing with Python and creating visualizations using Flourish SDK and Flourish API.
              </p>
              <p>
                In addition, working as a web developer by integrating visualizations into the website using ReactJS, HTML, CSS, JavaScript, NodeJS
              </p>
              <div className='font-bold text-red-400'>June 2025</div>
              <div className='grid grid-cols-8'>
                <img
                  src={reactjs}
                  alt="reactjs"
                  className="w-10 h-10 object-contain"
                />
                <img
                  src={nodejs}
                  alt="nodejs"
                  className="w-10 h-10 object-contain"
                />
                <img
                  src={python}
                  alt="python"
                  className=" w-10 h-10 object-contain"
                />
                <img
                  src={flourish}
                  alt="flourish"
                  className=" w-14 h-14 pb-1 object-contain"
                />
                <img
                  src={css}
                  alt="css"
                  className=" w-10 h-10 object-contain"
                />
                <img
                  src={html}
                  alt="html"
                  className=" w-10 h-10 object-contain"
                />
              </div>
            </div>
          </div>
        </Skill>

        <Skill className="md:flex-row flex flex-col w-full  gap-5 items-center bg-gray-700 rounded-lg p-10 border border-purple-200"
        data-aos="fade-right"
        >
          <div className="md:w-[500px]   ">
            <img src={roundglass} alt="mentorsity" className="w-full  object-contain" />
          </div>
          <div className="flex flex-col justify-between">
            <Skills className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Software Engineer Internship</Skills>
            <div className="flex flex-col gap-3 font-bold text-white dark:text-gray-400">
              <p>
                Working on designing a dynamic and user-friendly MS Teams Tab App using cutting-edge technologies, including ReactJS,
                Fluent UI, Tailwindcss and NodeJs, used Azure for its deployment.
              </p>
              <p>
                Worked on Microsoft Graph API to integrate Notfication sending, Teams and channel formation, sending messages
                in chat, Bot integration directly from the Tab app. Also found a bug and put an issue in their open source repository.
              </p>
              <div className='font-bold text-red-400'>June 2024 - December 2025</div>
              <div className='grid grid-cols-8'>
                <img
                  src={html}
                  alt="html"
                  className=" w-10 h-10 object-contain"
                />
                <img
                  src={reactjs}
                  alt="reactjs"
                  className="w-10 h-10 object-contain"
                />
                <img
                  src={nodejs}
                  alt="nodejs"
                  className="w-10 h-10 object-contain"
                />
                <img
                  src={socket}
                  alt="socket"
                  className="w-10 h-10 object-contain"
                />
                <img
                  src={tailwindcss}
                  alt="python"
                  className=" w-10 h-10 object-contain"
                />
                <img
                  src={teams}
                  alt="teams"
                  className=" w-10 h-10 object-contain"
                />
                <img
                  src={graphAPI}
                  alt="flourish"
                  className=" w-10 h-10 object-contain"
                />
                <img
                  src={azure}
                  alt="azure"
                  className=" w-10 h-10 object-contain"
                />
              </div>
            </div>
          </div>
        </Skill>

        <Skill className="md:flex-row flex flex-col w-full  gap-5 items-center bg-gray-700 rounded-lg p-10 border border-purple-200"
        data-aos="fade-right"
        >
          <div className="md:w-[500px]   ">
            <img src={mentorsity} alt="mentorsity" className="w-full  object-contain" />
          </div>
          <div className="flex flex-col justify-between">
            <Skills className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Backend Developer Internship</Skills>
            <div className="flex flex-col gap-3 font-bold text-white dark:text-gray-400">
              <p>
                Designed a dynamic and user-friendly website using cutting-edge technologies, including ReactJS and PostgreSQL,
                resulting in a highly responsive and visually appealing platform.
              </p>
              <p>
                Collaborated with a cross-functional team of designers and developers to make a seamless and intuitive user interface.
              </p>
              <div className='font-bold text-red-400'>September 2023 - December 2023</div>
              <div className='grid grid-cols-8'>
                <img
                  src={reactjs}
                  alt="reactjs"
                  className="mx-auto w-10 h-10 object-contain"
                />
                <img
                  src={nodejs}
                  alt="nodejs"
                  className="mx-auto w-10 h-10 object-contain"
                />
                <img
                  src={postgres}
                  alt="postgres"
                  className="mx-auto w-10 h-10 object-contain"
                />
              </div>
            </div>
          </div>
        </Skill>

        <Skill className="md:flex-row flex flex-col w-full  gap-5 items-center bg-gray-700 rounded-lg p-10 border border-purple-200"
        data-aos="fade-right"
        >
          <div className="md:w-[400px]  ">
            <img src={automotive} alt="automotive" className="w-full  object-contain" />
          </div>
          <div className="flex flex-col  justify-between">
            <Skills className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Automotive Club IIT Ropar</Skills>
            <div className="flex flex-col gap-3 font-bold text-white dark:text-gray-400">
              <p>
                Website developed specifically for the Automotive Club of IIT Ropar.
                for broadcasting updates, posting event held by club, and displaying Winner of the events.
              </p>
              <p>
                Pictures of the events and winners are uploaded, 
                so that everybody will be having the chance of seeing their pictures of the events where they participated.
              </p>
              <div className='font-bold text-red-400'>December 2022 - January 2023</div>
              <div className='grid grid-cols-8'>
                <img
                  src={html}
                  alt="html"
                  className="mx-auto w-10 h-10 object-contain"
                />
                <img
                  src={css}
                  alt="css"
                  className="mx-auto w-10 h-10 object-contain"
                />
                <img
                  src={javascript}
                  alt="javascript"
                  className="mx-auto w-10 h-10 object-contain"
                />
              </div>
            </div>
          </div>
        </Skill>
      </div>
    </div>
  )
}
