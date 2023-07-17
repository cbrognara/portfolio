"use client"

import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

import styles from './DownloadCVButton.module.css'
import { useTranslations, useLocale } from 'next-intl';

const DownloadCVButton: React.FC = () => {
  const t = useTranslations('Common')
  const locale = useLocale();

  return (
    <Link
      target="_blank"
      href={`/documents/curriculo-gabrieldissotti-fullstack${locale === 'en' ? '-english' : ''}.pdf`}
      download="curriculo-gabrieldissotti-fullstack"
      className={styles.Button}
    >
      <Image
        src={`/icons/download.svg`}
        height={14.82}
        width={18}
        alt={t('downloadCVIconAlt')}
      />
      <span>
        {t('downloadCV')}
      </span>
    </Link>
  );
}

export default DownloadCVButton;