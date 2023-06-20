import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { AreaChartLogo } from './Logo';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 1',
        data: [1,2,3,1,4,5,1,32,7,1,5,46],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };


const LineChart = () => {
  return (
    <div className='w-full h-full object-contain  border border-gray-500 rounded-lg'>
    <h1 className='bg-gray-200 flex justify-start items-center p-2 rounded-t-lg '>
    <AreaChartLogo/>
    Area Chart Example</h1>
    <div className='p-2 border-t border-gray-500'>
    <Line options={options} data={data} />
    </div>
    </div>
  )
}

export default LineChart