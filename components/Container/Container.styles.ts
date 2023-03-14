import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: ${(props) => props.theme.screenSize[0]}) {
    max-width: ${(props) => props.theme.width[0]};
  }

  @media (min-width: ${(props) => props.theme.screenSize[1]}) {
    max-width: ${(props) => props.theme.width[1]};
  }

  @media (min-width: ${(props) => props.theme.screenSize[2]}) {
    max-width: ${(props) => props.theme.width[2]};
  }

  @media (min-width: ${(props) => props.theme.screenSize[3]}) {
    max-width: ${(props) => props.theme.width[3]};
  }

  @media (min-width: ${(props) => props.theme.screenSize[4]}) {
    max-width: ${(props) => props.theme.width[4]};
  }
`;
