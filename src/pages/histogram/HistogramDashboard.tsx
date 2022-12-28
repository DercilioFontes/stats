import React from 'react';
import { Row, Col, Panel, Form, ButtonToolbar, Button, useToaster, Notification } from 'rsuite';
import PieChart from '../../components/Charts/PieChart';
import DataTable, { TableData } from '../../components/Table/DataTable';
import BarChart from '../../components/Charts/BarChart';
import Textarea from '@/components/Textarea';
import InfoPopover from '@/components/InfoPopover';

type ChartData = {
  labels: string[];
  data: number[];
  cumulativeFrequencies: number[];
  sum: number;
};

const initialClasses = [
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
const initialObservations = Array.from({ length: 40 }, () => Math.floor(Math.random() * 100));

const getChartData = (classesStr: string, observationsStr: string): ChartData | null => {
  const classesMatches = classesStr.matchAll(/(\d+ *- *\d+)/g);
  const observationsMatches = observationsStr.matchAll(/( *\d+\.?\d* *)/g);
  // Map of class => [min, max, count]
  const classesMap = new Map<string, [number, number, number]>();

  for (const classMatch of classesMatches) {
    const c = classMatch[0];
    const [min, max] = c.split('-').map<number>(Number);
    classesMap.set(c, [min, max, 0]);
  }

  if (classesMap.size === 0) {
    return null;
  }

  for (const observationMatch of observationsMatches) {
    const o = Number(observationMatch[0]);
    for (const values of classesMap.values()) {
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

  for (const [key, value] of classesMap.entries()) {
    labels.push(key);
    const count = value[2];
    data.push(count);
    sum += count;
    cumulativeFrequencies.push(sum);
  }

  return { labels, data, cumulativeFrequencies, sum };
};

const getTableData = (chartData: ChartData | null): TableData[] => {
  if (!chartData) {
    return [
      {
        label: undefined,
        frequency: undefined,
        relativeFrequency: undefined,
        cumulativeFrequency: undefined
      }
    ];
  }
  return chartData.labels.map<TableData>((label, i) => {
    const frequency = chartData.data[i];
    const relativeFrequency = Number(((frequency / chartData.sum) * 100).toFixed(2));
    return {
      label,
      frequency,
      relativeFrequency,
      cumulativeFrequency: chartData.cumulativeFrequencies[i]
    };
  });
};

const initFormValue = {
  classes: initialClasses.join('\n'),
  observations: initialObservations.join('\n')
};

const HistogramDashboard = () => {
  const [formValue, setFormValue] = React.useState<Record<string, string>>(initFormValue);
  const [chartData, setChartData] = React.useState<ChartData | null>(
    getChartData(initFormValue.classes, initFormValue.observations)
  );
  const [tableData, setTableData] = React.useState(getTableData(chartData));
  const toaster = useToaster();

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
              <p>
                The <strong>cumulative frequency distribution</strong> displays the number of
                observations that are less than or equal to the current class. In other words, it
                sums the frequency in the current class and the frequencies in the previous classes.
              </p>
            </div>
          </Panel>
        </Col>
      </Row>

      <Row gutter={30}>
        <Col xs={16}>
          <Panel
            className="card"
            header={
              <>
                Data
                <InfoPopover
                  title="Adding data"
                  content={
                    <ul>
                      <li>Use any delimiter between the values, except a decimal separator (.)</li>
                      <li>
                        For the classes, use a dash (-) to define the intervals and don&apos;t
                        overlap them
                      </li>
                      <li>
                        Example:
                        <pre>
                          Classes: 10-20, 21 - 30; 31- 40
                          <br /> 51 - 60
                          <br /> 61-70
                        </pre>
                        <pre>
                          Observations: 13, 23; 35
                          <br /> 41
                          <br /> 45
                        </pre>
                      </li>
                      <li>You can copy and paste from a spreadsheeet like Excel</li>
                    </ul>
                  }
                />
              </>
            }
          >
            <Col>
              <Form
                layout="inline"
                formValue={formValue}
                onChange={formValue => setFormValue(formValue)}
              >
                <Form.Group controlId="textarea">
                  <Form.ControlLabel>Classes (intervals)</Form.ControlLabel>
                  <Form.Control rows={initialClasses.length} name="classes" accepter={Textarea} />
                </Form.Group>
                <Form.Group controlId="textarea">
                  <Form.ControlLabel>Observations (values)</Form.ControlLabel>
                  <Form.Control
                    rows={initialClasses.length}
                    name="observations"
                    accepter={Textarea}
                  />
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button
                      appearance="default"
                      onClick={() => setFormValue({ classes: '', observations: '' })}
                    >
                      Clear
                    </Button>
                    <Button appearance="default" onClick={() => setFormValue(initFormValue)}>
                      Reset
                    </Button>
                    <Button
                      appearance="primary"
                      onClick={() => {
                        if (!formValue.classes || !formValue.observations) {
                          toaster.push(
                            <Notification type="warning" header="warning">
                              <p>
                                No data! Please, add the classes intervals and observation values.
                              </p>
                            </Notification>,
                            { placement: 'topEnd' }
                          );
                          return;
                        } else {
                          const newChartData = getChartData(
                            formValue.classes,
                            formValue.observations
                          );
                          setChartData(newChartData);
                          setTableData(getTableData(newChartData));
                        }
                      }}
                    >
                      Submit
                    </Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Col>
          </Panel>
        </Col>
        <Col xs={8}>
          <BarChart title="Histogram" data={chartData} type="bar" labels={chartData?.labels} />
        </Col>
      </Row>
      <Row gutter={30}>
        <Col xs={16}>
          <DataTable data={tableData} />
        </Col>
        <Col xs={8}>
          <PieChart
            title="Pie Chart"
            data={chartData?.data}
            type="pie"
            labels={chartData?.labels}
          />
        </Col>
      </Row>
    </>
  );
};

export default HistogramDashboard;