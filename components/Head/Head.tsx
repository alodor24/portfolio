import useLanguageContext from "@/context/LanguageContext/useLanguageContext";
import { HeadTitleLang, Lang } from "@/helpers/constants";
import Head from "next/head";

const HeadApp = () => {
  const { language } = useLanguageContext();
  const titleDefault =
    language === Lang.ES ? HeadTitleLang.TITLE_ES : HeadTitleLang.TITLE_EN;

  return (
    <Head>
      <title>Alodor | {titleDefault}</title>
    </Head>
  );
};

export default HeadApp;
