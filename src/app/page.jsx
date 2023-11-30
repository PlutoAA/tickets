import Logo from "@/components/elements/logo/Logo";
import SignInForm from "@/components/modules/signInForm/SignInForm";
import DiscordAuth from "@/components/elements/discordAuth/DiscordAuth";
import styles from "./page.module.scss";

export default function AuthPage() {
  return (
    <main className={styles.main}>
      <section className={styles.auth}>
        <Logo />
        <SignInForm />
        <DiscordAuth />
      </section>
    </main>
  );
}
