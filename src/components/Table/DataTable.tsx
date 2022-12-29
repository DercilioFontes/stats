import React from 'react';
import { Table, Panel, Stack } from 'rsuite';
import { CSVLink } from 'react-csv';
import { Icon } from '@rsuite/icons';
import { FaFileDownload } from 'react-icons/fa';

const { Column, HeaderCell, Cell } = Table;

export type TableData = {
  label: string | undefined;
  frequency: number | undefined;
  relativeFrequency: number | undefined;
  cumulativeFrequency: number | undefined;
};

const getCsv = (data: TableData[]) => {
  const csv =
    'Classes,Frequency,Relative frequency (%),Cumulative frequency\n' +
    data.map(d => Object.values(d).join(',')).join('\n');

  return csv;
};

const DataTable = ({ data }: { data: TableData[] }) => {
  return (
    <Panel
      className="card"
      header={
        <Stack justifyContent="space-between">
          Table
          <CSVLink filename="frequencies" data={getCsv(data)}>
            <Icon style={{ color: '#6e8192' }} as={FaFileDownload} />
          </CSVLink>
        </Stack>
      }
    >
      <Table height={300} data={data} rowKey="label">
        <Column flexGrow={1} minWidth={100}>
          <HeaderCell className="table-header">Classes</HeaderCell>
          <Cell dataKey="label"></Cell>
        </Column>

        <Column width={200}>
          <HeaderCell className="table-header">Frequency</HeaderCell>
          <Cell dataKey="frequency" />
        </Column>

        <Column width={200}>
          <HeaderCell className="table-header">Relative frequency (%)</HeaderCell>
          <Cell dataKey="relativeFrequency" />
        </Column>

        <Column width={200}>
          <HeaderCell className="table-header">Cumulative frequency</HeaderCell>
          <Cell dataKey="cumulativeFrequency" />
        </Column>
      </Table>
    </Panel>
  );
};

export default DataTable;
