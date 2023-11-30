"use client"
import styles from "./avatar.module.scss";

const Avatar = ({randomColor, collapse}) => {
  return (
  <div style={{backgroundColor: randomColor}} data-collapse={collapse} className={styles.avatar}>S</div>
)}

export default Avatar
