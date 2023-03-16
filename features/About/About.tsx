import Section from "@/components/Section";
import { AboutLang, Lang } from "@/helpers/constants";
import useLang from "@/hooks/useLang";
import * as SC from "./About.styles";

const About = () => {
  const { language } = useLang();

  return (
    <Section
      id="about"
      title={language === Lang.ES ? AboutLang.TITLE_ES : AboutLang.TITLE_EN}
    >
      <SC.Wrapper>
        <div>
          <SC.ContainerImage
            src="/assets/images/alodor.png"
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

          <p className="textFlow">
            {language === Lang.ES
              ? AboutLang.PARAGRAPH_4_ES
              : AboutLang.PARAGRAPH_4_EN}
          </p>
        </div>
      </SC.Wrapper>
    </Section>
  );
};

export default About;
