
import MainPage from "@/components/mainPage/MainPage";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
    <MainPage/>
    </>
  );
}
