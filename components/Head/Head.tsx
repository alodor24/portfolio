import { HeadTitleLang, Lang } from "@/helpers/constants";
import useLang from "@/hooks/useLang";
import Head from "next/head";

const HeadApp = () => {
  const { language } = useLang();

  return (
    <Head>
      <title>
        Alodor |{" "}
        {language === Lang.ES ? HeadTitleLang.TITLE_ES : HeadTitleLang.TITLE_EN}
      </title>
    </Head>
  );
};

export default HeadApp;
