import type { FC } from 'react';
import styles from './Footer.module.css';

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className={styles.Footer} data-testid="Footer">
    @copyright Alexandra Rampazzi CA NEOPS
  </div>
);

export default Footer;
