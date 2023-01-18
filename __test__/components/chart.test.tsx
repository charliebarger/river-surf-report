import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { riverData as riverDatabaseData } from "../../mocks/database";
import Chart from "../../components/report/chart/Chart";

const server = setupServer(
  rest.get("https://waterservices.usgs.gov/nwis/*", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(riverDatabaseData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Chart", () => {
  server.use(
    rest.get("https://waterservices.usgs.gov/nwis/*", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  it("handle server error", async () => {
    render(
      <Chart
        usgsID="06710247"
        flowRatings={{
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
        }}
      />
    );

    await waitFor(() =>
      screen.getByText("Chart Data Not Available at This Time")
    );

    const badRequestWarning = screen.getByText(
      "Chart Data Not Available at This Time"
    );

    expect(badRequestWarning).toBeInTheDocument();
  });

  // it("check that all data is");
});
