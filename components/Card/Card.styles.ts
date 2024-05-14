import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.white[1]};
  border-radius: 0.7rem;
  box-shadow: ${(props) => props.theme.shadow[0]};
  transition: ${(props) => props.theme.transition[0]};
  position: relative;
  top: 0;

  &:hover {
    top: -0.5rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);

    img {
      transform: scale(1.1);
    }
  }
`;

export const Header = styled.div`
  overflow: hidden;
  border-radius: 0.7rem 0.7rem 0 0;
`;

export const ContainerImage = styled(Image)`
  width: 100%;
  max-height: 12rem;
  transition: ${(props) => props.theme.transition[0]};
`;

export const Body = styled.div`
  padding: 2.5rem 1.5rem;
`;

export const Tags = styled.p`
  margin-top: 1rem;
  font-size: 14px;

  span {
    color: ${(props) => props.theme.colors.grey[5]};
    line-height: 1.7em;
  }
`;

export const Title = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 0.7rem;
  font-weight: ${(props) => props.theme.fontWeight[2]};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 0 0 0.7rem 0.7rem;
  background-color: ${(props) => props.theme.colors.white[2]};
  color: ${(props) => props.theme.colors.blue[0]};

  a {
    line-height: 1.5;
  }
`;
