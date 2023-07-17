"use client"

import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import styles from './OpenToWorkButton.module.css'
import { useTranslations, useLocale } from 'next-intl';

const OpenToWorkButton: React.FC = () => {
  const t = useTranslations('Common')
  const locale = useLocale()

  return (
    <Link className={styles.Button} target='_blank' href={`https://www.linkedin.com/in/gabrieldissotti/${locale === 'en' ? '?locale=en_US' : '?locale=pt_BR'}`}>
      <Image
        src="/icons/available.svg"
        height={12.13}
        width={12.13}
        alt={t('availableIconAlt')}
      />
      <p>{t('openToWork')}</p>
    </Link>
  );
}

export default OpenToWorkButton;