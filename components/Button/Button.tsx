import { AnchorHTMLAttributes } from "react";
import * as SC from "./Button.styles";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

type Props = {
  children: React.ReactNode;
  isScrollTo?: boolean;
  href: string;
} & AnchorProps;

const Button: React.FC<Props> = ({ children, isScrollTo, href, ...rest }) => {
  return (
    <>
      {!isScrollTo ? (
        <SC.Button href={href} {...rest}>
          {children}
        </SC.Button>
      ) : (
        <SC.ButtonScrollTo to={href} spy={true} smooth={true} duration={500}>
          {children}
        </SC.ButtonScrollTo>
      )}
    </>
  );
};

export default Button;
