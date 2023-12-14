import React, { useEffect } from 'react';
import resumeUrl from '../assets/resume_cg.pdf';
import profile from '../assets/profile_image.jpeg';
import styled, { keyframes } from 'styled-components';
import { slideInFromLeft, slideInFromRight, slideInFromBottom, Heading, Skills } from './Slide'

const More = styled.div`
  animation: ${slideInFromBottom} 0.1s ease-in-out;
`;

const ProfilePic = styled.h1`
  animation: ${slideInFromLeft} 0.3s ease-in-out;
`;

const Info = styled.h1`
  animation: ${slideInFromRight} 0.3s ease-in-out;
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
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 93%;
`;

const LeftHalf = styled.div`
  width: 70%;
  text-align: center;
`;

const RightHalf = styled.div`
  width: 100%;
  text-align: center;
`;

export default function Home() {
    const openResume = () => {
        var newTab = window.open(resumeUrl, '_blank');
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
        <div className='h-screen bg-gradient-to-b from-black to-gray-700' id="Home_page">
            <Container>
                <LeftHalf>
                    <ProfilePic>
                        <CircularMotion>
                <div className="circular-motion overflow-hidden rounded-full border-4 border-white shadow-md cursor-pointer">
                                <img src={profile} alt="profile" className="w-full h-full object-cover rounded-full" />
                            </div>
                        </CircularMotion>
                    </ProfilePic>
                </LeftHalf>
                <RightHalf className="text-white">
                    <Info>
                        <div className='font-mono text-sky-600 text-2xl'>Hello, I am</div>
                        <h1 className='font-serif text-5xl font-bold'> <Heading className="">Arpit Kumar Gautam</Heading></h1>
                        <div className="w-full h-full flex justify-center items-center">
                            <Skills id="typewriter" className="text-4xl font-bold">|</Skills>
                            <Skills className='text-4xl font-bold' >|</Skills>
                        </div>
                        <button className='mt-4 hover:bg-blue-700 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-1 px-1 rounded' onClick={openResume}>
                            <div className="flex h-20 w-60 items-center justify-center bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-400 hover:bg-orange-600">
                                <button className="text-2xl font-white text-white"> View Resume</button>
                            </div>
                        </button>
                    </Info>
                </RightHalf>
            </Container>
            <More className='flex items-center justify-center'>
                <div className="animate-bounce w-11 h-11 flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full">
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

// style={{ border: '2px solid red' }}