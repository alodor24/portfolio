import styled from "styled-components";
import { Link } from "react-scroll";

export const Filter = styled.div`
  background-image: url("/assets/images/filter.png");
  background-color: rgba(0, 0, 0, 0.3);
  height: 100vh;
`;

export const WrapperContent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 3.5rem;

  @media (max-width: ${(props) => props.theme.width[0]}) {
    padding: 4.5rem 1.5rem;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.white[1]};
  font-size: calc(3.5rem + 1vh);
  font-weight: ${(props) => props.theme.fontWeight[2]};
  line-height: ${(props) => props.theme.lineHeight[1]};
  text-shadow: ${(props) => props.theme.textShadow[0]};
  margin-bottom: 0.5rem;

  @media (max-width: ${(props) => props.theme.width[0]}) {
    font-size: calc(2.8rem + 1vh);
  }
`;

export const Subtitle = styled.h2`
  font-size: calc(1.4em + 1vh);
  font-weight: ${(props) => props.theme.fontWeight[2]};
  line-height: ${(props) => props.theme.lineHeight[1]};
  color: ${(props) => props.theme.colors.white[1]};
  text-shadow: ${(props) => props.theme.textShadow[0]};
  margin-bottom: 2.5rem;
`;

export const Button = styled(Link)`
  position: relative;
  top: 0;
  cursor: pointer;
  width: max-content;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 0.5rem;
  transition: ${(props) => props.theme.transition[0]};
  background-image: ${(props) => props.theme.gradient[0]};
  color: ${(props) => props.theme.colors.white[1]};
  font-size: ${(props) => props.theme.textSize[0]};

  &:hover {
    top: -0.5rem;
    filter: ${(props) => props.theme.dropShadow[0]};
  }
`;
