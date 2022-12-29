import React from 'react';
import { Panel } from 'rsuite';
import HistogramDashboard from './HistogramDashboard';
import Copyright from '@/components/Copyright';

const Page = () => {
  return (
    <Panel header={<h3 className="title">Histogram</h3>}>
      <HistogramDashboard />
      <Copyright />
    </Panel>
  );
};

export default Page;
