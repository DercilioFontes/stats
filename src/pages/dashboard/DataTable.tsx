import React from 'react';
import { Table, Panel } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

export type TableData = {
  label: string;
  frequency: number;
  relativeFrequency: number;
  cumulativeFrequency: number;
};

const DataTable = ({ data }: { data: TableData[] }) => {
  return (
    <Panel className="card" header="Table">
      <Table height={300} data={data} rowKey="label">
        <Column flexGrow={1} minWidth={100}>
          <HeaderCell>Classes</HeaderCell>
          <Cell dataKey="label"></Cell>
        </Column>

        <Column width={200}>
          <HeaderCell>Frequency</HeaderCell>
          <Cell dataKey="frequency" />
        </Column>

        <Column width={200}>
          <HeaderCell>Relative frequency (%)</HeaderCell>
          <Cell dataKey="relativeFrequency" />
        </Column>

        <Column width={200}>
          <HeaderCell>Cumulative frequency</HeaderCell>
          <Cell dataKey="cumulativeFrequency" />
        </Column>
      </Table>
    </Panel>
  );
};

export default DataTable;
