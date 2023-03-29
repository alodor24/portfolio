import ProgressBar from "@/components/ProgressBar";
import Section from "@/components/Section";
import useLanguageContext from "@/context/LanguageContext/useLanguageContext";
import { Lang, SectionEnum, SkillLang, skills } from "@/helpers/constants";
import * as SC from "./Skills.styles";

const Skills = () => {
  const { language } = useLanguageContext();

  return (
    <Section
      id={SectionEnum.SKILLS}
      title={language === Lang.ES ? SkillLang.TITLE_ES : SkillLang.TITLE_EN}
    >
      <p className="textFlow">
        {language === Lang.ES ? SkillLang.SUBTITLE_ES : SkillLang.SUBTITLE_EN}
      </p>

      <SC.Wrapper>
        {skills.map((item, index) => (
          <ProgressBar key={index} name={item.name} range={item.range} />
        ))}
      </SC.Wrapper>
    </Section>
  );
};

export default Skills;
