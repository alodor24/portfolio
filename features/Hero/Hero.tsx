import Container from "@/components/Container";
import { HeroLang, Lang } from "@/helpers/constants";
import useLang from "@/hooks/useLang";
import { Parallax } from "react-parallax";
import * as SC from "./Hero.styles";

const Hero = () => {
  const { language } = useLang();

  return (
    <Parallax
      bgImage={"/assets/images/bg-hero.jpeg"}
      bgImageAlt="Hero Image"
      strength={100}
    >
      <SC.Filter>
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
            <SC.Button type="button">
              {language === Lang.ES ? HeroLang.BUTTON_ES : HeroLang.BUTTON_EN}
            </SC.Button>
          </SC.WrapperContent>
        </Container>
      </SC.Filter>
    </Parallax>
  );
};

export default Hero;