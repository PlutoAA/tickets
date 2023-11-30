'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { showAuthError } from '@/utils/errors';
import Link from 'next/link'
import LoginInput from "@/components/elements/inputs/LoginInput";
import PasswordInput from '@/components/elements/inputs/PasswordInput';
import Checkbox from '@/components/elements/checkBox/Checkbox';
import styles from './signInForm.module.scss'
import spinnerStyles from '@/components/elements/spinner/spinner.module.scss';
import { singInFx } from '@/api/auth';

const SignInForm = () => {
  const [spinner, setSpinner] = useState(false)
  const [checked, setChecked] = useState(false);
  const route = useRouter()

  const handleChange = () => {
    setChecked(!checked);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm()

  const onSubmit = async (data) => {
    try {
      setSpinner(true)
      console.log(data)
      await singInFx({
        url: '/users/login',
        password: data.password,
        email: data.email,
      })
      resetField('login')
      resetField('password')
      route.push('/links')
    } catch (error) {
      showAuthError(error)
    } finally {
      setSpinner(false)
    }
  }

  return (
  <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
    <LoginInput register={register} errors={errors} />
    <PasswordInput register={register} errors={errors} />
    <div className={styles.form__utility}>
      <Checkbox 
        label="Remember me"
        value={checked}
        onChange={handleChange}
      />
      <Link href="/" passHref legacyBehavior>
        <a className={styles.form__forgotPass}>Forgot password ?</a>
      </Link>
    </div>
    <button className={styles.form__btn}>
      {spinner ? (
        <span className={spinnerStyles.loader} />
      ) : (
        'Sign in'
      )}
    </button>
  </form>
)}

export default SignInForm
