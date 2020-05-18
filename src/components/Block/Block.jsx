import React from 'react';
import styles from './Block.module.css';

const Block = ({hideBackground = false, children}) => {
  const styleCover = hideBackground ? {background: 'none'} : {};

    return (
        <div className={styles.wrap} style={styleCover}>{children}</div>
    )
};

export default Block;