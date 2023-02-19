import React from 'react';
import { Table, Panel, Stack } from 'rsuite';
import { CSVLink } from 'react-csv';
import { Icon } from '@rsuite/icons';
import { FaFileDownload } from 'react-icons/fa';

const { Column, HeaderCell, Cell } = Table;

export type TableData = {
  label: string | undefined;
  value: number | undefined;
};

const getCsv = (data: TableData[]) => {
  const csv = 'Category,Value\n' + data.map(d => Object.values(d).join(',')).join('\n');

  return csv;
};

const DataTable = ({ data }: { data: TableData[] }) => {
  return (
    <Panel
      className="card"
      header={
        <Stack justifyContent="space-between">
          Table
          <CSVLink filename="bar-chat-table" title="Download CSV file" data={getCsv(data)}>
            <Icon style={{ color: '#6e8192' }} as={FaFileDownload} />
          </CSVLink>
        </Stack>
      }
    >
      <Table height={300} data={data} rowKey="label">
        <Column flexGrow={1} fixed="left" minWidth={100}>
          <HeaderCell className="table-header">Category</HeaderCell>
          <Cell dataKey="label"></Cell>
        </Column>

        <Column width={200}>
          <HeaderCell className="table-header">Value</HeaderCell>
          <Cell dataKey="value" />
        </Column>
      </Table>
    </Panel>
  );
};

export default DataTable;
