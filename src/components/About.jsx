import React from 'react';
import image from '../assets/my_image.png';
import styled, { keyframes } from 'styled-components';

const slideInFromLeft = keyframes`
      from {
        transform: translateX(-50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
`;

const slideInFromRight = keyframes`
      from {
        transform: translateX(50px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
`;

const slideInFromTop = keyframes`
      from {
        transform: translateY(-50px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
`;

const ProfilePic = styled.img`
  animation : ${slideInFromLeft} 0.1s ease-in-out;
`;
const Info = styled.div`
  animation: ${slideInFromRight} 0.1s ease-in-out;
`;

function SkillCard({ color, imgSrc, altText, title }) {
  return (
    <div className={`border border-gray-200 rounded-lg shadow p-4 hover:bg-gray-100`} style={{ borderColor: color }}>
      <div className="relative">
        <img
          src={imgSrc}
          alt={altText}
          className="mx-auto w-20 h-20 object-contain"
          style={{ borderColor: color }}
        />
        <h4 className="text-center mt-2">{title}</h4>
        <span className="border" style={{ backgroundColor: color }}></span>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className='h-5500 flex items-center justify-center bg-gradient-to-b from-black to-gray-700' id="About_page" >
      <div className='flex-row mt-16 mb-16 ' >
        <div className="flex flex-col items-center bg-dark border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >
          <div className="mx-3 overflow-hidden rounded-full border-4 border-white shadow-md">
            <ProfilePic src={image} alt="profile" className="w-64 h-64 rounded-full" />
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
          <h1 className='flex mt-4 items-center justify-center text-blue-500 text-5xl font-bold text-white'>Skills</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            <SkillCard color="#FFCE14" imgSrc="/skills/python.svg" altText="Python" title="Python" />
            <SkillCard color="#5C6BC0" imgSrc="/skills/c.svg" altText="C" title="C" />
            <SkillCard color="#659AD2" imgSrc="/skills/cpp.svg" altText="C++" title="C++" />
            <SkillCard color="#fefe01" imgSrc="/skills/javascript.svg" altText="JavaScript" title="JavaScript" />
            <SkillCard color="#F44336" imgSrc="/skills/java.svg" altText="Java" title="Java" />
            <SkillCard color="#00B871" imgSrc="/skills/django.svg" altText="Django" title="Django" />
            <SkillCard color="#fc4503" imgSrc="/skills/html.svg" altText="HTML" title="HTML" />
            <SkillCard color="#1B73BA" imgSrc="/skills/css.svg" altText="CSS" title="CSS" />
            <SkillCard color="#18B5B9" imgSrc="/skills/tailwindcss.svg" altText="Tailwind" title="Tailwind" />
            <SkillCard color="#61DAFB" imgSrc="/skills/react.svg" altText="React JS" title="React JS" />
          </div>
        </div>
      </div>
    </div>
  );
}