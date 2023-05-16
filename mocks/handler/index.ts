import { riverData } from "./api/riverData";
import { topFlowsData } from "./api/topFlows";

export const handlers = [...riverData, ...topFlowsData];
