import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../assets/my_image.png';
import styled from 'styled-components';
import python from '../assets/python-5.svg'
import clang from '../assets/c-1.svg'
import c2lang from '../assets/c.svg'
import javascript from '../assets/javascript-1.svg'
import java from '../assets/java-logo.svg'
import reactjs from '../assets/react-2.svg'
import nodejs from '../assets/nodejs-icon.svg'
import postgres from '../assets/postgresql.svg'
import solidity from '../assets/solidity.svg'
import tailwindcss from '../assets/tailwind-css-2.svg'
import chash from '../assets/c--4.svg'
import wordpress from '../assets/wordpress-logo.svg'
import rpi from '../assets/rpi.svg'
import microcontroller from '../assets/microcontroller.png'
import arduinoide from '../assets/arduinoide.png'
import mongodb from '../assets/mongodb.svg'
import ganache from '../assets/ganache-icon.svg'
import graph from '../assets/GraphAPIlogo.png'
import socket from '../assets/socketio-icon.svg'
import SkillCard from './SkillCard';
import { slideInFromLeft, slideInFromRight, gradientOverlay } from './Slide'

const ProfilePic = styled.img`
  animation : ${slideInFromLeft} 0.3s ease-in-out;
`;
const Info = styled.div`
  animation: ${slideInFromRight} 0.3s ease-in-out;
`;

const Skill = styled.div`
  animation : ${slideInFromLeft} 0.3s ease-in-out;
`;

const gradientAnimation = {
  position: 'relative',
  overflow: 'hidden',
};

const handleHover = (event) => {
  event.currentTarget.firstChild.style.transform = 'translateX(100%)';
};

const handleMouseLeave = (event) => {
  event.currentTarget.firstChild.style.transform = 'translateX(-100%)';
};

export default function About() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='flex flex-col gap-10 p-10 bg-gradient-to-b from-black to-gray-700 ' id="About_page" >
      <div className="lg:flex-row flex flex-col items-center justify-center w-full lg:px-5 py-5 border border-purple-200 rounded-lg bg-gray-700" >
        <div className="min-w-[400px] w-full max-w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-white shadow-md cursor-pointer" data-aos="fade-right">
          <ProfilePic src={image} alt="profile" className="w-full h-full object-cover" />
        </div>
        <Info className="flex flex-col justify-center gap-4 px-10 leading-normal" data-aos="fade-left">
          <h5 className="text-2xl font-bold dark:text-white">I'm Arpit Kumar Gautam</h5>
          <div className="font-bold text-gray-300 flex flex-col gap-2">
            <p>
              I am Arpit Kumar Gautam, currently pursuing my B.Tech in Computer Science and Engineering at the
              Indian Institute of Technology, Ropar (2021-2025). Over the years, I have built a strong foundation
              in computer science, while exploring diverse areas like web development, app development, and machine learning.
            </p>
            <p>
              I love tackling challenging problems and learning new technologies hands-on. Whether it's building
              a responsive web app, designing algorithms, or experimenting with AI models, I enjoy combining theory
              with practical applications. I believe in continuous learning and pushing my boundaries to improve
              with every project.
            </p>
            <p>
              Outside of tech, I enjoy reading about emerging technologies, participating in coding competitions,
              and collaborating with peers on innovative projects. My goal is to contribute to impactful solutions
              that make a difference, while growing as a versatile software engineer.
            </p>
          </div>
        </Info>
      </div>
      <div className='flex flex-col items-center justify-center gap-8 w-full' data-aos="fade-up">
        <h1 className='flex items-center justify-center text-white text-5xl font-[400] '>Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-right"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Skill className='bg-gradient-to-r'>
              <SkillCard color="#FFCE14" imgSrc={python} altText="Python" title="Python" />
            </Skill>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-right"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Skill className='bg-gradient-to-r'>
              <SkillCard color="#5C6BC0" imgSrc={clang} altText="C" title="C" />
            </Skill>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-left"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Info className='bg-gradient-to-r'>
              <SkillCard color="#659AD2" imgSrc={c2lang} altText="C++" title="C++" />
            </Info>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-left"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Info className='bg-gradient-to-r'>
              <SkillCard color="#61DAFB" imgSrc={chash} altText="C#" title="C#" />
            </Info>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-right"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Skill className='bg-gradient-to-r'>
              <SkillCard color="#fefe01" imgSrc={javascript} altText="JavaScript" title="JavaScript" />
            </Skill>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-right"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Skill className='bg-gradient-to-r'>
              <SkillCard color="#18B5B9" imgSrc={java} altText="Java" title="Java" />
            </Skill>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-right"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Skill className='bg-gradient-to-r'>
              <SkillCard color="#F44336" imgSrc={solidity} altText="solidity" title="Solidity" />
            </Skill>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-left"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Info className='bg-gradient-to-r'>
              <SkillCard color="#00B871" imgSrc={postgres} altText="postgres" title="PostgreSQL" />
            </Info>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-left"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Info className='bg-gradient-to-r'>
              <SkillCard color="#fc4503" imgSrc={reactjs} altText="reactjs" title="ReactJS" />
            </Info>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-right"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Skill className='bg-gradient-to-r'>
              <SkillCard color="#1B73BA" imgSrc={nodejs} altText="nodejs" title="NodeJS" />
            </Skill>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-right"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Skill className='bg-gradient-to-r'>
              <SkillCard color="#18B5B9" imgSrc={tailwindcss} altText="Tailwind" title="Tailwind" />
            </Skill>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-right"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Skill className='bg-gradient-to-r'>
              <SkillCard color="#fffB5B9" imgSrc={wordpress} altText="WordPress" title="WordPress" />
            </Skill>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-right"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Skill className='bg-gradient-to-r'>
              <SkillCard color="#18fdB9" imgSrc={mongodb} altText="mongodb" title="MondoDB" />
            </Skill>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-right"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Skill className='bg-gradient-to-r'>
              <SkillCard color="#18B5B9" imgSrc={rpi} altText="Rpi" title="Rpi" />
            </Skill>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-right"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Skill className='bg-gradient-to-r'>
              <SkillCard color="#1015B0" imgSrc={microcontroller} altText="microcontroller" title="Microcontroller" />
            </Skill>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-right"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Skill className='bg-gradient-to-r'>
              <SkillCard color="#1B73BA" imgSrc={arduinoide} altText="arduinoide" title="ArduinoIDE" />
            </Skill>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-left"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Info className='bg-gradient-to-r'>
              <SkillCard color="#659AD2" imgSrc={graph} altText="graph" title="Graph API" />
            </Info>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-left"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Info className='bg-gradient-to-r'>
              <SkillCard color="#6500D2" imgSrc={socket} altText="socket" title="Socket.IO" />
            </Info>
          </div>
          <div
            className='rounded-lg cursor-pointer'
            data-aos="fade-left"
            style={gradientAnimation}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
          >
            <div style={gradientOverlay}></div>
            <Info className='bg-gradient-to-r'>
              <SkillCard color="#F44336" imgSrc={ganache} altText="ganache" title="Ganache" />
            </Info>
          </div>
        </div>
      </div>
    </div>
  );
}