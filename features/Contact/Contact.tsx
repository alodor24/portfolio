import { ContactLang, Lang } from "@/helpers/constants";
import useLang from "@/hooks/useLang";
import * as SC from "./Contact.styles";

const Contact = () => {
  const { language } = useLang();

  return (
    <SC.Wrapper>
      <SC.Title>
        {language === Lang.ES ? ContactLang.TITLE_ES : ContactLang.TITLE_EN}
      </SC.Title>
      <SC.Subtitle>
        {language === Lang.ES
          ? ContactLang.SUBTITLE_ES
          : ContactLang.SUBTITLE_EN}
      </SC.Subtitle>
    </SC.Wrapper>
  );
};

export default Contact;
