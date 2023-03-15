import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white[1]};
  padding: 6rem 3.5rem;

  @media (max-width: ${(props) => props.theme.width[0]}) {
    padding: 4.5rem 1.5rem;
  }
`;

export const Title = styled.h3`
  font-size: calc(2rem + 1vw);
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const Line = styled.div`
  margin-bottom: 50px;
  width: 50%;
  height: 0.35rem;
  background-color: ${(props) => props.theme.colors.grey[1]};
  border-radius: 5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 30%;
    height: 100%;
    background-image: ${(props) => props.theme.gradient[0]};
    border-radius: 5rem;
  }
`;
