import React from 'react';
import { Icon } from '@rsuite/icons';
import { MdBarChart, MdInfoOutline } from 'react-icons/md';

export const appNavs = [
  {
    eventKey: 'histogram',
    icon: <Icon as={MdBarChart} />,
    title: 'Histogram',
    to: '/histogram'
  },
  {
    eventKey: 'info',
    icon: <Icon as={MdInfoOutline} />,
    title: 'Info',
    to: '/info'
  }
];
