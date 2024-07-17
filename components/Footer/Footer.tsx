import useLanguageContext from "@/context/LanguageContext/useLanguageContext";
import { FooterLang, Lang } from "@/helpers/constants";
import Container from "../Container";
import * as SC from "./Footer.styles";

const Footer = () => {
  const { language } = useLanguageContext();
  const year = new Date().getFullYear();
  const footerText =
    language === Lang.ES
      ? `${FooterLang.AUTHOR_ES} | ${year}`
      : `${FooterLang.AUTHOR_EN} | ${year}`;

  return (
    <SC.Footer>
      <Container>
        <SC.Text dangerouslySetInnerHTML={{ __html: footerText }} />
      </Container>
    </SC.Footer>
  );
};

export default Footer;
