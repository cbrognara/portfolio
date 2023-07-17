import React from 'react';

import styles from './Header.module.css';
import LocaleSwitcher from '../LocaleSwitcher';
import DownloadCVButton from '../DownloadCVButton';

export default function Header() {
  return (
    <nav className={styles.Header}>
      <DownloadCVButton />
      
      <LocaleSwitcher />
    </nav>
  );
}
