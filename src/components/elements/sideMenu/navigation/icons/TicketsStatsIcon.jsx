import styles from "../navigation.module.scss";

const TicketsStatsIcon = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-6 -6 48 48" fill="none" className={styles.nav__item__icon}>
    <path d="M12.6667 10H2M2 2H10M34 34L22 26L15.3333 31.3333L2 20.6667M27.3333 15.3333C25.5652 15.3333 23.8695 14.631 22.6193 13.3807C21.369 12.1305 20.6667 10.4348 20.6667 8.66667C20.6667 6.89856 21.369 5.20286 22.6193 3.95262C23.8695 2.70238 25.5652 2 27.3333 2C29.1014 2 30.7971 2.70238 32.0474 3.95262C33.2976 5.20286 34 6.89856 34 8.66667C34 10.4348 33.2976 12.1305 32.0474 13.3807C30.7971 14.631 29.1014 15.3333 27.3333 15.3333Z" stroke={ color } strokeOpacity="1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default TicketsStatsIcon
