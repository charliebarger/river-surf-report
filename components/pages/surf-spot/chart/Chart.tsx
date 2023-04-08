import { Line } from 'react-chartjs-2';
import { SectionWrapper } from '@/components/utility/SectionWrapper';
import Annotation from 'chartjs-plugin-annotation';
import { ColorRing } from 'react-loader-spinner';
import useChart from './useChart';
import { useRef } from 'react';
import { Borders, Backgrounds } from 'report.types';
import { colors } from '@/helpers/colors';
import LegendItem from './LegendItem';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  Annotation
);

interface chartParams {
  usgsID: string;
  smallScreen?: boolean;
  flowRatings: FlowRatings;
}
export interface FlowRatings {
  fairConditions: Conditions;
  goodConditions: Conditions;
  badConditions: Conditions;
}

export interface Conditions {
  caption: string;
  min: number;
  color: {
    background: Backgrounds;
    border: Borders;
  };
}
export function Chart({
  usgsID,
  flowRatings,
  smallScreen = false,
}: chartParams) {
  const chartWrapperRef = useRef<HTMLDivElement>(null);
  const chartData = useChart(usgsID, flowRatings, chartWrapperRef);

  const getChartState = () => {
    if (chartData.res !== false) {
      return (
        <>
          <Line options={chartData.res.options} data={chartData.res.data} />
          {!smallScreen && (
            <div className='flex flex-wrap gap-4 ml-[50px] mt-2'>
              {(Object.keys(flowRatings) as Array<keyof FlowRatings>).map(
                (item, i) => (
                  <LegendItem
                    key={i}
                    boxColor={flowRatings[item].color}
                    caption={flowRatings[item].caption}
                  />
                )
              )}
            </div>
          )}
        </>
      );
    } else if (chartData.error) {
      return (
        <div className='d-flex text-red-600 text-lg font-bold text-center'>
          <p className=' m-auto'>Chart Data Not Available at This Time</p>
        </div>
      );
    } else {
      // loading state
      return (
        <div className='flex justify-center'>
          <ColorRing
            visible={true}
            height='100'
            width='100'
            ariaLabel='blocks-loading'
            wrapperStyle={{}}
            wrapperClass='blocks-wrapper'
            colors={[
              colors.chartBad,
              colors.chartBad,
              colors.chartFair,
              colors.chartGood,
              colors.chartGood,
            ]}
          />
        </div>
      );
    }
  };

  return smallScreen ? (
    <div ref={chartWrapperRef} className='w-full h-full '>
      {getChartState()}
    </div>
  ) : (
    <SectionWrapper>
      <div ref={chartWrapperRef} className='max-w-5xl m-auto lg:px-5'>
        {getChartState()}
      </div>
    </SectionWrapper>
  );
}

export default Chart;