import { setupWorker } from "msw";
import { handlers } from "./handler";
console.log("setting up worker");
export const mswWorker = setupWorker(...handlers);
