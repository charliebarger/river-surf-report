import Head from 'next/head';
import PageHeader from '@/components/utility/PageHeader';
import Link from 'next/link';
import { TopFlows } from 'report.types';
import HighlightedFlows from '@/components/utility/highlighted-flows/HighlightedFlows';

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
        <meta name='description' content='The heart of River Surfing!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='m-auto mb-8 max-w-screen-xl  px-4 md:px-6 lg:mb-10'>
        <PageHeader>Reports</PageHeader>
        <div className=' grid-flow-col grid-cols-16 gap-x-8 lg:grid '>
          <aside className=' col-start-2'>
            <HighlightedFlows topFlows={topFlows} hideTopFlows={true} />
          </aside>
          {sites.map((region) => (
            <section key={region.continent} className=' col-start-1 '>
              <h2 className=' mt-6 mb-2  border-b-2 border-slate-200 pb-1 text-lg font-bold '>
                {region.continent}
              </h2>
              {region.countries.map((country) => (
                <section key={country.abbreviation} className=''>
                  <h3 className=' mb-2 mt-4 text-base font-bold text-slate-400 '>
                    {country.name}
                  </h3>
                  <ul className='grid grid-cols-2 gap-2 md:grid-cols-3'>
                    {country.states.map((state) => (
                      <li
                        key={state.name}
                        className='overflow-hidden overflow-ellipsis whitespace-nowrap text-linkColor hover:underline'
                      >
                        <Link
                          href={`/reports/${country.abbreviation}/${state.name}`}
                        >
                          {country.flag + ' ' + state.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </section>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const sites: Sites[] = [
    {
      continent: 'North America',
      countries: [
        {
          name: 'United States',
          flag: '🇺🇸',
          abbreviation: 'us',
          states: [
            { name: 'Alabama' },
            { name: 'Alaska' },
            { name: 'Arizona' },
            { name: 'Arkansas' },
            { name: 'California' },
            { name: 'Colorado' },
            { name: 'Connecticut' },
            { name: 'Delaware' },
            { name: 'Florida' },
            { name: 'Georgia' },
            { name: 'Hawaii' },
            { name: 'Idaho' },
            { name: 'Illinois' },
            { name: 'Indiana' },
            { name: 'Iowa' },
            { name: 'Kansas' },
            { name: 'Kentucky' },
            { name: 'Louisiana' },
            { name: 'Maine' },
            { name: 'Maryland' },
            { name: 'Massachusetts' },
            { name: 'Michigan' },
            { name: 'Minnesota' },
            { name: 'Mississippi' },
            { name: 'Missouri' },
            { name: 'Montana' },
            { name: 'Nebraska' },
            { name: 'Nevada' },
            { name: 'New Hampshire' },
            { name: 'New Jersey' },
            { name: 'New Mexico' },
            { name: 'New York' },
            { name: 'North Carolina' },
            { name: 'North Dakota' },
            { name: 'Ohio' },
            { name: 'Oklahoma' },
            { name: 'Oregon' },
            { name: 'Pennsylvania' },
            { name: 'Rhode Island' },
            { name: 'South Carolina' },
            { name: 'South Dakota' },
            { name: 'Tennessee' },
            { name: 'Texas' },
            { name: 'Utah' },
            { name: 'Vermont' },
            { name: 'Virginia' },
            { name: 'Washington' },
            { name: 'West Virginia' },
            { name: 'Wisconsin' },
            { name: 'Wyoming' },
          ],
        },
        {
          name: 'Canada',
          flag: '🇨🇦',
          abbreviation: 'ca',
          states: [
            { name: 'Ontario' },
            { name: 'Quebec' },
            { name: 'British Columbia' },
          ],
        },
      ],
    },
    {
      continent: 'Europe',
      countries: [
        {
          name: 'Germany',
          flag: '🇩🇪',
          abbreviation: 'de',
          states: [
            { name: 'Bavaria' },
            { name: 'North Rhine-Westphalia' },
            { name: 'Baden-Württemberg' },
          ],
        },
        {
          name: 'France',
          flag: '🇫🇷',
          abbreviation: 'fr',
          states: [
            { name: 'Île-de-France' },
            { name: "Provence-Alpes-Côte d'Azur" },
            { name: 'Auvergne-Rhône-Alpes' },
          ],
        },
      ],
    },
    {
      continent: 'Asia',
      countries: [
        {
          name: 'China',
          flag: '🇨🇳',
          abbreviation: 'cn',
          states: [
            { name: 'Guangdong' },
            { name: 'Zhejiang' },
            { name: 'Sichuan' },
          ],
        },
        {
          name: 'Japan',
          flag: '🇯🇵',
          abbreviation: 'jp',
          states: [{ name: 'Tokyo' }, { name: 'Osaka' }, { name: 'Hokkaido' }],
        },
      ],
    },
  ];

  const topFlows: TopFlows[] = [
    {
      waveName: 'Munich City Wave',
      countryFlag: '🇩🇪',
      urlParam: 'munich-city-wave',
      flows: {
        current: 300,
        good: 200,
        fair: 100,
      },
    },
    {
      waveName: 'Bend Whitewater Park',
      countryFlag: '🇺🇸',
      urlParam: 'bend-whitewater-park',
      flows: {
        current: 100,
        good: 200,
        fair: 100,
      },
    },
    {
      waveName: 'Habitat 67 Wave',
      countryFlag: '🇨🇦',
      urlParam: 'habitat-67-wave',
      flows: {
        current: 100,
        good: 200,
        fair: 100,
      },
    },
    {
      waveName: 'River Arno Wave',
      countryFlag: '🇮🇹',
      urlParam: 'river-arno-wave',
      flows: {
        current: 150,
        good: 200,
        fair: 100,
      },
    },
    {
      waveName: 'Sevilla Wave',
      countryFlag: '🇪🇸',
      urlParam: 'sevilla-wave',
      flows: {
        current: 100,
        good: 200,
        fair: 100,
      },
    },
  ];

  return {
    props: {
      sites,
      topFlows,
    },
  };
}
