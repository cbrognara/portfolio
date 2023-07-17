'use client';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
 
import Link from 'next/link';
import Image from 'next/image';
import styles from './PT.module.css';

export default function PT({ asLink = false}) {
  const t = useTranslations('Common');
  const pathname = usePathname()
  const path = pathname.includes('/en') ? pathname.split('/en')[1] : ''
  
  return (
    <>
      <Image
        src="/images/brazil-flag.png"
        height={19}
        width={32.57}
        alt="Brazil flag representing portuguese language"
      />
      {
        asLink ? (
          <Link href={`/pt/${path}`} locale="pt" className={styles.LinkClickableArea}>
            <p className={styles.Text}>
                {t('locales.pt')}
            </p>
          </Link>
        ) : <p className={styles.Text}>{t('locales.pt')}</p>
      }
    </>
  )
}