import styles from './bar.module.scss'

const Bar = () => {

  return (
    <div className="">
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default Bar
