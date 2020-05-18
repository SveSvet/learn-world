import React from "react";
import styles from "./AppHeader.module.css";

const AppHeader = ({children}) => {
  return (
      <h1 className={styles.header}>{children}</h1>
)};

export default AppHeader;