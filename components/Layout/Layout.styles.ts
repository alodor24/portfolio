import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  animation: ${FadeIn} ease 2s;
`;

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.grey[1]};
`;
