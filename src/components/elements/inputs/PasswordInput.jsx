import styles from './input.module.scss'

const PasswordInput = ({ register, errors }) => (
  <label className={styles.form__label}>
    <input
      {...register('password', {
        required: 'Required',
      })}
      type="password"
      placeholder="Password"
      className={styles.form__input}
    />
    {errors.password && (
      <span className={styles.error__alert}>{errors.password?.message}</span>
    )}
  </label>
)

export default PasswordInput
