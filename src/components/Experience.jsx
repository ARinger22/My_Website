import React from 'react'
import styled, { keyframes } from 'styled-components';
import SkillCard, { SkillCard2 } from './SkillCard';
import { slideInFromLeft } from './Slide'
import mentorsity from '../assets/mentorsity.jpeg'
import mentor from '../assets/mentorsity_image.png'
import python from '../assets/python-5.svg'
import clang from '../assets/c-1.svg'
import c2lang from '../assets/c.svg'
import javascript from '../assets/javascript-1.svg'
import reactjs from '../assets/react-2.svg'
import nodejs from '../assets/nodejs-icon.svg'
import postgres from '../assets/postgresql.svg'
import solidity from '../assets/solidity.svg'
import tailwindcss from '../assets/tailwind-css-2.svg'
import chash from '../assets/c--4.svg'
import { Skills } from './Slide';


const Skill = styled.div`
  animation : ${slideInFromLeft} 0.2s ease-in-out;
`;

const ProfilePic = styled.img`
  animation : ${slideInFromLeft} 0.2s ease-in-out;
`;

export default function Experience() {
  return (
    <div className='h-5500 flex items-center justify-center bg-gradient-to-b from-black to-gray-700' id="Experience_page">
      <div className=''>
        <h1 className='flex mt-4 justify-center text-blue-600 text-5xl font-bold text-white mt-10'>Experiences</h1>
        <div className='flex-row mt-16 mb-16' >
          <div className="flex flex-col items-center bg-gradient-to-r border border-purple-400 rounded-lg shadow md:flex-row hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >
            <div className="mx-3 overflow-hidden rounded-full border-4 border-white shadow-md">
              <ProfilePic src={mentorsity} alt="mentorsity" className="w-40 h-40 rounded-full" />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <Skills className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Web Development Intership</Skills>
              <p className="mb-3 font-bold text-white dark:text-gray-400"> Developed a dynamic and user-friendly website using cutting-edge  
                technologies, including  ReactJS <br /> and PostgreSQL, resulting in a highly responsive and visually appealing platform.  
                Collaborated with a <br />cross-functional team of designers and developers to make a seamless and intuitive user interface.</p>
              <div className='font-bold text-red-400'>September 2023 - December 2023</div>
              <div className='mt-1 grid grid-cols-8'>
                <img
                  src={reactjs}
                  alt="reactjs"
                  className="mx-auto w-10 h-10 object-contain"
                />
                <img
                  src={nodejs}
                  alt="reactjs"
                  className="mx-auto w-10 h-10 object-contain"
                />
                <img
                  src={postgres}
                  alt="reactjs"
                  className="mx-auto w-10 h-10 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex-row mt-16 mb-16' >
          <div className="flex flex-col items-center bg-gradient-to-r border border-purple-400 rounded-lg shadow md:flex-row hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >
            <div className="mx-3 overflow-hidden rounded-full border-4 border-white shadow-md">
              <ProfilePic src={mentor} alt="mentorsity" className="w-40 h-40 rounded-full" />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <Skills className="mb-2 text-2xl font-bold tracking-tight dark:text-white">Web Development Intership</Skills>
              <p className="mb-3 font-bold text-white dark:text-gray-400"> Developed a dynamic and user-friendly website using cutting-edge
                technologies, including  ReactJS <br /> and PostgreSQL, resulting in a highly responsive and visually appealing platform.
                Collaborated with a <br />cross-functional team of designers and developers to make a seamless and intuitive user interface.</p>
              <div className='font-bold text-red-400'>September 2023 - December 2023</div>
              <div className='mt-1 grid grid-cols-8'>
                <img
                  src={reactjs}
                  alt="reactjs"
                  className="mx-auto w-10 h-10 object-contain"
                />
                <img
                  src={nodejs}
                  alt="reactjs"
                  className="mx-auto w-10 h-10 object-contain"
                />
                <img
                  src={postgres}
                  alt="reactjs"
                  className="mx-auto w-10 h-10 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
