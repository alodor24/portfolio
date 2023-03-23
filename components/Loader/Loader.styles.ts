import styled, { keyframes } from "styled-components";
import Image from "next/image";

const FadeOut = keyframes`
  100% {
    background-color: transparent;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.white[1]};
  animation: ${FadeOut} ease 3s;
`;

const SpinAnimation = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0.5;
    transform: scale(0.8);
  }
`;

export const Spin = styled(Image)`
  animation-name: ${SpinAnimation};
  animation-direction: alternate;
  animation-duration: 1.7s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;
