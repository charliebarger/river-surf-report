import { render, screen, cleanup } from "@testing-library/react";
import RiverReport from "../../components/report/RiverReport";

describe("Report", () => {
  beforeEach(() => {
    render(
      <RiverReport
        imgUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fsurfing&psig=AOvVaw3Kl02kD7n5Mx_9m8xxMDM8&ust=1673536200330000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLDaoKfmv_wCFQAAAAAdAAAAABAE"
        surfSpotName="Wakiki Bay"
        riverName="Pacific Ocean"
        squareData={{
          instantFlow: 165,
          highTemp: 100,
          lowTemp: 0,
          temperature: 75,
          wind: 100,
        }}
      />
    );
  });

  it("There are 4 boxes", () => {
    const boxes = screen.getAllByRole("listitem");
    expect(boxes.length).toEqual(4);
  });

  it("Flow Box has correct info", () => {
    const flowBox = screen.getByTestId("river-0");
    expect(flowBox.firstChild).toHaveTextContent("Flow");
    expect(flowBox.lastChild).toHaveTextContent("165 cfs");
  });

  it("Wind Box has correct info", () => {
    const flowBox = screen.getByTestId("river-1");
    expect(flowBox.firstChild).toHaveTextContent("Wind");
    expect(flowBox.lastChild).toHaveTextContent("100 mph");
  });

  it("Temp Box has correct info", () => {
    const flowBox = screen.getByTestId("river-2");
    expect(flowBox.firstChild).toHaveTextContent("Temperature");
    expect(flowBox.lastChild).toHaveTextContent("75 °F");
  });

  it("Low/High Box has correct info", () => {
    const flowBox = screen.getByTestId("river-3");
    expect(flowBox.firstChild).toHaveTextContent("Low/High");
    expect(flowBox.lastChild).toHaveTextContent("0/100");
  });

  it("Surf Spot omes before river name in header", () => {
    const titleValue = screen.getByRole("heading");
    expect(titleValue).toBeInTheDocument();
    expect(titleValue).toHaveTextContent("Wakiki Bay - Pacific Ocean");
  });
});
