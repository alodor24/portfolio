import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.screenSize[1]}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${(props) => props.theme.screenSize[3]}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
