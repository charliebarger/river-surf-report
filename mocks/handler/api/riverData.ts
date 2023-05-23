import { rest } from "msw";
import { riverData as riverDatabaseData } from "../../database";
export const riverData = [
  rest.get("https://waterservices.usgs.gov/nwis/iv", (req, res, ctx) => {
    return res(ctx.json(riverDatabaseData));
  }),
];
