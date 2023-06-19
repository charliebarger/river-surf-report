import RiverReport from "@/components/pages/surf-spot/RiverReport";
import Chart from "@/components/chart/Chart";
import PageHeader from "@/components/utility/PageHeader";
import Banner from "@/components/utility/Banner";
import SurfReport from "@/components/pages/surf-spot/SurfReport";
import Head from "next/head";
import LocationInfo from "@/components/pages/surf-spot/LocationInfo";
import { getConditions } from "@/helpers/functions";
import { riverAPIcall } from "@/helpers/API_Calls/riverData";
import { RiverData, SurfConditionInfo, ConditionNames } from "report.types";

const SurfSpot = ({ riverData }: { riverData: RiverData }) => {
  const { surfReport, environmentInfo } = riverData;
  const chartFlowProps: SurfConditionInfo = {
    goodConditions: {
      min: environmentInfo.flowRatings.goodConditions,
      caption: "Good",
      color: {
        background: "chartGood",
        border: "chartGoodBorder",
      },
    },
    fairConditions: {
      min: environmentInfo.flowRatings.fairConditions,
      caption: "Fair",
      color: {
        background: "chartFair",
        border: "chartFairBorder",
      },
    },
    badConditions: {
      min: environmentInfo.flowRatings.badConditions,
      caption: "Poor",
      color: {
        background: "chartBad",
        border: "chartBadBorder",
      },
    },
  };

  return (
    <>
      <Head>
        <title>{riverData.surfSpot} Surf Report and Forcast</title>
        <meta name="description" content={riverData.riverDescription} />
        {/* add og meta tags */}
        {/* <meta property="og:title" content=""></meta>
        <meta property="og:site_name" content=""></meta>
        <meta property="og:url" content=""></meta> */}
      </Head>
      <main>
        <PageHeader>Surf Report</PageHeader>
        <RiverReport
          spotImgUrl={riverData.imgUrl}
          surfSpotName={riverData.surfSpot}
          riverName={riverData.riverName}
          weatherValues={environmentInfo.weatherValues}
          conditions={{
            flow: riverData.environmentInfo.weatherValues.instantFlow,
            goodConditions:
              riverData.environmentInfo.flowRatings.goodConditions,
            fairConditions:
              riverData.environmentInfo.flowRatings.fairConditions,
          }}
        />
        <div
          className="
        border-y
         border-y-white bg-white
        "
        >
          <SurfReport
            reporter={surfReport.reporter}
            report={surfReport.reportInfo}
          />

          <Chart
            chartData={environmentInfo.chartData}
            flowRatings={chartFlowProps}
          />
        </div>
        <Banner title={riverData.surfSpot} body={riverData.riverDescription} />
        <div
          className="
         border-y border-y-white
         bg-white
        "
        >
          <LocationInfo locationData={riverData.locationInfo} />
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const chartData = await riverAPIcall("06710247");
  const riverData: RiverData = {
    riverName: "South Platte River",
    surfSpot: "River Run Park",
    riverDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam quam accusantium numquam debitis odio in fugit ut ab, quidem quod magni est obcaecati sit id blanditiis tempora quisquam, ratione voluptatibus consequatur excepturi? Impedit quos explicabo atque nulla temporibus nihil vitae eos pariatur amet voluptatibus voluptates magnam odio, quasi deserunt?",
    imgUrl: "/jake_voss.jpg",
    environmentInfo: {
      chartData: chartData,
      flowRatings: {
        goodConditions: 250,
        fairConditions: 170,
        badConditions: 0,
      },
      weatherValues: {
        instantFlow: 272,
        wind: 8,
        temperature: 73,
        lowTemp: 53,
        highTemp: 72,
        weatherStatus: "sunny",
      },
    },
    locationInfo: {
      googleMapsID:
        "pb=!1m18!1m12!1m3!1d98246.44797771022!2d-105.26977194489798!3d39.69017321780344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c80126f0d1b23%3A0xc03c2683cfdf7ba0!2sRiver%20Run%20Park!5e0!3m2!1sen!2sus!4v1667866269435!5m2!1sen!2sus",
      parkingSpotName: "River Run Park",
      address: "2101 W Oxford Ave, Sheridan, CO 80110",
    },
    surfReport: {
      reporter: {
        img: "/assets/images/logo.tiff",
        name: "Christian Seguna",
        description: "River Surfing God | Passionate Lover",
      },
      reportInfo: {
        report:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, soluta. Officia, hic eius ducimus facilis, illum consequuntur exercitationem voluptates ipsa, accusantium nemo accusamus similique alias dolores possimus dolorum. Libero totam magnam praesentium similique rem repellat unde amet illo. Aliquam, quidem!",
        date: "01/24/1996",
      },
    },
  };
  return {
    props: {
      riverData,
    },
  };
}

export default SurfSpot;
