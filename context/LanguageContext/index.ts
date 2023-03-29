import { createContext } from "react";

export type LanguageContextData = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

const LanguageContext = createContext<LanguageContextData | undefined>(
  undefined
);

export default LanguageContext;
