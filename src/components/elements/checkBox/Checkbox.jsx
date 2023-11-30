import styles from './checkBox.module.scss'

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label className={styles.checkBox}>
      <input type="checkbox" checked={value} onChange={onChange} className={styles.checkBox__square} />
      <span className={styles.checkBox__text}>{label}</span>
    </label>
  );
};

export default Checkbox
