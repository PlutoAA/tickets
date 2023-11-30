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
import styles from './usersCartChart.module.scss'

const UsersCartChart = ({ chartData }) => {
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
    label: chartData.labels[index], 
    data: chartData.datasets[datasetIndex].data[index],
    color: options.datasets.doughnut.backgroundColor[index],
  });
  };

  const onMouseMove = (event) => {
    const { current: chart } = chartRef;
    chart.options.animation = false;
    if (!chart) {
      return;
    }

    selectElementAtEvent(getElementAtEvent(chart, event));
  };

  const options = {
      transitions: {
        active: {
          animation: {
            duration: 0
          }
        },
        resize: {
          animation: {
            duration: 0
          }
        },
      },
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
          borderWidth: 0.6,
          borderColor: '#303030',
          backgroundColor: [
            'rgb(239, 174, 154)',
            'rgba(179, 157, 219, 1)',
            'rgba(165, 214, 167, 1)',
            'rgba(255, 224, 130, 1)'
          ],
        }
      },
      
  }

  return (
    <section className={styles.cartChart}>
      <h3 className={styles.cartChart__title}>Carts by user</h3>
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
          data={chartData}
          type='doughnut'
          options={options}
          onMouseMove={onMouseMove}
        />
        <span className={styles.cartChart__container__number}>{pickedStat.data || '0'}</span>
      </div>
    </section>
  );
};

export default UsersCartChart
