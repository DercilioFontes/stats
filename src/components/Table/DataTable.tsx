import React from 'react';
import { Table, Panel } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

export type TableData = {
  label: string | undefined;
  frequency: number | undefined;
  relativeFrequency: number | undefined;
  cumulativeFrequency: number | undefined;
};

const DataTable = ({ data }: { data: TableData[] }) => {
  return (
    <Panel className="card" header="Table">
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
