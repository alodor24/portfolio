import LanguageContext from "@/context/LanguageContext";
import useLanguageContextValue from "@/context/LanguageContext/useLanguageContextValue";
import { GlobalStyle } from "@/globalStyles";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

export default function App({ Component, pageProps }: AppProps) {
  const languageContextValue = useLanguageContextValue();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LanguageContext.Provider value={languageContextValue}>
          <Component {...pageProps} />
        </LanguageContext.Provider>
      </ThemeProvider>
    </>
  );
}
