import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { rest } from "msw";
import next from "next";
import { setupServer } from "msw/node";
import { riverData as riverDatabaseData } from "../../mocks/database";
import { FlowRatings } from "../../components/report/chart/Chart";
import Chart from "../../components/report/chart/Chart";

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

const server = setupServer(
  rest.get("https://waterservices.usgs.gov/nwis/*", (req, res, ctx) => {
    console.log("server being called");
    return res(ctx.json(riverDatabaseData));
  })
);

beforeAll(() => {
  console.log("before");
  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("check that server is ok", async () => {
  const { debug } = render(
    <Chart usgsID="06710247" flowRatings={flowRatings} />
  );
  debug();
  await waitFor(() => screen.getByText("Not Surfable"));
  const badRequestWarning = screen.getByRole("");

  expect(badRequestWarning).toBeInTheDocument();
});

// describe("Requests status for chart", () => {
//   server.use(
//     rest.get("https://waterservices.usgs.gov/nwis/*", (req, res, ctx) => {
//       return res(ctx.status(500));
//     })
//   );

//   it("handle server error", async () => {
//     render(<Chart usgsID="06710247" flowRatings={flowRatings} />);

//     await waitFor(() =>
//       screen.getByText("Chart Data Not Available at This Time")
//     );

//     const badRequestWarning = screen.getByText(
//       "Chart Data Not Available at This Time"
//     );

//     expect(badRequestWarning).toBeInTheDocument();
//   });

//   // it("check that all data is");
// });
