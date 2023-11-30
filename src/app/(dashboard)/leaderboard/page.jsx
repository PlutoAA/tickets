'use client'
import { useState } from 'react'
import LineChart from "@/components/elements/lineChart/LineChart";
import styles from "./page.module.scss";
import MobileLeaderboard from '@/components/modules/leaderboardPage/MobileLeaderboard';

export default function LeaderBoard() {
  const [selectedUser, setSelectedUser] = useState()
  const [selectedMonth, setSelectedMonth] = useState()

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const apiData = [
    {
      userName: 'Slave',
      total: [123,1,2,3,4,55,6,47,8,12,123,1],
      purchased: [123,1,2,43,4,5,6,7,8,12,123,1],
      wrong: [123,1,2,3,3,5,6,7,8,12,123,1],
    },
    {
      userName: 'Jay',
      total: [13,1,21,3,4,5,6,7,8,12,123,1],
      purchased: [23,1,2,31,4,5,6,7,8,12,123,1],
      wrong: [3,1,2,3,4,5,61,7,8,12,123,1],
    },
  ]

  const handleOnChange = (event) => {
    const userData = apiData.find(x => x.userName === event.target.value)
    setSelectedUser(userData)
  }

  const handleOnChangeMonth = (event) => {
    setSelectedMonth(labels.indexOf(event.target.value))
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.userSelect}>
            <span className={styles.userSelect__title}>User select:</span>
            <select onChange={handleOnChange} defaultValue={'Select'} className={styles.userSelect__input}>
              {apiData.map((user, index) => {
                return (
                  <option key={index}>{ user.userName }</option>
                )
              })}
            </select>
            <select onChange={handleOnChangeMonth} defaultValue={'Select'} className={styles.userSelect__monthInput}>
              {labels.map((month, index) => {
                return (
                  <option key={index}>{ month }</option>
                )
              })}
            </select>
          </div>
          <LineChart chartData={selectedUser || apiData[0]} labels={labels} />
          <MobileLeaderboard chartData={selectedUser || apiData[0]} index={selectedMonth || 0} />
        </div>
      </div>
    </main>
  );
}
