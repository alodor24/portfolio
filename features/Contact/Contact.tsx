import useLanguageContext from "@/context/LanguageContext/useLanguageContext";
import { ContactLang, Lang } from "@/helpers/constants";
import { profiles } from "./constants";
import * as SC from "./Contact.styles";

const Contact = () => {
  const { language } = useLanguageContext();

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
      <SC.ContainerIcons>
        {profiles.map((profile, index) => (
          <SC.Icon key={index}>
            <a
              href={profile.url}
              target="_blank"
              title={profile.title}
              rel="noreferrer"
            >
              <i className={profile.favicon} />
            </a>
          </SC.Icon>
        ))}
      </SC.ContainerIcons>
    </SC.Wrapper>
  );
};

export default Contact;
