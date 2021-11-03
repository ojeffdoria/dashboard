import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Dentro da SLA'],
  datasets: [
    {
      label: 'Dentro da SLA',
      data: [1],
      backgroundColor: [
        'rgb(27, 76, 254)',
      ],
      borderWidth: 0,
    },
  ],
};

const ChartSla = () => (
  <>
    <Doughnut data={data} />
  </>
);

export default ChartSla;