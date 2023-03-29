import useLanguageContext from "@/context/LanguageContext/useLanguageContext";
import { Lang, SelectLang } from "@/helpers/constants";
import { useEffect, useState } from "react";
import * as SC from "./LanguageSelect.styles";

const LanguageSelect = () => {
  const { language, setLanguage } = useLanguageContext();
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleEsc = (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleSelectLanguage = (option: string) => {
    if (Lang.ES === option) {
      setLanguage(Lang.ES);
      handleMenu();
      return;
    }
    setLanguage(Lang.EN);
    handleMenu();
  };

  return (
    <SC.Wrapper>
      <span onClick={handleMenu}>
        <i className="fas fa-globe" />{" "}
        {language === Lang.ES ? SelectLang.TITLE_ES : SelectLang.TITLE_EN}
      </span>

      {openMenu && (
        <SC.MenuContainer>
          <SC.Item
            onClick={() => handleSelectLanguage(Lang.EN)}
            disabled={language === Lang.EN}
          >
            {language === Lang.ES
              ? SelectLang.OPTION_1_ES
              : SelectLang.OPTION_1_EN}
          </SC.Item>

          <SC.Item
            onClick={() => handleSelectLanguage(Lang.ES)}
            disabled={language === Lang.ES}
          >
            {language === Lang.ES
              ? SelectLang.OPTION_2_ES
              : SelectLang.OPTION_2_EN}
          </SC.Item>
        </SC.MenuContainer>
      )}
    </SC.Wrapper>
  );
};

export default LanguageSelect;
