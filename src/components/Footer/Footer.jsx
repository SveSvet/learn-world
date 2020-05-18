import React from 'react';
import styles from './Footer.module.css';
import {ReactComponent as LogoReact} from "../App/accets/img/logo.svg";

const Footer = ({children}) => {
  return (
      <div className={styles.wrap}>
        {children}
        <LogoReact className={styles.logo}/>
      </div>
  )
};

export default Footer;