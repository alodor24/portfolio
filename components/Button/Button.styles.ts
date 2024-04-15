import styled, { css } from "styled-components";
import { Link } from "react-scroll";

const styleButton = css`
  display: inline-block;
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

export const ButtonScrollTo = styled(Link)`
  ${styleButton}
`;

export const Button = styled.a`
  ${styleButton}
`;
