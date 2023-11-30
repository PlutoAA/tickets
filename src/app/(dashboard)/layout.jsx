import { Inter } from "next/font/google";
import SideMenu from "@/components/modules/sideMenu/SideMenu";
import "../globals.scss";
import styles from "./layout.module.scss";
import BurgerMenu from "@/components/modules/burgerMenu/BurgerMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "",
};

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.layout}>
      <BurgerMenu />
      <SideMenu />
      {children}
    </div>
  );
}
