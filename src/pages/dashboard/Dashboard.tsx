import React from 'react';
import { Row, Col, Panel, Stack, Form, ButtonToolbar, Button, Input } from 'rsuite';
import PieChart from './PieChart';
import DataTable, { TableData } from './DataTable';
import BarChart from './BarChart';

const classes = [
  '0 - 10',
  '11 - 20',
  '21 - 30',
  '31 - 40',
  '41 - 50',
  '51 - 60',
  '61 - 70',
  '71 - 80',
  '81 - 90',
  '91 - 100'
];
const observations = Array.from({ length: 40 }, () => Math.floor(Math.random() * 100));

const getData = (classes: string[], observations: number[]) => {
  // Map of classe => [min, max, count]
  const mapResult = new Map(classes.map(c => [c, [...c.split('-').map(Number), 0]]));

  for (const o of observations) {
    for (const values of mapResult.values()) {
      const [min, max] = values;
      if (o >= min && o <= max) {
        values[2] += 1;
      }
    }
  }

  const labels: string[] = [];
  const data: number[] = [];
  const cumulativeFrequencies: number[] = [];
  let sum = 0;

  for (const [key, value] of mapResult.entries()) {
    labels.push(key);
    const count = value[2];
    data.push(count);
    sum += count;
    cumulativeFrequencies.push(sum);
  }

  return { labels, data, cumulativeFrequencies, sum };
};

const dataFromInput = getData(classes, observations);

const tableData = dataFromInput.labels.map<TableData>((label, i) => {
  const frequency = dataFromInput.data[i];
  const relativeFrequency = Number(((frequency / dataFromInput.sum) * 100).toFixed(2));
  return {
    label,
    frequency,
    relativeFrequency,
    cumulativeFrequency: dataFromInput.cumulativeFrequencies[i]
  };
});

const Textarea = React.forwardRef<HTMLTextAreaElement>((props, ref) => (
  <Input {...props} as="textarea" ref={ref} />
));

const Dashboard = () => {
  return (
    <>
      <Row gutter={30} className="dashboard-header">
        <Col xs={8}>
          <Panel className="trend-box bg-gradient-red">
            <div className="title">
              A <strong>histogram</strong> is a bar graph showing the number of observations in each
              class as the height of each bar.
            </div>
          </Panel>
        </Col>
        <Col xs={8}>
          <Panel className="trend-box bg-gradient-green">
            <div className="title">
              <p>
                Organizing and presenting data sets can take three main forms: frequency
                distributions, graphs, and stem and leaf designs.
              </p>
              <p>
                The intervals in the frequency distribution are known as classes, and the number of
                observations in each class is known as frequency.
              </p>
            </div>
          </Panel>
        </Col>
        <Col xs={8}>
          <Panel className="trend-box bg-gradient-blue">
            <div className="title">
              <p>
                A <strong>frequency distribution</strong> is a table with two columns: One column
                has the classes for the variable of interest and the second column has the frequency
                in each class.
              </p>
              <p>
                <strong>Relative frequency distributions</strong> display the percentage of
                observations in each class relative to the total number of observations. The
                percentages are called relative frequencies.
              </p>
            </div>
          </Panel>
        </Col>
      </Row>

      <Row gutter={30}>
        <Col xs={16}>
          <Panel className="card" header={<Stack justifyContent="space-between">Data</Stack>}>
            <Col>
              <Form layout="inline">
                <Form.Group controlId="textarea">
                  <Form.ControlLabel>Classes (intervals)</Form.ControlLabel>
                  <Form.Control
                    rows={classes.length}
                    name="textarea"
                    accepter={Textarea}
                    defaultValue={classes.join('\n')}
                  />
                </Form.Group>
                <Form.Group controlId="textarea">
                  <Form.ControlLabel>Observations (values)</Form.ControlLabel>
                  <Form.Control
                    rows={classes.length}
                    name="textarea"
                    accepter={Textarea}
                    defaultValue={observations.join('\n')}
                  />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button appearance="primary">Submit</Button>
                    <Button appearance="default">Cancel</Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Col>
          </Panel>
        </Col>
        <Col xs={8}>
          <BarChart
            title="Histogram"
            data={dataFromInput}
            type="bar"
            labels={dataFromInput.labels}
          />
        </Col>
      </Row>
      <Row gutter={30}>
        <Col xs={16}>
          <DataTable data={tableData} />
        </Col>
        <Col xs={8}>
          <PieChart
            title="Pie Chart"
            data={dataFromInput.data}
            type="pie"
            labels={dataFromInput.labels}
          />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
