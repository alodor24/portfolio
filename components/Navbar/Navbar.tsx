import useLanguageContext from "@/context/LanguageContext/useLanguageContext";
import { Lang, Navbar_EN, Navbar_ES, SectionEnum } from "@/helpers/constants";
import { useState } from "react";
import { Link } from "react-scroll";
import Container from "../Container";
import LanguageSelect from "../LanguageSelect";
import * as SC from "./Navbar.styles";

const Navbar = () => {
  const { language } = useLanguageContext();
  const [menuActive, setMenuActive] = useState<boolean>(false);

  const handleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <SC.Wrapper>
      <Container>
        <SC.WrapperNav>
          <SC.ContainerLogo>
            <Link to={SectionEnum.HERO} spy={true} smooth={true} duration={500}>
              <SC.Logo
                src="/assets/images/logo-blanco.svg"
                alt="Alodor Logo"
                width={180}
                height={50}
                priority={true}
              />
            </Link>
          </SC.ContainerLogo>

          <SC.NavbarMenu onClick={handleMenu} active={menuActive}>
            {menuActive ? (
              <i className="fas fa-times" />
            ) : (
              <i className="fas fa-bars" />
            )}
          </SC.NavbarMenu>

          <SC.ContainerNav active={menuActive}>
            <SC.Nav>
              {(language === Lang.ES ? Navbar_ES : Navbar_EN).map(
                (item, index) => (
                  <SC.NavLink
                    key={index}
                    activeClass="active"
                    to={item.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    {item.name}
                  </SC.NavLink>
                )
              )}
              <LanguageSelect />
            </SC.Nav>
          </SC.ContainerNav>
        </SC.WrapperNav>
      </Container>
    </SC.Wrapper>
  );
};

export default Navbar;
