import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: ${(props) => props.theme.gradient[0]};
  padding: 6rem 3.5rem;

  @media (max-width: ${(props) => props.theme.width[0]}) {
    padding: 4.5rem 1.5rem;
  }
`;

export const Title = styled.h3`
  font-size: calc(2rem + 1vw);
  font-weight: ${(props) => props.theme.fontWeight[2]};
  margin-bottom: 1.2rem;
  color: ${(props) => props.theme.colors.white[1]};
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeight[4]};
  text-shadow: ${(props) => props.theme.textShadow[0]};
`;

export const Subtitle = styled.h4`
  text-align: center;
  color: ${(props) => props.theme.colors.white[1]};
  text-shadow: ${(props) => props.theme.textShadow[0]};
  font-weight: ${(props) => props.theme.fontWeight[0]};
  font-size: calc(1.275rem + 0.3vw);
  line-height: ${(props) => props.theme.lineHeight[1]};
`;
