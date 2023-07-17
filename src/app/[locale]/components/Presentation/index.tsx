"use client"

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Socials from '../Socials'

import styles from './Presentation.module.css';
import { useLocale } from 'next-intl';
import { MobileDetect } from '@/hooks/MobileDetect';
import OpenToWorkButton from '../OpenToWorkButton';

export default function Presentation() {
  const t = useTranslations('Common');
  const locale = useLocale();
  const { isMobile } = MobileDetect();

  return (
    <div className={styles.Presentation}>
      <div className={styles.SocialsAndProfilePhotoGroup}>
        <div className={styles.Socials}>
          <Socials />
        </div>
        
        <div className={styles.ProfilePhoto}>
          <div className={styles.NameAndRoleGroup}>
            <h2 className={styles.Name}>{t('name')}</h2>
            <h1 className={styles.Role}>
              {locale === 'en' ? <><span>{t('role')}</span>{t('developer')}</> : <>{t('developer')}<span>{t('role')}</span></>}
            </h1>


            <OpenToWorkButton />
          </div>

          <Image
            src="/images/profile-photo.jpeg"
            height={isMobile ? 275.68 : 402.35 }
            width={isMobile ? 239 : 350 }
            quality={100}
            alt={t('profilePhotoAlt')}
            className={styles.ProfilePhotoImage}
          />
        </div>
      </div>
    </div>
  );
}
