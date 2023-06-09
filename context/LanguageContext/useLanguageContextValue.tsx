import { useEffect, useState } from "react";
import { LanguageContextData } from ".";

const useLanguageContextValue = (): LanguageContextData => {
  const [language, setLanguage] = useState<string>("");

  useEffect(() => {
    if (typeof window) {
      const getLangBrowser = navigator.language;
      setLanguage(getLangBrowser.slice(0, 2).toUpperCase());
    }
  }, []);

  return {
    language,
    setLanguage,
  };
};

export default useLanguageContextValue;
