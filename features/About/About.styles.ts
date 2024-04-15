import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${(props) => props.theme.width[0]}) {
    flex-direction: column;
  }
`;

export const ContainerImage = styled(Image)`
  max-width: 100%;
  width: 60rem;
  height: auto;
`;
