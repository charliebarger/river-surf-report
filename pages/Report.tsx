import RiverReport from "../components/report/RiverReport";
import Chart from "../components/report/chart/Chart";
import PageHeader from "../components/utility/PageHeader";
import Banner from "../components/utility/Banner";
import SurfReport from "../components/report/SurfReport";
import Footer from "../components/utility/Footer";
import Head from "next/head";
import Header from "@/components/utility/Header";
import {
  riverDataInterface,
  SurfConditionInfo,
  ConditionNames,
} from "../report.types";
import LocationInfo from "../components/report/LocationInfo";

const Report = ({ riverData }: { riverData: riverDataInterface }) => {
  const flowRatings: SurfConditionInfo = {
    goodConditions: {
      min: riverData.environmentInfo.flowRatings.goodConditions,
      caption: "Good",
      color: {
        background: "chartGood",
        border: "chartGoodBorder",
      },
    },
    fairConditions: {
      min: riverData.environmentInfo.flowRatings.fairConditions,
      caption: "Fair",
      color: {
        background: "chartFair",
        border: "chartFairBorder",
      },
    },
    badConditions: {
      min: riverData.environmentInfo.flowRatings.badConditions,
      caption: "Not Surfable",
      color: {
        background: "chartBad",
        border: "chartBadBorder",
      },
    },
  };

  const getConditions = (): ConditionNames => {
    const { instantFlow } = riverData.environmentInfo.weatherValues;
    const { goodConditions, badConditions, fairConditions } =
      riverData.environmentInfo.flowRatings;
    if (instantFlow > goodConditions) {
      return { name: "Good" };
    } else if (instantFlow < goodConditions && instantFlow > fairConditions) {
      return { name: "Fair" };
    } else {
      return { name: "Not Surfable" };
    }
  };

  const report = {
    date: riverData.surfReport.reportInfo.date,
    report: riverData.surfReport.reportInfo.report,
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
      <Header />
      <PageHeader>Surf Report</PageHeader>
      <RiverReport
        imgUrl={riverData.imgUrl}
        surfSpotName={riverData.surfSpot}
        riverName={riverData.riverName}
        weatherValues={riverData.environmentInfo.weatherValues}
        conditionStatus={getConditions()}
      />
      <SurfReport reporter={riverData.surfReport.reporter} report={report} />
      <Chart
        usgsID={riverData.environmentInfo.usgsID}
        flowRatings={flowRatings}
      />
      <Banner title={riverData.surfSpot} body={riverData.riverDescription} />
      <LocationInfo locationData={riverData.locationInfo} />
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch("https://.../posts");
  // const posts = await res.json();

  const riverData: riverDataInterface = {
    riverName: "South Platte River",
    surfSpot: "River Run Park",
    riverDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde totam quam accusantium numquam debitis odio in fugit ut ab, quidem quod magni est obcaecati sit id blanditiis tempora quisquam, ratione voluptatibus consequatur excepturi? Impedit quos explicabo atque nulla temporibus nihil vitae eos pariatur amet voluptatibus voluptates magnam odio, quasi deserunt?",
    imgUrl:
      "https://i0.wp.com/endlesswaves.net/wp-content/uploads/2019/08/FB_IMG_1561316137775.jpg",
    environmentInfo: {
      usgsID: "06710247",
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
        img: "https://cdn.vox-cdn.com/thumbor/eEZwVD9UYHSfXdKW-X1gKe-4XWs=/0x73:1100x806/1400x1400/filters:focal(0x73:1100x806):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/8270369/tv_eastbound_down01.0.jpg",
        name: "Capt. Caleb McDaniel",
        description: "River Surfing God | Passionate Lover",
      },
      reportInfo: {
        report:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, soluta. Officia, hic eius ducimus facilis, illum consequuntur exercitationem voluptates ipsa, accusantium nemo accusamus similique alias dolores possimus dolorum. Libero totam magnam praesentium similique rem repellat unde amet illo. Aliquam, quidem!",
        date: "01/24/1996",
      },
    },
  };

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      riverData,
    },
  };
}

export default Report;
