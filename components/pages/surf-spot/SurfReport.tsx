import { SectionWrapper } from "../../utility/SectionWrapper";
import ProfilePic from "../../profile/ProfilePic";
import ProfileInfo from "../../profile/ProfileInfo";

interface surfReportParams {
  reporter: {
    img: string;
    name: string;
    description: string;
  };
  report: {
    report: string;
    date: string;
  };
}

const SurfReport = ({ reporter, report }: surfReportParams) => {
  return (
    <SectionWrapper>
      {/* <PageSubHeader>Fishing Report</PageSubHeader> */}
      <div className="flex gap-5">
        <ProfilePic headshot={reporter.img} />
        <ProfileInfo name={reporter.name} title={reporter.description} />
      </div>
      <div className="text-left my-4 py-2 border-y-2">
        <p className="pb-2">{report.report}</p>
        <div className="  flex flex-col justify-items-start">
          <div className=" text-sm font-semibold">
            <span>Last Updated: </span>
            <time className=" text-primaryColor " dateTime="2021-12-20">
              {report.date}
            </time>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SurfReport;
