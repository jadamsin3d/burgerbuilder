import React from "react";
import styles from "./MenuIcon.module.css";
import Auxiliary from "../../../hoc/Auxiliary";

const menuIcon = () => {
  return (
    <Auxiliary>
      <div className={styles.Menu} />
      <div className={styles.Menu} />
      <div className={styles.Menu} />
    </Auxiliary>
  );
};

export default menuIcon;
