import React from 'react';
import Chart from 'react-apexcharts';
import { Panel, Stack } from 'rsuite';

interface BarChartProps {
  title?: React.ReactNode;
  data: any;
  type?:
    | 'line'
    | 'area'
    | 'bar'
    | 'histogram'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'treemap'
    | 'boxPlot'
    | 'candlestick'
    | 'radar'
    | 'polarArea'
    | 'rangeBar';
  options?: any;
  labels?: string[];
}

const defaultOptions: ApexCharts.ApexOptions = {
  chart: {
    fontFamily: 'inherit',
    parentHeightOffset: 0,
    toolbar: {
      offsetY: -40,
      offsetX: 10
    }
  },
  fill: {
    opacity: 1
  },
  grid: {
    padding: {
      top: -20,
      right: 0,
      left: -4,
      bottom: -4
    },
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: true
      }
    }
  },
  xaxis: {
    tooltip: {
      enabled: false
    },
    axisBorder: {
      show: false
    }
  },
  yaxis: {
    labels: {
      padding: 4
    }
  },
  colors: [
    '#206bc4',
    '#52e7a7',
    '#ffbc4c',
    '#ff677a',
    '#8d78d7',
    '#708590',
    '#55b4aa',
    '#d945ec',
    '#79a6dc',
    '#bfe399',
    '#61a5e7'
  ],
  legend: {
    show: false
  }
};

const BarChart = ({ title, data, type, labels, options }: BarChartProps) => (
  <Panel className="card" header={<Stack justifyContent="space-between">{title}</Stack>}>
    <Chart
      series={[data]}
      type={type}
      height={284}
      options={Object.assign({}, defaultOptions, options, { labels })}
    />
  </Panel>
);

export default BarChart;
