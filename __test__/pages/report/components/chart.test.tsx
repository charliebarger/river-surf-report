import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { riverData as riverDatabaseData } from "@/mocks/handler/api/riverData";
import { mswServer } from "@/mocks/mswServer";
import Chart, { FlowRatings } from "@/components/report/chart/Chart";

const flowRatings: FlowRatings = {
  goodConditions: {
    min: 100,
    caption: "Good",
    color: {
      background: "chartGood",
      border: "chartGoodBorder",
    },
  },
  fairConditions: {
    min: 50,
    caption: "Fair",
    color: {
      background: "chartFair",
      border: "chartFairBorder",
    },
  },
  badConditions: {
    min: 0,
    caption: "Not Surfable",
    color: {
      background: "chartBad",
      border: "chartBadBorder",
    },
  },
};

const usgsID = "06710247";

it("Loading spinner renders first", async () => {
  render(<Chart usgsID={usgsID} flowRatings={flowRatings} />);
  const colorRing = await waitFor(() => screen.getByTestId("color-ring-svg"));
  expect(colorRing).toBeInTheDocument();
});

describe("Test sucessessful get request", () => {
  it("Canvas Renders when data is returned", async () => {
    render(<Chart usgsID={usgsID} flowRatings={flowRatings} />);
    await waitFor(() => screen.getByRole("img"));
    const canvas = screen.getByRole("img");
    expect(canvas).toBeInTheDocument();
  });

  it("Legend renders correctly", async () => {
    render(<Chart usgsID={usgsID} flowRatings={flowRatings} />);
    const goodText = await waitFor(() => screen.getByText("Good"));
    const fairText = screen.getByText("Fair");
    const badText = screen.getByText("Not Surfable");
    [goodText, fairText, badText].forEach((item) =>
      expect(item).toBeInTheDocument()
    );
  });
});

it("Error Text is returned when returned an error status", async () => {
  render(<Chart usgsID={usgsID} flowRatings={flowRatings} />);
  mswServer.use(
    rest.get("https://waterservices.usgs.gov/nwis/*", (req, res, ctx) => {
      return res(ctx.status(401), ctx.json(riverDatabaseData));
    })
  );
  const invalidDataMessage = await waitFor(() =>
    screen.getByText("Chart Data Not Available at This Time")
  );
  expect(invalidDataMessage).toBeInTheDocument();
});
