"use client"

import { useState } from 'react'
 
import { useTranslations } from 'next-intl';
 
import Image from 'next/image';
import styles from './LocaleSwitcher.module.css';
import classnames from 'classnames';
import { useLocale } from 'next-intl';

import LocalePT from './Locales/PT'
import LocaleEN from './Locales/EN'

export default function LocaleSwitcher() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  const t = useTranslations('Common');
  const locale = useLocale();


  function handleDropdown() {
    setIsOpenDropdown(!isOpenDropdown)
  }

  return (
    <div className={styles.Container}>
      <div className={styles.ActiveLanguageContainer} onClick={handleDropdown}>
        {locale === 'en' ? <LocaleEN /> : <LocalePT />}
        <Image
          src="/icons/dropdown.svg"
          height={4.97}
          width={10}
          alt={t('localesDropdownAltImage')}
          className={styles.DropdownIcon}
        />
      </div>

      <ul className={classnames(styles.Dropdown, isOpenDropdown ? '' : styles.Hidden)}>
        <li>
          {locale === 'en' ? <LocalePT asLink /> : <LocaleEN asLink />}
        </li>
      </ul>
    </div>
  );
}