import { useEffect, useState } from "react";
import { useStore } from 'effector-react';
import { $user } from "@/context/user";
import Avatar from "../../avatar/Avatar";
import styles from "./header.module.scss";

const Header = ({collapse}) => {
  const [randomColor, setRandomColor] = useState();
  const user = useStore($user)

  useEffect(() => {
    setRandomColor('#' + Math.floor(Math.random()*16777215).toString(16))
  }, [])

  return (
  <div className={styles.header} data-collapse={collapse}>
    <Avatar randomColor={randomColor} collapse={collapse}/>
    <span className={styles.header__name}>{user.name || "name"}</span>
    <span className={styles.header__rank}>{user.rank || "rank"}</span>
  </div>
)}

export default Header
