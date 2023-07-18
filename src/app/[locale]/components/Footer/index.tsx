"use client"

import { useTranslations } from 'next-intl';
import React from 'react';

import styles from './Footer.module.css'
import LocaleSwitcher from '../LocaleSwitcher';
import Socials from '../Socials';
import Link from 'next/link';
import DownloadCVButton from '../DownloadCVButton';

const Footer: React.FC = () => {
  const t = useTranslations('Common')

  return (
    <>
      <div className={styles.Border}></div>
      <footer className={styles.Container}>
        <div>
          <h2>Camila Brognara</h2>
          <LocaleSwitcher />
        </div>

        <h3>{t('actualOccupationTitle')}</h3>
        <p>{t('actualOccupation')}</p>

        <h3>{t('contact')}</h3>
        <address>
          <Link target='_blank' href={`https://wa.me/5511946001066?text=${t('whatsappMessage')}`}>
            <p>WhatsApp (11) 94600-1066</p>
          </Link>

          <Link target='_blank' href="mailto:csbrognara@gmail.com">
            <p>csbrognara@gmail.com</p>
          </Link>
        </address>

        <div className={styles.Socials}>
          <Socials />
          {/* <DownloadCVButton /> */}
        </div>
      </footer>
    </>
  );
}

export default Footer;