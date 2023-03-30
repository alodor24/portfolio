import useLanguageContext from "@/context/LanguageContext/useLanguageContext";
import { HeadTitleLang, Lang } from "@/helpers/constants";
import Head from "next/head";

const HeadApp = () => {
  const { language } = useLanguageContext();
  const titleDefault =
    language === Lang.ES
      ? `Alodor | ${HeadTitleLang.TITLE_ES}`
      : `Alodor | ${HeadTitleLang.TITLE_EN}`;

  return (
    <Head>
      <title>{titleDefault}</title>
    </Head>
  );
};

export default HeadApp;
