import React from 'react';
import { Icon } from '@rsuite/icons';
import { MdDashboard } from 'react-icons/md';

export const appNavs = [
  {
    eventKey: 'dashboard',
    icon: <Icon as={MdDashboard} />,
    title: 'Dashboard',
    to: '/dashboard'
  }
  // {
  //   eventKey: 'tables',
  //   icon: <Icon as={VscTable} />,
  //   title: 'Tables',
  //   to: '/table-members',
  //   children: [
  //     {
  //       eventKey: 'members',
  //       title: 'Members',
  //       to: '/table-members'
  //     },
  //     {
  //       eventKey: 'virtualized',
  //       title: 'Virtualized Table',
  //       to: '/table-virtualized'
  //     }
  //   ]
  // }
];
