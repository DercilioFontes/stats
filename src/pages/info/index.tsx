import React from 'react';
import { Panel } from 'rsuite';
import Info from './Info';
import Copyright from '@/components/Copyright';

const Page = () => {
  return (
    <Panel header={<h3 className="title">Info</h3>}>
      <Info />
      <Copyright />
    </Panel>
  );
};

export default Page;
