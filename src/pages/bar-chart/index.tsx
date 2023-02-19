import React from 'react';
import { Panel } from 'rsuite';
import BarChartDashboard from './BarChartDashboard';
import Copyright from '@/components/Copyright';

const Page = () => {
  return (
    <Panel header={<h3 className="title">Bar Chart</h3>}>
      <BarChartDashboard />
      <Copyright />
    </Panel>
  );
};

export default Page;
