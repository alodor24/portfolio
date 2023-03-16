import * as SC from "./Section.styles";

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<Props> = ({ id, title, children }) => {
  return (
    <SC.Wrapper id={id}>
      <SC.Title>{title}</SC.Title>
      <SC.Line />
      {children}
    </SC.Wrapper>
  );
};

export default Section;
