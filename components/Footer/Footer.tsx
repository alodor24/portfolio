import useLanguageContext from "@/context/LanguageContext/useLanguageContext";
import { FooterLang, Lang } from "@/helpers/constants";
import Container from "../Container";
import * as SC from "./Footer.styles";

const Footer = () => {
  const { language } = useLanguageContext();
  const year = new Date().getFullYear();

  return (
    <SC.Footer>
      <Container>
        <SC.Text>
          ©{" "}
          {language === Lang.ES
            ? `${FooterLang.COPY_ES} ${year} - ${FooterLang.AUTHOR_ES}`
            : `${FooterLang.COPY_EN} ${year} - ${FooterLang.AUTHOR_EN}`}
        </SC.Text>
      </Container>
    </SC.Footer>
  );
};

export default Footer;
