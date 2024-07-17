import Section from "@/components/Section";
import Image from "next/image";
import useLanguageContext from "@/context/LanguageContext/useLanguageContext";
import {
  Lang,
  SectionEnum,
  SkillLang,
  technologies,
} from "@/helpers/constants";
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
        {technologies.map((tech, index) => (
          <SC.ContainerLogo key={index}>
            <Image
              src={tech.icon}
              alt={tech.name}
              width={125}
              height={65}
              title={tech.name}
            />
          </SC.ContainerLogo>
        ))}
      </SC.Wrapper>
    </Section>
  );
};

export default Skills;
