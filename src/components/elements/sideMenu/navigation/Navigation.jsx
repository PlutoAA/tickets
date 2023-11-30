import { usePathname } from 'next/navigation'
import Link from 'next/link'
import GenerateLinkIcon from "./icons/GenerateLinkIcon";
import TicketsStatsIcon from "./icons/TicketsStatsIcon";
import EventTableIcon from "./icons/EventTableIcon";
import MailboxIcon from "./icons/MailboxIcon";
import CommandStatsIcon from "./icons/CommandStatsIcon";
import styles from "./navigation.module.scss";

const Navigation = ( {collapse} ) => {
  const pathname = usePathname()

  const links = [
    {
      name: "Generate link",
      href: "/links",
      icon: GenerateLinkIcon
    },
    {
      name: "Tickets stats",
      href: "/statistic",
      icon: TicketsStatsIcon
    },
    {
      name: "Event table",
      href: "/events",
      icon: EventTableIcon
    },
    {
      name: "Mailbox",
      href: "/mail",
      icon: MailboxIcon
    },
    {
      name: "Command stats",
      href: "/leaderboard",
      icon: CommandStatsIcon
    },
  ]
  return (
  <div data-collapse={collapse}>
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        { links.map(({ name, href, icon: Icon }) => {
          const iconColor = pathname === href ? '#71A1E9' : '#757575'
          return (
          <Link key={name} href={href} passHref legacyBehavior>
            <li className={styles.nav__item}>
              <Icon color={iconColor} />
              <a className={`${styles.nav__item__text} ${pathname === href && styles.nav__item__active}`}>{name}</a>
            </li>
          </Link>
        )})
        }
      </ul>
    </nav>
  </div>
)}

export default Navigation
