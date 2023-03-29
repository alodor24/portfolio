import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  cursor: pointer;
  color: ${(props) => props.theme.colors.blue[0]};
  position: relative;
`;

export const MenuContainer = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  list-style: none;
  top: 2rem;
  width: 8rem;
  gap: 0.8rem;
  background-color: ${(props) => props.theme.colors.white[1]};
  transition: all 3s ease-in-out;
`;

export const Item = styled.li<{ disabled?: boolean }>`
  color: ${(props) => props.theme.colors.grey[0]};
  transition: ${(props) => props.theme.transition[0]};

  &:hover {
    padding-left: 0.5rem;
    color: ${(props) => props.theme.colors.blue[0]};
  }

  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
`;
