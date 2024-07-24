import LangBox from "@/components/langBox/LangBox";
import MainPage from "@/components/mainPage/MainPage";
import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <>
      <LangBox />
      <MainPage />
    </>
  );
}
