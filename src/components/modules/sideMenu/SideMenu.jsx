"use client"
import { useState } from 'react';
import Navigation from '@/components/elements/sideMenu/navigation/Navigation';
import Header from '@/components/elements/sideMenu/header/Header';
import styles from './sideMenu.module.scss'

const SideMenu = () => {
  const [isCollapsed, setIsCollapse] = useState(true)

  const toggleCollapse = () => {
    setIsCollapse((prev) => !prev)
  }

  return (
    <div className="" onMouseEnter={toggleCollapse} onMouseLeave={toggleCollapse}>
      <aside className={styles.sidebar} data-collapse={isCollapsed}>
        <Header collapse={isCollapsed} />
        <Navigation collapse={isCollapsed} />
      </aside>
    </div>
  );
};

export default SideMenu
