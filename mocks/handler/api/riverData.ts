import { rest } from "msw";

export const riverData = [
  rest.get("https://waterservices.usgs.gov/*", (req, res, ctx) => {
    console.log("yo");
    ctx.status(401);
  }),
];
