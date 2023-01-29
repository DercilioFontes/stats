import React from 'react';
import { Icon } from '@rsuite/icons';
import { MdInfoOutline } from 'react-icons/md';
import { IoBarChartSharp } from 'react-icons/io5';
import { AiOutlineBarChart } from 'react-icons/ai';

export const appNavs = [
  {
    eventKey: 'histogram',
    icon: <Icon as={IoBarChartSharp} onClick={() => undefined} />,
    title: 'Histogram',
    to: '/histogram'
  },
  {
    eventKey: 'bar-chart',
    icon: <Icon as={AiOutlineBarChart} onClick={() => undefined} />,
    title: 'Bar Chart',
    to: '/bar-chart'
  },
  {
    eventKey: 'info',
    icon: <Icon as={MdInfoOutline} onClick={() => undefined} />,
    title: 'Info',
    to: '/info'
  }
];
