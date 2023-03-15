import { useState } from "react";

const useLang = () => {
  const [language, setLanguage] = useState<string>("ES");

  return {
    language,
    setLanguage,
  };
};

export default useLang;
