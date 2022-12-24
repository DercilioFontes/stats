import React from 'react';
import { Row, Col, Panel, Stack, Form, ButtonToolbar, Button, Input } from 'rsuite';
import PieChart from './PieChart';
import DataTable from './DataTable';
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
const frequencies = Array.from({ length: 40 }, () => Math.floor(Math.random() * 100));

const getData = (classes: string[], frequencies: number[]) => {
  const mapResult = new Map(classes.map(c => [c, [...c.split('-').map(Number), 0]]));

  for (const f of frequencies) {
    for (const values of mapResult.values()) {
      const [min, max] = values;
      if (f >= min && f <= max) {
        values[2] += 1;
      }
    }
  }

  const labels: string[] = [];
  const data: number[] = [];

  for (const [key, value] of mapResult.entries()) {
    labels.push(key);
    data.push(value[2]);
  }

  return { labels, data };
};

const data = getData(classes, frequencies);

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

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
                  <Form.ControlLabel>Frenquency</Form.ControlLabel>
                  <Form.Control
                    rows={classes.length}
                    name="textarea"
                    accepter={Textarea}
                    defaultValue={frequencies.join('\n')}
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
          <BarChart title="Chart" data={data} type="bar" labels={data.labels} />
        </Col>
      </Row>
      <Row gutter={30}>
        <Col xs={16}>
          <DataTable />
        </Col>
        <Col xs={8}>
          <PieChart
            title="Browsers"
            data={[10000, 3000, 2000, 1000, 900]}
            type="pie"
            labels={['Chrome', 'Edge', 'Firefox', 'Safari', 'Other']}
          />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
