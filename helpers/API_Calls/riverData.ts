const getAllFlowsURL = (site: string): string => {
  const date = new Date();
  const dateNow = date.toISOString();
  const dateWeekAgo = new Date(date.setDate(date.getDate() - 7)).toISOString();
  console.log("testing");
  return `https://waterservices.usgs.gov/nwis/iv/?format=json&sites=${site}&startDT=${dateWeekAgo}&endDT=${dateNow}&parameterCd=00060,00065&siteStatus=all`;
};

interface RiverAxis {
  dateTime: string;
  value: number;
}

type dataResults = RiverAxis[] | false;

// this will be changed to useFetch of some sort | Needs to be DELETED
const riverAPIcall = async (
  site: string
): Promise<{ data: dataResults; error: boolean }> => {
  console.log("fetching...");
  try {
    console.log(getAllFlowsURL(site));
    const data = await fetch(getAllFlowsURL(site));
    console.log("frick");
    console.log(data);
    if (!data.ok) {
      throw Error("could not fetch data from server");
    }
    const infoson = await data.json();
    console.log(infoson);
    const dataPoints: RiverAxis[] = infoson.value.timeSeries[0].values[0].value;
    const filteredData = dataPoints.map((item) => {
      return { dateTime: item.dateTime, value: Number(item.value) };
    });
    return { data: filteredData, error: false };
  } catch (error) {
    console.log(error);
    return { data: false, error: true };
  }
};

export { getAllFlowsURL, riverAPIcall };
export type { RiverAxis };
