import React, { type FC } from 'react';
import styles from './Flex.module.css';

interface IFlexProps {
  children: React.ReactElement | React.ReactNode[]
}

const Flex: FC<IFlexProps> = ({ children }) => {
  return (
    <div className={styles.Flex} data-testid="Flex">
      {children}
    </div>
  );
}

export default Flex;
