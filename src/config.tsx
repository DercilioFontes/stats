import React from 'react';
import { Icon } from '@rsuite/icons';
import { MdBarChart } from 'react-icons/md';

export const appNavs = [
  {
    eventKey: 'histogram',
    icon: <Icon as={MdBarChart} />,
    title: 'Histogram',
    to: '/histogram'
  }
];
