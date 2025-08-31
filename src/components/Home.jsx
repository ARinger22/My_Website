import React, { useEffect } from 'react';
import profile from '../assets/profile_image.jpeg';
import styled, { keyframes } from 'styled-components';
import { slideInFromLeft, slideInFromRight, slideInFromBottom, Heading, Skills } from './Slide'

const More = styled.div`
  animation: ${slideInFromBottom} 0.1s ease-in-out;
`;

const moveInCircle = keyframes`
  0% {
    transform: translate(0%, 0%) translate(-20px, 0);
  }
  25% {
    transform: translate(0%, 0%) translate(0, -20px);
  }
  50% {
    transform: translate(0%, 0%) translate(20px, 0);
  }
  75% {
    transform: translate(0%, 0%) translate(0, 20px);
  }
  100% {
    transform: translate(0%, 0%) translate(-20px, 0);
  }
`;

const CircularMotion = styled.div`
  animation: ${moveInCircle} 6s linear infinite;
  max-width: 750px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: 50px;
`;

export default function Home() {
  const openResume = () => {
    var newTab = window.open('https://drive.google.com/file/d/1GgebORlDkqJImTtUgf5AZmEPf_LZpXvt/view?usp=sharing', '_blank');
    newTab.focus();
  };

  const words = ["Computer Science Undergraduate ", "Web Developer ", "App Developer ", "DSA Anthusiast", "Competetive Programmer ", "Machine Learner "];
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;

  const Type = () => {
    currentWord = words[i];
    if (isDeleting) {
      document.getElementById("typewriter").textContent = currentWord.substring(0, j - 1);
      j--;
      if (j === 0) {
        isDeleting = false;
        i++;
        if (i === words.length) {
          i = 0;
        }
      }
    } else {
      document.getElementById("typewriter").textContent = currentWord.substring(0, j + 1);
      j++;
      if (j === currentWord.length) {
        isDeleting = true;
      }
    }
    setTimeout(Type, 200);
  }

  useEffect(() => {
    Type();
  }, []);

  return (
    <div className='h-screen bg-gradient-to-b from-black to-gray-700 p-10' id="Home_page">
      <Container>
        <CircularMotion>
          <div className="overflow-hidden rounded-full border-4 border-white shadow-md cursor-pointer">
            <img src={profile} alt="profile" className="w-full h-full object-cover rounded-full" />
          </div>
        </CircularMotion>
        <div className='flex flex-col gap-5 items-center w-full' >
          <div className='text-sky-600 text-2xl'>Hello, I am</div>
          <h1 className='font-serif text-5xl font-bold'> <Heading className="">Arpit Kumar Gautam</Heading></h1>
          <div className="w-full h-full flex justify-center items-center">
            <Skills id="typewriter" className="text-4xl font-bold">|</Skills>
            <Skills className='text-4xl font-bold' >|</Skills>
          </div>
          <div className='flex justify-center max-w-[250px] w-full text-2xl text-white hover:bg-blue-700 hover:border-blue-900 border-4 p-7 rounded-lg' onClick={openResume}>
            View Resume
          </div>
        </div>
      </Container>
      <More className='flex items-center justify-center'>
        <div className="animate-bounce w-11 h-11 flex items-center justify-center bg-white rounded-full">
          <a href='#About_page'>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </More>
    </div>
  );
}