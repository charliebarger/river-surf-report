import { render, screen } from "@testing-library/react";
import SurfReport from "@/components/pages/surf-spot/SurfReport";

describe("Surf Report", () => {
  render(
    <SurfReport
      report={{ date: "01/24/1996", report: "Frikin pumpin bruh" }}
      reporter={{
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fsurfing&psig=AOvVaw3Kl02kD7n5Mx_9m8xxMDM8&ust=1673536200330000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLDaoKfmv_wCFQAAAAAdAAAAABAE",
        description: "real right surf brah",
        name: "Dane Reynolds",
      }}
    />
  );

  it("contsins the surf report", () => {
    const report = screen.getByText("real right surf brah");
    expect(report).toBeInTheDocument();
  });
});
