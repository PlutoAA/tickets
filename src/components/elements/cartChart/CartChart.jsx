import { useRef, useState } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  DoughnutController,
  ArcElement,
  Legend,
  Tooltip,
} from 'chart.js';
import {
  Chart,
  getElementAtEvent,
} from 'react-chartjs-2';
import styles from './cartChart.module.scss'

const CartChart = ({ getData }) => {
  const [pickedStat, setPickedStat] = useState({})
  const chartRef = useRef(null)

  ChartJS.register(
    LinearScale,
    CategoryScale,
    ArcElement,
    DoughnutController,
    Legend,
    Tooltip
  );

const selectElementAtEvent = (element) => {
  if (!element.length) return;

  const { datasetIndex, index } = element[0];

  setPickedStat({
    index: index, 
    label: data.labels[index], 
    data: data.datasets[datasetIndex].data[index],
    color: data.datasets[datasetIndex].backgroundColor[index],
  });
  };

  const onMouseMove = (event) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    selectElementAtEvent(getElementAtEvent(chart, event));
  };

  const data = {
    labels: [
      'Errored',
      'Dropped',
      'Checked out',
      'Tickets'
    ],
    datasets: [{
      data: getData,
      backgroundColor: [
        'rgb(239, 174, 154)',
        'rgba(179, 157, 219, 1)',
        'rgba(165, 214, 167, 1)',
        'rgba(255, 224, 130, 1)'
      ],
    }]
  };

  const options = {
      layout: {
        padding: 16
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false
        }
      },
      datasets: {
        doughnut: {
          hoverOffset: 24,
          borderWidth: 0,
        }
      }
  }

  return (
    <section className={styles.cartChart}>
      <h3 className={styles.cartChart__title}>Carts</h3>
      <div className={styles.cartChart__picked}>
        <svg width="50" height="16" viewBox="0 0 50 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="50" height="16" rx="3" fill={pickedStat.color || '#5E5E5E'}/>
        </svg>
        <span className={styles.cartChart__picked__text}>{pickedStat.label || '...'}</span>
      </div>
      <div className={styles.cartChart__container}>
        <Chart
          style={{zIndex: 2, position: 'relative', minWidth: '220px', minHeight: '220px' }}
          ref={chartRef}
          data={data}
          type='doughnut'
          options={options}
          onMouseMove={onMouseMove}
        />
        <span className={styles.cartChart__container__number}>{pickedStat.data || '0'}%</span>
      </div>
    </section>
  );
};

export default CartChart
