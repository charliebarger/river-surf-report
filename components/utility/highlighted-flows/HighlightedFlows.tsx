import React from 'react';
import FavoriteLink from './FavoriteLink';
import { TopFlows } from 'report.types';
import FlowInfoQuickCard from './FlowInfoQuickCard';

interface TopFlowsProps {
  topFlows: TopFlows[];
  hideTopFlows?: boolean;
}

const HighlightedFlows = ({ topFlows, hideTopFlows }: TopFlowsProps) => {
  return (
    <div className=' flex-1'>
      <div>
        <h3 className='mb-2 pb-1 text-xl font-bold '>Favorites</h3>
        <FavoriteLink />
      </div>

      <div className={`${hideTopFlows && 'hidden lg:block'}`}>
        <h3 className=' mt-4 mb-2 pb-1 text-xl font-bold '>Top Flows</h3>
        {topFlows.map(({ waveName, flows, countryFlag, urlParam }) => (
          <FlowInfoQuickCard
            key={urlParam}
            waveName={waveName}
            flows={flows}
            countryFlag={countryFlag}
            urlParam={urlParam}
          />
        ))}
      </div>
    </div>
  );
};

export default HighlightedFlows;
