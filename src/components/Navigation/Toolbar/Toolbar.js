import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import MenuIcon from '../../UI/MenuIcon/MenuIcon'

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <div onClick={props.opened} className={styles.PhoneOnly}>
      <MenuIcon/>
    </div>
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
    <NavigationItems />
    </nav>
  </header>
);
export default toolbar;
