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

export const ContainerIcons = styled.div`
  max-width: 35rem;
  width: 100%;
  margin: 3rem auto 0 auto;
  display: flex;
  justify-content: center;
  gap: 4rem;

  @media (max-width: ${(props) => props.theme.width[0]}) {
    gap: 2rem;
  }
`;

export const Icon = styled.div`
  color: ${(props) => props.theme.colors.white[1]};
  font-size: 3rem;
  transition: ${(props) => props.theme.transition[0]};

  &:hover {
    margin-top: -0.5rem;
  }

  @media (max-width: ${(props) => props.theme.width[0]}) {
    font-size: 2rem;
  }
`;
