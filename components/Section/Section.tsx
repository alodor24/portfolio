import * as SC from "./Section.styles";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <SC.Wrapper>
      <SC.Title>{title}</SC.Title>
      <SC.Line />
      {children}
    </SC.Wrapper>
  );
};

export default Section;
