import { rest } from "msw";
import { riverData as riverDatabaseData } from "../../database";
export const riverData = [
  rest.get("https://waterservices.usgs.gov/nwis/*", (req, res, ctx) => {
    console.log("rehed");
    return res(ctx.status(200), ctx.json(riverDatabaseData));
  }),
];
