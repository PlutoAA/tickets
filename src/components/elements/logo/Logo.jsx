import Image from "next/image";
import styles from "./logo.module.scss";

const Logo = () => (
  <div className={styles.logo}>
    <Image src="/img/logo.svg" alt="logo" width={35} height={35} />
    <hr width="1" size="38" color="D9D9D9" />
    <span className={styles.logo__text}>TICKET <br /> BUYERS</span>
  </div>
)

export default Logo
