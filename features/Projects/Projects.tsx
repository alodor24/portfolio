import Card from "@/components/Card";
import Section from "@/components/Section";
import { Lang, ProjectLang, projects, SectionEnum } from "@/helpers/constants";
import useLang from "@/hooks/useLang";
import * as SC from "./Projects.styles";

const Projects = () => {
  const { language } = useLang();

  return (
    <Section
      id={SectionEnum.PROJECTS}
      title={language === Lang.ES ? ProjectLang.TITLE_ES : ProjectLang.TITLE_EN}
    >
      <p className="textFlow">
        {language === Lang.ES
          ? ProjectLang.SUBTITLE_ES
          : ProjectLang.SUBTITLE_EN}
      </p>

      <SC.Wrapper>
        {projects.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            type={item.type}
            image={item.image}
            url={item.url}
            textButton={
              language === Lang.ES
                ? ProjectLang.BUTTON_ES
                : ProjectLang.BUTTON_EN
            }
          />
        ))}
      </SC.Wrapper>
    </Section>
  );
};

export default Projects;
