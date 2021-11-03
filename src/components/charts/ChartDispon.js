import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Partial', 'None', 'Complete'],
  datasets: [
    {
      label: '# of Votes',
      data: [435, 128, 664],
      backgroundColor: [
        'rgb(253, 126, 20)',
        'rgb(27, 76, 254)',
        'rgb(250, 92, 124)',
      ],
      borderWidth: 0,
    },
  ],
};

const ChartDispon = () => (
  <>
    <Doughnut data={data} />
  </>
);

export default ChartDispon;