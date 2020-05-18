import React from "react";
import styles from "./Paragraph.module.css";

const Paragraph = ({children, styleColor}) => {

  const styleCover = styleColor ? {color: '#E6E6E6'} : {color: '#60131C'};
  return (
      <p className={styles.paragraph} style={styleCover}>{children}</p>
  )};

export default Paragraph;