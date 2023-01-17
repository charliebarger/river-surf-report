import { setupWorker } from "msw";
import { handlers } from "./handler";
export const mswWorker = setupWorker(...handlers);
