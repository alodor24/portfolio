import Container from "@/components/Container";
import useLanguageContext from "@/context/LanguageContext/useLanguageContext";
import { HeroLang, Lang, SectionEnum } from "@/helpers/constants";
import { Parallax } from "react-parallax";
import * as SC from "./Hero.styles";
import Button from "@/components/Button";

const Hero = () => {
  const { language } = useLanguageContext();

  return (
    <Parallax
      bgImage={"/assets/images/bg-hero.jpeg"}
      bgImageAlt="Hero Image"
      strength={100}
    >
      <SC.Filter id={SectionEnum.HERO}>
        <Container>
          <SC.WrapperContent>
            <SC.Title>
              {language === Lang.ES ? HeroLang.TITLE_ES : HeroLang.TITLE_EN}
            </SC.Title>
            <SC.Subtitle>
              {language === Lang.ES
                ? HeroLang.SUBTITLE_ES
                : HeroLang.SUBTITLE_EN}
            </SC.Subtitle>
            <Button isScrollTo={true} href={SectionEnum.ABOUT}>
              {language === Lang.ES ? HeroLang.BUTTON_ES : HeroLang.BUTTON_EN}
            </Button>
          </SC.WrapperContent>
        </Container>
      </SC.Filter>
    </Parallax>
  );
};

export default Hero;
