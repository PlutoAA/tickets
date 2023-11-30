import styles from './discordAuth.module.scss'

const DiscordAuth = () => {
  return (
    <label className={styles.discordBtn}>
      <input type="submit"/>
      <span className={styles.checkBox__text}>Log in with Discord</span>
    </label>
  );
};

export default DiscordAuth
