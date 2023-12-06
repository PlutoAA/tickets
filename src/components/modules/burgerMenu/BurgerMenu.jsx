"use client"
import { useState } from 'react';
import Navigation from '@/components/elements/sideMenu/navigation/Navigation';
import Header from '@/components/elements/sideMenu/header/Header';
import styles from './burgerMenu.module.scss'
import Bar from '@/components/elements/burgerMenu/bar/Bar';
import Avatar from '@/components/elements/avatar/Avatar';
import Logo from '@/components/elements/logo/Logo';

const BurgerMenu = () => {
  const [isCollapsed, setIsCollapse] = useState(true)

  const toggleCollapse = () => {
    setIsCollapse((prev) => !prev)
  }

  return (
    <div className="">
      <div className={styles.header} >
        <Avatar collapse={isCollapsed} />
        <Logo />
        <button onClick={toggleCollapse} className={styles.burgerBtn}>
          <Bar />
        </button>
      </div>
      <div className={styles.menu} data-collapse={isCollapsed}>
        <Navigation collapseToggler={toggleCollapse} />
      </div>
    </div>
  );
};

export default BurgerMenu
