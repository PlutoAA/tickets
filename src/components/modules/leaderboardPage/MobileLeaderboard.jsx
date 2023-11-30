import styles from './mobileLeaderboard.module.scss'

const MobileLeaderboard = ({ chartData, index }) => {

  return (
    <div className={styles.mobileLeaderboard}>
      <div className={styles.mobileLeaderboard__left}>
        <div className={styles.mobileLeaderboard__block}>
          <div className="">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="-1" y="4.65625" width="8" height="8" rx="3" transform="rotate(-45 -1 4.65625)" fill="#A5D6A7"/>
            </svg>
            <span className={styles.mobileLeaderboard__block__title}>Purchased</span>
          </div>
          <div className={styles.mobileLeaderboard__block__content}>
            <span className={styles.mobileLeaderboard__block__text}>{chartData.purchased[index]}</span>
          </div>
        </div>
        <div className={styles.mobileLeaderboard__block}>
          <div className="">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="-1" y="4.65625" width="8" height="8" rx="3" transform="rotate(-45 -1 4.65625)" fill="#EF9A9A"/>
            </svg>
            <span className={styles.mobileLeaderboard__block__title}>Wrong</span>
          </div>
          <div className={styles.mobileLeaderboard__block__content}>
            <span className={styles.mobileLeaderboard__block__text}>{chartData.wrong[index]}</span>
          </div>
        </div>
      </div>
      <div className={styles.mobileLeaderboard__right}>
        <div className={styles.mobileLeaderboard__block}>
          <div className="">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="-1" y="4.65625" width="8" height="8" rx="3" transform="rotate(-45 -1 4.65625)" fill="#B39DDB"/>
            </svg>
            <span className={styles.mobileLeaderboard__block__title}>Total</span>
          </div>
          <div className={styles.mobileLeaderboard__block__content}>
            <span className={styles.mobileLeaderboard__block__text}>{chartData.total[index]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLeaderboard
