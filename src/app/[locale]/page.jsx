import LangBox from "@/components/langBox/LangBox";
import MainPage from "@/components/mainPage/MainPage";
import { useTranslations } from "next-intl";
import Head from "next/head";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <LangBox />
      <MainPage />
    </>
  );
}
