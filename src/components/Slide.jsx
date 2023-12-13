import styled , { keyframes } from 'styled-components';

export const slideInFromLeft = keyframes`
  from {
    transform: translateX(-200px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideInFromRight = keyframes`
  from {
    transform: translateX(200px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideInFromBottom = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideInFromTop = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const gradientOverlay = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom right, transparent 0%, transparent 33%, fuchsia , transparent 55%, red , transparent 75%, yellow 100%)',
    transform: 'translateX(-100%)',
    transition: 'transform 2s ease',
};

export const Heading = styled.span`
    background: linear-gradient(90deg, #2563eb, #48bb78, #6366f1);
    -webkit-background-clip: text;
    color: transparent;
`;

export const Skills = styled.h1`
    background: linear-gradient(90deg, fuchsia, red, yellow);
    -webkit-background-clip: text;
    color: transparent;
`;