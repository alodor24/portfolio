import { useContext } from "react";
import LanguageContext, { LanguageContextData } from ".";

const useLanguageContext = (): LanguageContextData => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error(
      "useLanguageContext must be used within the LanguageContext.Provider"
    );
  }

  return languageContext;
};

export default useLanguageContext;
