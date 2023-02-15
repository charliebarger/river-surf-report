import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/utility/Header";
import PageHeader from "@/components/utility/PageHeader";
import { SectionWrapper } from "@/components/utility/SectionWrapper";
import styles from "../styles/Home.module.css";
import Footer from "@/components/utility/Footer";
import { Fragment } from "react";
import Link from "next/link";

interface Sites {
  continent: string;
  countries: {
    name: string;
    abbreviation: string;
    states: {
      name: string;
    }[];
  }[];
}

const sites: Sites[] = [
  {
    continent: "North America",
    countries: [
      {
        name: "United States",
        abbreviation: "us",
        states: [
          {
            name: "Colorado",
          },
          {
            name: "Idaho",
          },
          {
            name: "Oregon",
          },
        ],
      },
    ],
  },
];

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
      <main>
        <PageHeader>Reports</PageHeader>
        <SectionWrapper>
          {sites.map((region) => (
            <Fragment key={region.continent}>
              <h2 className=" text-lg py-1 font-bold  border-b-2 border-slate-300 ">
                {region.continent}
              </h2>
              {region.countries.map((country) => (
                <div key={country.abbreviation}>
                  <h3 className=" text-base font-bold">{country.name}</h3>
                  {country.states.map((state) => (
                    <Link
                      href={`/reports/${country.abbreviation}/${state.name}`}
                      key={state.name}
                    >
                      {state.name}
                    </Link>
                  ))}
                </div>
              ))}
            </Fragment>
          ))}
        </SectionWrapper>
      </main>
    </>
  );
}
