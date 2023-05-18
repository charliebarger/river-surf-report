import Head from "next/head";
import PageHeader from "@/components/utility/PageHeader";
import { SectionWrapper } from "@/components/utility/SectionWrapper";
import Link from "next/link";
import QuickInfoCard from "@/components/utility/QuickInfoCard";

interface Sites {
  continent: string;
  countries: {
    name: string;
    flag: string;
    abbreviation: string;
    states: {
      name: string;
    }[];
  }[];
}

interface TopFlows {
  waveName: string;
  cfs: number;
  countryFlag: string;
  urlPraram: string;
}

export default function Reports({
  sites,
  topFlows,
}: {
  sites: Sites[];
  topFlows: TopFlows[];
}) {
  return (
    <>
      <Head>
        <title>Surf Otter : River Surf Reports</title>
        <meta name="description" content="The heart of River Surfing!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageHeader>Reports</PageHeader>
        <SectionWrapper>
          <div className=" grid-flow-col grid-cols-16 gap-x-8 lg:grid ">
            {sites.map((region) => (
              <div key={region.continent} className=" col-start-1 ">
                <h2 className=" mt-4 mb-2  border-b-2 border-slate-200 pb-1 text-lg font-bold ">
                  {region.continent}
                </h2>
                {region.countries.map((country) => (
                  <div key={country.abbreviation} className="">
                    <h3 className=" mb-2 mt-4 text-base font-bold text-slate-400 ">
                      {country.name}
                    </h3>
                    <ul className="grid grid-cols-2 gap-2 md:grid-cols-3">
                      {country.states.map((state) => (
                        <li
                          key={state.name}
                          className="overflow-hidden overflow-ellipsis whitespace-nowrap text-linkColor hover:underline"
                        >
                          <Link
                            href={`/reports/${country.abbreviation}/${state.name}`}
                          >
                            {country.flag + " " + state.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
            <aside className=" col-start-2">
              <div>
                <h2 className=" mt-4 mb-2 pb-1 text-xl font-bold ">
                  Favorites
                </h2>
                <Link
                  href={"/sign-up"}
                  className=" my-2 flex  items-center rounded border-2 border-[#0CAADC] bg-white px-4
        py-2 text-base font-medium text-[#0CAADC]
        hover:border-white hover:bg-[#0CAADC] hover:text-white
        "
                >
                  <span className=" ml-2 font-bold ">
                    Log In To Add Favorites
                  </span>
                  <span className="ml-auto text-xl font-extrabold">+</span>
                </Link>
              </div>
              <h2 className=" mt-4 mb-2 pb-1 text-xl font-bold ">Top Flows</h2>
              <div>
                {topFlows.map(({ waveName, cfs, countryFlag, urlPraram }) => (
                  <QuickInfoCard
                    key={urlPraram}
                    wave={waveName}
                    cfs={cfs}
                    flag={countryFlag}
                    urlParam={urlPraram}
                  />
                ))}
              </div>
            </aside>
          </div>
        </SectionWrapper>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const sites: Sites[] = [
    {
      continent: "North America",
      countries: [
        {
          name: "United States",
          flag: "🇺🇸",
          abbreviation: "us",
          states: [
            { name: "Alabama" },
            { name: "Alaska" },
            { name: "Arizona" },
            { name: "Arkansas" },
            { name: "California" },
            { name: "Colorado" },
            { name: "Connecticut" },
            { name: "Delaware" },
            { name: "Florida" },
            { name: "Georgia" },
            { name: "Hawaii" },
            { name: "Idaho" },
            { name: "Illinois" },
            { name: "Indiana" },
            { name: "Iowa" },
            { name: "Kansas" },
            { name: "Kentucky" },
            { name: "Louisiana" },
            { name: "Maine" },
            { name: "Maryland" },
            { name: "Massachusetts" },
            { name: "Michigan" },
            { name: "Minnesota" },
            { name: "Mississippi" },
            { name: "Missouri" },
            { name: "Montana" },
            { name: "Nebraska" },
            { name: "Nevada" },
            { name: "New Hampshire" },
            { name: "New Jersey" },
            { name: "New Mexico" },
            { name: "New York" },
            { name: "North Carolina" },
            { name: "North Dakota" },
            { name: "Ohio" },
            { name: "Oklahoma" },
            { name: "Oregon" },
            { name: "Pennsylvania" },
            { name: "Rhode Island" },
            { name: "South Carolina" },
            { name: "South Dakota" },
            { name: "Tennessee" },
            { name: "Texas" },
            { name: "Utah" },
            { name: "Vermont" },
            { name: "Virginia" },
            { name: "Washington" },
            { name: "West Virginia" },
            { name: "Wisconsin" },
            { name: "Wyoming" },
          ],
        },
        {
          name: "Canada",
          flag: "🇨🇦",
          abbreviation: "ca",
          states: [
            { name: "Ontario" },
            { name: "Quebec" },
            { name: "British Columbia" },
          ],
        },
      ],
    },
    {
      continent: "Europe",
      countries: [
        {
          name: "Germany",
          flag: "🇩🇪",
          abbreviation: "de",
          states: [
            { name: "Bavaria" },
            { name: "North Rhine-Westphalia" },
            { name: "Baden-Württemberg" },
          ],
        },
        {
          name: "France",
          flag: "🇫🇷",
          abbreviation: "fr",
          states: [
            { name: "Île-de-France" },
            { name: "Provence-Alpes-Côte d'Azur" },
            { name: "Auvergne-Rhône-Alpes" },
          ],
        },
      ],
    },
    {
      continent: "Asia",
      countries: [
        {
          name: "China",
          flag: "🇨🇳",
          abbreviation: "cn",
          states: [
            { name: "Guangdong" },
            { name: "Zhejiang" },
            { name: "Sichuan" },
          ],
        },
        {
          name: "Japan",
          flag: "🇯🇵",
          abbreviation: "jp",
          states: [{ name: "Tokyo" }, { name: "Osaka" }, { name: "Hokkaido" }],
        },
      ],
    },
  ];

  const topFlows: TopFlows[] = [
    {
      waveName: "Munich City Wave",
      cfs: 100,
      countryFlag: "🇩🇪",
      urlPraram: "munich-city-wave",
    },
    {
      waveName: "Bend Whitewater Park",
      cfs: 150,
      countryFlag: "🇺🇸",
      urlPraram: "bend-whitewater-park",
    },
    {
      waveName: "Habitat 67 Wave",
      cfs: 200,
      countryFlag: "🇨🇦",
      urlPraram: "habitat-67-wave",
    },
    {
      waveName: "River Arno Wave",
      cfs: 120,
      countryFlag: "🇮🇹",
      urlPraram: "river-arno-wave",
    },
    {
      waveName: "Sevilla Wave",
      cfs: 180,
      countryFlag: "🇪🇸",
      urlPraram: "sevilla-wave",
    },
  ];

  return {
    props: {
      sites,
      topFlows,
    },
  };
}
