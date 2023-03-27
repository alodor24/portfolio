import { HeadTitleLang, Lang } from "@/helpers/constants";
import useLang from "@/hooks/useLang";
import Head from "next/head";

const HeadApp = () => {
  const { language } = useLang();
  const titleDefault =
    language === Lang.ES ? HeadTitleLang.TITLE_ES : HeadTitleLang.TITLE_EN;

  return (
    <Head>
      <title>Alodor | {titleDefault}</title>
    </Head>
  );
};

export default HeadApp;
