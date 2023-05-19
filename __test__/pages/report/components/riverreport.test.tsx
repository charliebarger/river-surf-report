import { render, screen } from "@testing-library/react";
import RiverReport from "@/components/pages/surf-spot/RiverReport";
import { SurfConditionStatus } from "report.types";
import { WeatherStatus } from "report.types";
import { riverReportProps } from "@/components/pages/surf-spot/RiverReport";

const getReportProps = (
  conditions: SurfConditionStatus,
  weatherStatus: WeatherStatus
): riverReportProps => ({
  imgUrl:
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fsurfing&psig=AOvVaw3Kl02kD7n5Mx_9m8xxMDM8&ust=1673536200330000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLDaoKfmv_wCFQAAAAAdAAAAABAE",
  surfSpotName: "Wakiki Bay",
  riverName: "Pacific Ocean",
  conditionStatus: { name: conditions },
  weatherValues: {
    instantFlow: 165,
    highTemp: 100,
    lowTemp: 0,
    temperature: 75,
    wind: 100,
    weatherStatus: weatherStatus,
  },
});

it("Surf Spot comes before river name in header", () => {
  render(<RiverReport {...getReportProps("Fair", "hail")} />);
  const titleValue = screen.getByRole("heading");
  expect(titleValue).toBeInTheDocument();
  expect(titleValue).toHaveTextContent("Wakiki Bay - Pacific Ocean");
});

describe("Check that surf status is rendered correctly", () => {
  it("Surf Status has correct background color for Poor status", () => {
    render(<RiverReport {...getReportProps("Poor", "hail")} />);
    const titleValue = screen.getByText("Poor");
    expect(titleValue).toBeInTheDocument();
    expect(titleValue).toHaveClass("bg-chartBadBorder");
  });

  it("Surf Status has correct background color for Fair status", () => {
    render(<RiverReport {...getReportProps("Fair", "hail")} />);
    const titleValue = screen.getByText("Fair");
    expect(titleValue).toBeInTheDocument();
    expect(titleValue).toHaveClass("bg-chartFairBorder");
  });

  it("Surf Status has correct background color for Good status", () => {
    render(<RiverReport {...getReportProps("Good", "hail")} />);
    const titleValue = screen.getByText("Good");
    expect(titleValue).toBeInTheDocument();
    expect(titleValue).toHaveClass("bg-chartGoodBorder");
  });
});

describe("Check correct icon is rendered based on weatherStatus prop", () => {
  it("Weather Icon displays a hail", () => {
    render(<RiverReport {...getReportProps("Poor", "hail")} />);
    const titleValue = screen.getByAltText("hail");
    expect(titleValue).toBeInTheDocument();
    expect(titleValue).toHaveAttribute("src", "/weather-icons/hail.svg");
  });

  it("Weather Icon displays the rain icon", () => {
    render(<RiverReport {...getReportProps("Poor", "rain")} />);
    const titleValue = screen.getByAltText("rain");
    expect(titleValue).toBeInTheDocument();
    expect(titleValue).toHaveAttribute("src", "/weather-icons/rainy-3.svg");
  });

  it("Weather Icon displays the snow icon", () => {
    render(<RiverReport {...getReportProps("Poor", "snow")} />);
    const titleValue = screen.getByAltText("snow");
    expect(titleValue).toBeInTheDocument();
    expect(titleValue).toHaveAttribute("src", "/weather-icons/snowy-3.svg");
  });

  it("Weather Icon displays the sun icon", () => {
    render(<RiverReport {...getReportProps("Poor", "sunny")} />);
    const titleValue = screen.getByAltText("sunny");
    expect(titleValue).toBeInTheDocument();
    expect(titleValue).toHaveAttribute("src", "/weather-icons/clear-day.svg");
  });

  it("Weather Icon displays the wind icon", () => {
    render(<RiverReport {...getReportProps("Poor", "windy")} />);
    const titleValue = screen.getByAltText("windy");
    expect(titleValue).toBeInTheDocument();
    expect(titleValue).toHaveAttribute("src", "/weather-icons/wind.svg");
  });
});
