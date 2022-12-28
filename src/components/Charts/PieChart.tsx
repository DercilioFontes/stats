import React from 'react';
import Chart from 'react-apexcharts';
import { Panel } from 'rsuite';

interface PieChartProps {
  title: string;
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
      show: true,
      offsetY: -40,
      offsetX: -10
    }
  },
  plotOptions: {
    pie: {
      customScale: 0.8,
      donut: {
        size: '75%'
      },
      offsetY: 0
    }
  },
  colors: [
    '#ea5545',
    '#f46a9b',
    '#ef9b20',
    '#edbf33',
    '#ede15b',
    '#bdcf32',
    '#87bc45',
    '#27aeef',
    '#b33dc6',
    '#5f71e4',
    '#2dce88',
    '#fa6340',
    '#f5365d',
    '#13cdef'
  ],
  legend: {
    position: 'right'
  }
};

const PieChart = ({ title, data, type, labels, options }: PieChartProps) => (
  <Panel className="card" style={{ height: 380 }} bodyFill header={title}>
    <Chart
      series={data}
      type={type}
      height={340}
      options={Object.assign({}, defaultOptions, options, { labels })}
    ></Chart>
  </Panel>
);

export default PieChart;
