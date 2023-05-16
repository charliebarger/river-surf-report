import { rest } from "msw";
import { riverData as riverDatabaseData } from "../../database";
export const riverData = [
  rest.get("https://waterservices.usgs.gov/nwis/iv", (req, res, ctx) => {
    const id = req.url.searchParams.get("sites");
    if (!id) {
      return res(ctx.status(400));
    }
    return res(ctx.json(riverDatabaseData));
  }),
];
