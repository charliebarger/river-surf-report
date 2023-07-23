import { SectionWrapper } from '../../utility/SectionWrapper';
import ProfilePic from '../../profile/ProfilePic';
import ProfileInfo from '../../profile/ProfileInfo';
import PageSubHeader from '@/components/utility/PageSubHeader';

interface surfReportProps {
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

const SurfReport = ({ reporter, report }: surfReportProps) => {
  return (
    <SectionWrapper>
      <PageSubHeader>Reports</PageSubHeader>
      <div className='mb-4 flex '>
        <button className='underline-black font-option border-b-4 border-black px-2'>
          Most Recent
        </button>
        <button className='underline-black font-option border-b-4 border-gray-200 px-2'>
          All Reports (422)
        </button>
        <button></button>
      </div>
      <div className='border-y-2 py-3 text-left'>
        <div className='flex gap-2'>
          <ProfilePic headshot={reporter.img} />
          <ProfileInfo name={reporter.name} title={reporter.description} />
        </div>
        <p className='pb-2'>{report.report}</p>
        <div className='  flex flex-col justify-items-start'>
          <div className=' text-sm font-semibold'>
            <span>Last Updated: </span>
            <time className=' text-primaryColor ' dateTime='2021-12-20'>
              {report.date}
            </time>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SurfReport;
