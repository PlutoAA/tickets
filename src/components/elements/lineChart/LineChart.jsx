import { useRef, useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  PointElement,
  LineController,
  LineElement,
  Title,
  Legend,
  Tooltip,
} from 'chart.js';
import {
  Chart,
} from 'react-chartjs-2';
import styles from './lineChart.module.scss'

const LineChart = ({ chartData, labels }) => {
  const chartRef = useRef(null)

  const data = {
    labels,
    datasets: [
      {
        label: 'Total',
        data: chartData.total,
        borderColor: '#B39DDB',
        backgroundColor: '#B39DDB',
      },
      {
        label: 'Purchased',
        data: chartData.purchased,
        borderColor: '#A5D6A7',
        backgroundColor: '#A5D6A7',
      },
      {
        label: 'Wrong',
        data: chartData.wrong,
        borderColor: '#EF9A9A',
        backgroundColor: '#EF9A9A',
      },
    ],
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    LineController,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <section className={styles.lineChart}>
      <h3 className={styles.lineChart__title}>{ chartData.userName } statistic</h3>
      <div className={styles.lineChart__labels}>
        <div className="">
          <svg width="50" height="16" viewBox="0 0 50 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="16" rx="3" fill={data.datasets[0].backgroundColor}/>
          </svg>
          <span className={styles.lineChart__labels__text}>{data.datasets[0].label}</span>
        </div>
        <div className="">
          <svg width="50" height="16" viewBox="0 0 50 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="16" rx="3" fill={data.datasets[1].backgroundColor}/>
          </svg>
          <span className={styles.lineChart__labels__text}>{data.datasets[1].label}</span>
        </div>
        <div className="">
          <svg width="50" height="16" viewBox="0 0 50 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="16" rx="3" fill={data.datasets[2].backgroundColor}/>
          </svg>
          <span className={styles.lineChart__labels__text}>{data.datasets[2].label}</span>
        </div>
      </div>
      <div className={styles.lineChart__container}>
        <Chart
          style={{zIndex: 2, position: 'relative', maxHeight: '450px' }}
          ref={chartRef}
          data={data}
          type='line'
          options={options}
        />
      </div>
    </section>
  );
};

export default LineChart
