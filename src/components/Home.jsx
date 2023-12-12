import React from 'react';
import resumeUrl from '../assets/resume_cg.pdf';
import profile from '../assets/profile_image.jpeg';
import styled, { keyframes } from 'styled-components';

const moveInCircle = keyframes`
  0% {
    transform: translate(0%, 0%) translate(-15px, 0);
  }
  25% {
    transform: translate(0%, 0%) translate(0, -15px);
  }
  50% {
    transform: translate(0%, 0%) translate(15px, 0);
  }
  75% {
    transform: translate(0%, 0%) translate(0, 15px);
  }
  100% {
    transform: translate(0%, 0%) translate(-15px, 0);
  }
`;

const CircularMotion = styled.div`
  animation: ${moveInCircle} 7s linear infinite;
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
  height: 80vh;
`;

const LeftHalf = styled.div`
  width: 70%;
  text-align: center;
`;

const RightHalf = styled.div`
  width: 100%;
  text-align: center;
`;

const Heading = styled.span`
    background: linear-gradient(90deg, #2563eb, #48bb78, #6366f1);
    -webkit-background-clip: text;
    color: transparent;
`;

const styles = {
    heading: {
        fontSize: '15px',
    }
}
export default function Home() {
    const openResume = () => {
        var newTab = window.open(resumeUrl, '_blank');
        newTab.focus();
    };

    return (
        <>
            <Container >
                <LeftHalf>
                    <CircularMotion>
                        <div className="circular-motion overflow-hidden rounded-full border-4 border-white shadow-md">
                            <img src={profile} alt="profile" className="w-full h-full object-cover rounded-full" />
                        </div>
                    </CircularMotion>
                </LeftHalf>
                <RightHalf className="text-white">
                    <div className='font-mono text-sky-600 text-2xl'>Hello, I am</div>
                    <h1 className='font-serif text-5xl font-bold'> <Heading className="">Arpit Kumar Gautam</Heading></h1>
                    <h4><span className='font-serif text-3xl font-bold'>Computer Science Undergraduate</span></h4>
                    <button className='mt-4 hover:bg-blue-700 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white py-1 px-1 rounded' onClick={openResume}>
                        <div className="flex h-20 w-60 items-center justify-center bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-400 hover:bg-orange-600">
                            <button className="text-2xl font-white text-white"> View Resume</button>
                        </div>
                    </button>
                </RightHalf>
            </Container>
            <div className='flex items-center justify-center'>
                <div className="mt-4 animate-bounce w-11 h-11 flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>
        </>
    );
}

// style={{ border: '2px solid red' }}