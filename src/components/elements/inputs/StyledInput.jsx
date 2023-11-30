import styles from './input.module.scss'

const StyledInput = ({ label, ...props }) => (
  <label className={styles.url__label}>
    <span className={styles.url__label__text}>{ label }</span>
    <input
      {...props}
      placeholder={ label }
      className={styles.url__input}
    />
  </label>
)

export default StyledInput
