"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl';
import styles from './DoYouNeedADeveloper.module.css'

const DoYouNeedADeveloper: React.FC = () => {
  const t = useTranslations('Common')
  const locale = useLocale();

  return (
    <section id="needADeveloper" className={styles.Container}>
      <h3>{t('doYouNeedADeveloper')}</h3>

      <Link target='_blank' href={`https://www.linkedin.com/in/gabrieldissotti/${locale === 'en' ? '?locale=en_US' : '?locale=pt_BR'}`} >
        <p>{t('letsWorkTogether')}</p>
        <Image
          src="/icons/arrow-right.svg"
          height={24}
          width={24}
          alt={t('arrowRightAlt')}
        />
      </Link>
    </section>
  );
}

export default DoYouNeedADeveloper;