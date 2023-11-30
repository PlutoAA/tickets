"use client"
import CartChart from '@/components/elements/cartChart/CartChart';
import UsersCartChart from '@/components/elements/usersCartChart/UsersCartChart';
import styles from './chartBlock.module.scss'

const ChartsBlock = () => {
  //Errored, Dropped, Checked out, Tickets
  const getData = [25,25,25,25]

  const apiData = [
    {
      userName: 'Slave',
      first: 123,
      second: 222,
      third: 87,
      fourth: 78
    },
    {
      userName: 'Jay',
      first: 103,
      second: 122,
      third: 86,
      fourth: 11
    },
  ]

  const UserData = {
      labels: apiData.map((user) => user.userName),
      datasets: [{
        data:  apiData.map((user) => user.first),
      },
      {
        data:  apiData.map((user) => user.second),
      },
      {
        data:  apiData.map((user) => user.third),
      },
      {
        data:  apiData.map((user) => user.fourth),
      }],
    };

  return (
    <div className={styles.chartsBlock}>
      <CartChart getData={getData} />
      <UsersCartChart chartData={UserData} />
    </div>
  );
};

export default ChartsBlock
