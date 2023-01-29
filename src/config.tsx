import React from 'react';
import { Icon } from '@rsuite/icons';
import { MdBarChart, MdInfoOutline } from 'react-icons/md';

export const appNavs = [
  {
    eventKey: 'histogram',
    icon: <Icon as={MdBarChart} onClick={() => undefined} />,
    title: 'Histogram',
    to: '/histogram'
  },
  {
    eventKey: 'info',
    icon: <Icon as={MdInfoOutline} onClick={() => undefined} />,
    title: 'Info',
    to: '/info'
  }
];
