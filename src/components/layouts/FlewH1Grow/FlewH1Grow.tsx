import React, { type FC } from 'react';
import styles from './FlewH1Grow.module.css';

interface IFlewH1GrowProps {
  children: React.ReactElement | React.ReactNode[]
}

const FlewH1Grow: FC<IFlewH1GrowProps> = ({ children }) => {
  return (
    <div className={styles.FlewH1Grow} data-testid="FlewH1Grow">
      {children}
    </div>
  );
}

export default FlewH1Grow;
