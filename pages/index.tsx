import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/utility/Header";
import styles from "../styles/Home.module.css";
import Footer from "@/components/utility/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Surf Otter : River Surf Reports</title>
        <meta name="description" content="The heart of River Surfing!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="grid grid-cols-5 p-6 m-auto w-4/5 gap-4">
        <div className="col-span-3">
          <Image
            width={1000}
            height={1000}
            alt="wave"
            src={"/home-page-wave.jpeg"}
          />
        </div>
      </main>
    </>
  );
}
