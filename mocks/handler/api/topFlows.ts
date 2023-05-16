import { rest } from "msw";
import { topFlows as topFlowsDatabase } from "@/mocks/database";
export const topFlowsData = [
  rest.get("/api/top-flows", (req, res, ctx) => {
    return res(ctx.json(topFlowsDatabase));
  }),
];
