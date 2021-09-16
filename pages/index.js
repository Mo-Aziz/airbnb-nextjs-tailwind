import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      {/* banner */}
      <Banner />
      {/* explore near by */}
      <main>
        
      </main>
    </div>
  );
}
