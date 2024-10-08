import Section from "@/components/Section";
import useLanguageContext from "@/context/LanguageContext/useLanguageContext";
import { AboutLang, Lang, SectionEnum } from "@/helpers/constants";
import * as SC from "./About.styles";
import Button from "@/components/Button";

const About = () => {
  const { language } = useLanguageContext();

  return (
    <Section
      id={SectionEnum.ABOUT}
      title={language === Lang.ES ? AboutLang.TITLE_ES : AboutLang.TITLE_EN}
    >
      <SC.Wrapper>
        <div>
          <SC.ContainerImage
            src="/assets/images/alodor.jpeg"
            alt="Alodor"
            width={500}
            height={500}
          />
        </div>

        <div>
          <p className="textFlow">
            {language === Lang.ES
              ? AboutLang.PARAGRAPH_1_ES
              : AboutLang.PARAGRAPH_1_EN}
          </p>

          <p className="textFlow">
            {language === Lang.ES
              ? AboutLang.PARAGRAPH_2_ES
              : AboutLang.PARAGRAPH_2_EN}
          </p>

          <p className="textFlow">
            {language === Lang.ES
              ? AboutLang.PARAGRAPH_3_ES
              : AboutLang.PARAGRAPH_3_EN}
          </p>

          <Button
            href={
              language === Lang.ES
                ? "/assets/files/resume_ES.pdf"
                : "/assets/files/resume_EN.pdf"
            }
            target="_blank"
          >
            {language === Lang.ES ? AboutLang.BUTTON_ES : AboutLang.BUTTON_EN}
          </Button>
        </div>
      </SC.Wrapper>
    </Section>
  );
};

export default About;
