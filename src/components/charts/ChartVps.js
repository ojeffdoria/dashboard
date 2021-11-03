import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3'],
  datasets: [
    {
      label: 'Backlog',
      data: [1154, 1184, 1215],
      backgroundColor: 'rgb(44, 142, 248)',
      stack: 'Stack 0',
    },
    {
      label: 'Closed',
      data: [1005, 1040, 1039],
      backgroundColor: 'rgb(27, 76, 254)',
      stack: 'Stack 1',
    },
    {
      label: 'New',
      data: [49, 31, 12],
      backgroundColor: 'rgb(253, 126, 20)',
      stack: 'Stack 2',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const ChartVps = () => (
  <>
    <Bar
      data={data} 
      options={options} />
  </>
);

export default ChartVps;
