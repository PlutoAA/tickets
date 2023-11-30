import styles from './input.module.scss'

const LoginInput = ({ register, errors }) => (
  <label className={styles.form__label}>
    <input
      {...register('email', {
        required: 'Required',
      })}
      type="text"
      placeholder="Login"
      className={styles.form__input}
    />
    {errors.login && (
      <span className={styles.error__alert}>{errors.login?.message}</span>
    )}
  </label>
)

export default LoginInput
