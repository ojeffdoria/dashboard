import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['NÃO', 'SIM'],
  datasets: [
    {
      label: '# of Votes',
      data: [30, 190],
      backgroundColor: [
        'rgb(27, 76, 254)',
        'rgb(44, 142, 248)',
      ],
      borderWidth: 0,
    },
  ],
};

const ChartPmc = () => (
  <>
    <Doughnut data={data} />
  </>
);

export default ChartPmc;