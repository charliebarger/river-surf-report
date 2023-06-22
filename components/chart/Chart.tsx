import { Line } from 'react-chartjs-2';
import { SectionWrapper } from '@/components/utility/SectionWrapper';
import Annotation from 'chartjs-plugin-annotation';
import { useRef } from 'react';
import { Borders, Backgrounds } from 'report.types';
import { RiverAPIReturn } from '@/helpers/API_Calls/riverData';
import { chartDataAndOptions } from './chartDataAndOptions';
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

interface chartProps {
  chartData: RiverAPIReturn;
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
  chartData,
  flowRatings,
  smallScreen = false,
}: chartProps) {
  const chartWrapperRef = useRef<HTMLDivElement>(null);

  const getChartState = () => {
    if (chartData.data) {
      const dataAndOptions = chartDataAndOptions(
        chartData.data,
        flowRatings,
        chartWrapperRef,
        smallScreen
      );
      return (
        <>
          <Line options={dataAndOptions.options} data={dataAndOptions.data} />
          {!smallScreen && (
            <div className='ml-[50px] mt-2 flex flex-wrap gap-4'>
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
    } else {
      return (
        <div className='d-flex text-center text-lg font-bold text-red-600'>
          <p className=' m-auto'>Chart Data Not Available at This Time</p>
        </div>
      );
    }
  };

  return smallScreen ? (
    <div ref={chartWrapperRef} className='h-full w-full '>
      {getChartState()}
    </div>
  ) : (
    <SectionWrapper>
      <div ref={chartWrapperRef} className='m-auto max-w-5xl '>
        {getChartState()}
      </div>
    </SectionWrapper>
  );
}

export default Chart;
