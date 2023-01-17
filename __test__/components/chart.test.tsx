import { render, screen, cleanup } from "@testing-library/react";
import Chart from "../../components/report/chart/Chart";

describe("Surf Report", () => {
  it("contsins the surf report", () => {
    const report = screen.getByText("real right surf brah");
    expect(report).toBeInTheDocument();
  });
});
