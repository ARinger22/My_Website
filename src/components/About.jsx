import React from 'react';
import image from '../assets/my_image.png';
import styled from 'styled-components';
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
import SkillCard from './SkillCard';
import { slideInFromLeft, slideInFromRight, gradientOverlay} from './Slide'

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
  return (
    <div className='h-5500 flex items-center justify-center bg-gradient-to-b from-black to-gray-700' id="About_page" >
      <div className='mx-10 flex-row mt-16 mb-16' >
        <div className="flex flex-col items-center bg-gradient-to-r border border-purple-400 rounded-lg shadow md:flex-row hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >
          <div className="mx-3 overflow-hidden rounded-full border-4 border-white shadow-md">
            <ProfilePic src={image} alt="profile" className="w-64 h-64 rounded-full cursor-pointer" />
          </div>
          <Info className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-500 dark:text-white">I'm Arpit Kumar Gautam</h5>
            <p className="mb-3 font-bold text-white dark:text-gray-400"> I am currently pursuing my B.Tech in Computer Science from Indian Institute of Technology Ropar.<br />
              I gained a solid foundation in the principles and concepts of computer science.<br />
              I also actively engaged in collaborative projects and team-based assignments,<br /> which allowed me to enhance my
              communication and teamwork abilities.<br /> These experiences fostered a passion for working in a dynamic and fast-paced
              environment.<br />Completing two years of study in Computer Science has laid a strong foundation for my future <br /> endeavors in the field. I
              am eager to apply the knowledge and skills I have acquired to tackle <br /> real-world challenges and contribute to innovative
              projects.<br />
              Thank you for visiting my portfolio. I invite you to explore my work and get in touch to discuss<br /> how we can collaborate
              on [specific types of projects or opportunities].</p>
          </Info>
        </div>
        <div>
          <h1 className='flex mt-4 items-center justify-center text-blue-600 text-5xl font-bold '>Skills</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            <div
              className='rounded-lg cursor-pointer'
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
              style={gradientAnimation}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <div style={gradientOverlay}></div>
              <Skill className='bg-gradient-to-r'>
                <SkillCard color="#F44336" imgSrc={solidity} altText="solidity" title="solidity" />
              </Skill>
            </div>
            <div
              className='rounded-lg cursor-pointer'
              style={gradientAnimation}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <div style={gradientOverlay}></div>
              <Info className='bg-gradient-to-r'>
                <SkillCard color="#00B871" imgSrc={postgres} altText="postgres" title="postgres" />
              </Info>
            </div>
            <div
              className='rounded-lg cursor-pointer'
              style={gradientAnimation}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <div style={gradientOverlay}></div>
              <Info className='bg-gradient-to-r'>
                <SkillCard color="#fc4503" imgSrc={reactjs} altText="reactjs" title="reactjs" />
              </Info>
            </div>
            <div
              className='rounded-lg cursor-pointer'
              style={gradientAnimation}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <div style={gradientOverlay}></div>
              <Skill className='bg-gradient-to-r'>
                <SkillCard color="#1B73BA" imgSrc={nodejs} altText="nodejs" title="nodejs" />
              </Skill>
            </div>
            <div
              className='rounded-lg cursor-pointer'
              style={gradientAnimation}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <div style={gradientOverlay}></div>
              <Skill className='bg-gradient-to-r'>
                <SkillCard color="#18B5B9" imgSrc={tailwindcss} altText="Tailwind" title="Tailwind" />
              </Skill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}