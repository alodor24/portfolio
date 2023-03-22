import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
`;

export const Progress = styled.div`
  background-color: ${(props) => props.theme.colors.grey[4]};
  border-radius: 0.25rem;
  overflow: hidden;
`;

const PorgressAnimation = keyframes`
  0% {
    background-position-x: 1rem;
  }
`;

export const ProgressBar = styled.div<{ width: number }>`
  display: flex;
  height: 2rem;
  width: ${(props) => `${props.width}%`};
  font-size: 0.8rem;
  animation: ${PorgressAnimation} 1s linear infinite;
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 0,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 0,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 0,
    transparent
  );
  background-size: 1rem 1rem;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.colors.white[1]};
  text-align: center;
  white-space: nowrap;
  background-color: ${(props) => props.theme.colors.blue[0]};
  transition: width 0.6s ease;
`;
