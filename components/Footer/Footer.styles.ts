import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.grey[0]};
  padding: 2rem 0;
`;

export const Text = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.white[0]};
  font-size: ${(props) => props.theme.textSize[0]};
  line-height: ${(props) => props.theme.lineHeight[0]};
`;
