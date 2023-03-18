import styled from "styled-components";
import Image from "next/image";
import { Link } from "react-scroll";

export const Wrapper = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: ${(props) => props.theme.colors.grey[2]};
  filter: ${(props) => props.theme.dropShadow[0]};
  backdrop-filter: saturate(180%) blur(5px);
`;

export const WrapperNav = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
`;

export const ContainerLogo = styled.div`
  width: 40%;
  border: solid blue 1px;
`;

export const Logo = styled(Image)`
  cursor: pointer;
`;

export const ContainerNav = styled.div<{ active?: boolean }>`
  width: 60%;
  transition: ${(props) => props.theme.transition[0]};

  @media (max-width: ${(props) => props.theme.screenSize[2]}) {
    position: fixed;
    top: 0;
    right: ${(props) => (props.active ? "0" : "-80vw")};
    width: 80vw;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.white[1]};
    filter: ${(props) => props.theme.dropShadow[0]};
  }
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: end;
  gap: 2rem;
  list-style: none;

  @media (max-width: ${(props) => props.theme.screenSize[2]}) {
    flex-direction: column;
    align-items: center;
    margin-top: 7rem;
    gap: 3rem;
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.white[0]};
  transition: ${(props) => props.theme.transition[0]};

  &:hover,
  &.active {
    color: ${(props) => props.theme.colors.white[1]};
  }

  @media (max-width: ${(props) => props.theme.screenSize[2]}) {
    color: ${(props) => props.theme.colors.grey[3]};
    font-size: calc(1rem + 1vw);
    font-weight: ${(props) => props.theme.fontWeight[2]};

    &:hover,
    &.active {
      color: ${(props) => props.theme.colors.grey[0]};
    }
  }
`;

export const NavbarMenu = styled.div<{ active?: boolean }>`
  display: none;

  @media (max-width: ${(props) => props.theme.screenSize[2]}) {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: fixed;
    top: 1rem;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    border: ${(props) =>
      props.active
        ? `solid 0.15rem ${props.theme.colors.grey[0]}`
        : `solid 0.15rem ${props.theme.colors.white[0]}`};
    border-radius: 0.3rem;
    z-index: 2;
    transition: ${(props) => props.theme.transition[0]};

    i {
      transition: ${(props) => props.theme.transition[0]};
      color: ${(props) =>
        props.active
          ? props.theme.colors.grey[0]
          : props.theme.colors.white[0]};
      font-size: 2rem;
    }
  }
`;
