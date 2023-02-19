import React from 'react';
import { Row, Col, Panel, Form, ButtonToolbar, Button, useToaster, Notification } from 'rsuite';
import BarChart from '../../components/Charts/BarChart';
import Textarea from '@/components/Textarea';
import InfoPopover from '@/components/InfoPopover';
import DataTable, { TableData } from './DataTable';

type ChartData = {
  labels: string[];
  data: number[];
};

const initialCategories = [
  'Russia',
  'Canada',
  'China',
  'United States',
  'Brazil',
  'Australia',
  'India',
  'Argentina',
  'Kazakhstan',
  'Algeria'
];
const initialObservations = [
  17_098_242, 9_984_670, 9_706_961, 9_372_610, 8_515_767, 7_692_024, 3_287_590, 2_780_400,
  2_724_900, 2_381_741
];

const getChartData = (categoriesStr: string, observationsStr: string): ChartData | null => {
  const categoriesMatches = categoriesStr.matchAll(/(.+)[\n|,|;]?/g);
  const observationsMatches = observationsStr.matchAll(/( *\d+\.?\d* *)/gu);
  const labels: string[] = [];
  const data: number[] = [];

  for (const categoryMatch of categoriesMatches) {
    const c = categoryMatch[1];
    labels.push(c);
  }

  for (const observationMatch of observationsMatches) {
    const o = Number(observationMatch[0]);
    data.push(o);
  }

  return { labels, data };
};

const getTableData = (chartData: ChartData | null): TableData[] => {
  if (!chartData) {
    return [
      {
        label: undefined,
        value: undefined
      }
    ];
  }
  return chartData.labels.map<TableData>((label, i) => {
    const value = chartData.data[i];
    return {
      label,
      value
    };
  });
};

const initFormValue = {
  classes: initialCategories.join('\n'),
  observations: initialObservations.join('\n')
};

const BarChartDashboard = () => {
  const [formValue, setFormValue] = React.useState<Record<string, string>>(initFormValue);
  const [chartData, setChartData] = React.useState<ChartData | null>(
    getChartData(initFormValue.classes, initFormValue.observations)
  );
  const [tableData, setTableData] = React.useState(getTableData(chartData));
  const toaster = useToaster();

  return (
    <>
      <Row gutter={30} className="dashboard-header">
        <Col lg={8}>
          <Panel className="trend-box bg-gradient-red">
            <div className="title">
              <p>
                A <strong>bar chart</strong> or <strong>bar graph</strong> is a chart or graph that
                presents categorical data with rectangular bars with heights or lengths proportional
                to the values that they represent. The bars can be plotted vertically or
                horizontally. A vertical bar chart is sometimes called a
                <strong>column chart</strong>.
                <br />
                <cite>(Wikipedia contributors, 2023)</cite>
              </p>
            </div>
          </Panel>
        </Col>
        <Col lg={8}>
          <Panel className="trend-box bg-gradient-green">
            <div className="title">
              <p>
                Bar graphs/charts provide a visual presentation of categorical data. Categorical
                data is a grouping of data into discrete groups, such as months of the year, age
                group, shoe sizes, and animals. These categories are usually qualitative. In a
                column (vertical) bar chart, categories appear along the horizontal axis and the
                height of the bar corresponds to the value of each category.
                <br />
                <cite>(Wikipedia contributors, 2023)</cite>
              </p>
            </div>
          </Panel>
        </Col>
        <Col lg={8}>
          <Panel className="trend-box bg-gradient-blue">
            <div className="title">
              <p>
                What is the difference between a histogram and a bar chart? There are two main
                differences:
              </p>
              <p>
                1. For the histogram, you have to present the classes on the horizontal axis and the
                frequency on the vertical axis, whereas for the bar chart, you can present any
                variable on the axes.
              </p>
              <p>
                2. The histogram has no gaps between the bars, whereas the bar chart does have gaps
                between the bars. Also, in the bar chart, bars can be represented vertically or
                horizontally.
              </p>
              <cite>(Donnelly and Abdel-Raouf, 2016)</cite>
            </div>
          </Panel>
        </Col>
      </Row>

      <Row gutter={30}>
        <Col lg={16}>
          <Panel
            className="card"
            header={
              <>
                Data
                <InfoPopover
                  title="Adding data"
                  content={
                    <ul>
                      <li>
                        For categories, use new line, comma (,) or semicolon (;) as delimiter
                        between the values
                      </li>
                      <li>
                        For observations, use any delimiter between the values, except a decimal
                        separator (.)
                      </li>
                      <li>
                        Example:
                        <pre>
                          Category: Brazil, Canada; Germany
                          <br /> Netherlands
                          <br /> USA
                        </pre>
                        <pre>
                          Observations: 13, 2.3; 35
                          <br /> 4.1
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
            <Form formValue={formValue} onChange={formValue => setFormValue(formValue)}>
              <Row>
                <Col lg={12} style={{ marginTop: 8 }}>
                  <Form.Group controlId="classes">
                    <Form.ControlLabel>Categories (labels)</Form.ControlLabel>
                    <Form.Control name="classes" accepter={Textarea} />
                  </Form.Group>
                </Col>
                <Col lg={12} style={{ marginTop: 8 }}>
                  <Form.Group controlId="observations">
                    <Form.ControlLabel>Observations (values)</Form.ControlLabel>
                    <Form.Control name="observations" accepter={Textarea} />
                  </Form.Group>
                </Col>
              </Row>
              <Row style={{ marginTop: 16 }}>
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
              </Row>
            </Form>
          </Panel>
        </Col>
        <Col lg={8}>
          <BarChart
            title="Bar chart"
            data={chartData}
            type="bar"
            labels={chartData?.labels}
            options={{ dataLabels: { enabled: false } }}
          />
        </Col>
      </Row>
      <Row gutter={30}>
        <Col xs={24} lg={16}>
          <DataTable data={tableData} />
        </Col>
      </Row>
    </>
  );
};

export default BarChartDashboard;
