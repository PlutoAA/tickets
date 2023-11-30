import styles from "../navigation.module.scss";

const CommandStatsIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" className={styles.nav__item__icon}>
    <path d="M8.87322 19.7879C6.35356 19.2167 4.10291 17.806 2.49058 15.7872C0.878252 13.7684 2.10893e-05 11.2616 0 8.67797V5.9661C0 3.87037 1.70088 2.16949 3.79661 2.16949H8.92529C9.43729 0.898169 10.6826 0 12.1361 0H35.5927C37.0462 0 38.2915 0.898169 38.8035 2.16949H44.2034C46.2991 2.16949 48 3.87037 48 5.9661V8.67797C47.9998 11.3107 47.0879 13.8622 45.4192 15.8986C43.7506 17.9351 41.4283 19.3308 38.8469 19.8487C38.3953 22.5541 37.2205 25.0869 35.4469 27.1791C33.6732 29.2713 31.3668 30.8448 28.7718 31.7332L29.2729 38.2481C29.2965 38.2717 29.3211 38.2941 29.3467 38.3154C29.5181 38.4564 30.0041 38.7558 31.1604 38.9272C32.9784 39.1962 34.7119 40.6845 34.7119 42.8475V44.4746H39.5932C40.0248 44.4746 40.4386 44.646 40.7438 44.9511C41.0489 45.2563 41.2203 45.6702 41.2203 46.1017C41.2203 46.5332 41.0489 46.9471 40.7438 47.2522C40.4386 47.5574 40.0248 47.7288 39.5932 47.7288H8.13559C7.70405 47.7288 7.29019 47.5574 6.98505 47.2522C6.6799 46.9471 6.50847 46.5332 6.50847 46.1017C6.50847 45.6702 6.6799 45.2563 6.98505 44.9511C7.29019 44.646 7.70405 44.4746 8.13559 44.4746H13.0169V42.8475C13.0169 40.6866 14.7525 39.1962 16.5684 38.9272C17.7247 38.7536 18.2107 38.4564 18.3821 38.3154C18.4077 38.2941 18.4323 38.2717 18.4559 38.2481L18.957 31.7332C16.3524 30.8407 14.0388 29.258 12.2629 27.154C10.487 25.0499 9.31551 22.5033 8.87322 19.7858V19.7879ZM11.9322 3.45817V17.3559C11.9322 20.5205 13.1893 23.5556 15.4271 25.7933C17.6648 28.031 20.6998 29.2881 23.8644 29.2881C27.029 29.2881 30.064 28.031 32.3018 25.7933C34.5395 23.5556 35.7966 20.5205 35.7966 17.3559V3.45817C35.7966 3.40408 35.7751 3.35221 35.7369 3.31397C35.6986 3.27572 35.6468 3.25424 35.5927 3.25424H12.1361C12.082 3.25424 12.0302 3.27572 11.9919 3.31397C11.9537 3.35221 11.9322 3.40408 11.9322 3.45817ZM22.1657 32.4491L21.6993 38.5085L21.6971 38.554L21.6906 38.6473C21.6812 38.7545 21.6653 38.861 21.6428 38.9662C21.5344 39.4804 21.222 40.1963 20.4431 40.832C19.6881 41.4525 18.5925 41.9167 17.0457 42.1445C16.8206 42.1751 16.6117 42.2788 16.4513 42.4396C16.3955 42.4921 16.3508 42.5552 16.3199 42.6253C16.289 42.6953 16.2724 42.7709 16.2712 42.8475V44.4746H31.4576V42.8475C31.4564 42.7709 31.4398 42.6953 31.4089 42.6253C31.378 42.5552 31.3333 42.4921 31.2776 42.4396C31.1171 42.2788 30.9082 42.1751 30.6831 42.1445C29.1363 41.9167 28.0407 41.4503 27.2835 40.8342C26.5068 40.1963 26.1944 39.4804 26.086 38.9684C26.0571 38.8326 26.039 38.6948 26.0317 38.5562L26.0296 38.5085L25.5631 32.4491C24.4341 32.5749 23.2947 32.5749 22.1657 32.4491ZM39.0508 16.4404C40.7024 15.9207 42.1452 14.8877 43.1693 13.4917C44.1935 12.0957 44.7458 10.4094 44.7458 8.67797V5.9661C44.7458 5.82226 44.6886 5.6843 44.5869 5.58259C44.4852 5.48087 44.3472 5.42373 44.2034 5.42373H39.0508V16.4404ZM8.67797 5.42373H3.79661C3.65276 5.42373 3.51481 5.48087 3.41309 5.58259C3.31138 5.6843 3.25424 5.82226 3.25424 5.9661V8.67797C3.25421 10.3608 3.77573 12.0022 4.74702 13.3764C5.71831 14.7506 7.09163 15.7899 8.67797 16.3515V5.42373Z" fill={ color }/>
  </svg>
)

export default CommandStatsIcon
