import React from 'react'
import styled from 'styled-components';
import { slideInFromLeft, slideInFromRight } from './Slide'
import mentorsity from '../assets/mentorsity.jpeg'
import automotive from '../assets/automotive.png'
import reactjs from '../assets/react-2.svg'
import nodejs from '../assets/nodejs-icon.svg'
import postgres from '../assets/postgresql.svg'
import { Skills } from './Slide';
import javascript from '../assets/javascript-1.svg'
import html from '../assets/html-1.svg'
import css from '../assets/css-3.svg'

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
    <div className='h-5500 flex items-center justify-center bg-gradient-to-b from-black to-gray-700' id="Experience_page">
      <div className='mx-10'>
        <h1 className='flex mt-4 justify-center text-blue-600 text-5xl font-bold  mt-10'>Experiences</h1>
        <div className='flex-row mt-16 mb-16 hover:bg-gradient-to-r' >
          <Skill className="flex flex-col items-center bg-gradient-to-r border border-purple-400 rounded-lg shadow md:flex-row hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800" >
            <div className="mx-3 overflow-hidden rounded-full border-4 border-white shadow-md">
              <img src={mentorsity} alt="mentorsity" className="w-40 h-40 rounded-full" />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <Skills className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Web Development Internship</Skills>
              <p className="mb-3 font-bold text-white dark:text-gray-400"> Developed a dynamic and user-friendly website using cutting-edge  
                technologies, including ReactJS and <br/> PostgreSQL, resulting in a highly responsive and visually appealing platform.  
                Collaborated with a cross <br /> functional team of designers and developers to make a seamless and intuitive user interface.</p>
              <div className='font-bold text-red-400'>September 2023 - December 2023</div>
              <div className='mt-1 grid grid-cols-8'>
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
          </Skill>
        </div>
        <Experience2 className='flex-row mt-16 mb-16' >
          <div className="flex flex-col items-center bg-gradient-to-r border border-purple-400 rounded-lg shadow md:flex-row hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >
            <div className="mx-3 overflow-hidden rounded-full border-4 border-white shadow-md">
              <ProfilePic src={automotive} alt="automotive" className="w-40 h-40 rounded-full" />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <Skills className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Automotive Club IIT Ropar</Skills>
              <p className="mb-3 font-bold text-white dark:text-gray-400"> Website developed specifically for the Automotive Club of IIT Ropar.
                for broadcasting updates, posting <br /> event held by club, and displaying Winner of the events. Pictures of the events and winners are uploaded, <br/>
                so that everybody will be having the chance of seeing their pictures of the events where they participated.
              </p>
              <div className='font-bold text-red-400'>December 2022 - January 2023</div>
              <div className='mt-1 grid grid-cols-8'>
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
        </Experience2>
      </div>
    </div>
  )
}
