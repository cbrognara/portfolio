"use client"
import Link from 'next/link'
import React from 'react';
import Image from 'next/image'
import Ballon from './Ballon'
import { useTranslations } from 'next-intl'
import styles from './Recommendations.module.css'
import { useLocale } from 'next-intl';

const Recommendations: React.FC = () => {
  const t = useTranslations('Common')
  const locale = useLocale();

  return (
    <section id="recommendations" className={styles.Container}>
      <hgroup className={styles.Heading}>
        <h3 className={styles.Title}>{t('recommendations')}</h3>
        <span className={styles.Subtitle}>
          from
          <Image
            src="/icons/linkedin.svg"
            width={18}
            height={18}
            alt={t('linkedinIconAlt')}
          />
        </span>
      </hgroup>
      <div>
        <article className={styles.Recommendation}>
          <Image
            src="/images/linkedin-sales.jpg"
            height={108}
            width={108}
            alt={t('linkedinSaleHelpaProfilePhotoAlt')}
          />
          <div>
            <p>Pessoa random</p>
            <p>{t('linkedinSaleHelpaRole')}</p>
            <Ballon>
              <>
                {t.rich('linkedinSaleHelpaRecommendation', { p: (chunks) => (<span>{chunks}<br /><br /></span>) })}
              </>
            </Ballon>
          </div>
        </article>

        <article className={styles.Recommendation}>
          <Image
            src="/images/alexandre.jpg"
            height={108}
            width={108}
            alt={t('alexandreHelpaProfilePhotoAlt')}
          />
          <div>
            <p>Alexandre Schrammel</p>
            <p>{t('alexandreHelpaRole')}</p>
            <Ballon>
              <>
                {t.rich('alexandreHelpaRecommendation', { p: (chunks) => (<span>{chunks}<br /><br /></span>) })}
              </>
            </Ballon>
          </div>
        </article>

      </div>

      <Link target='_blank' className={styles.SeeMoreOnLinkedin} href={`https://www.linkedin.com/in/camilabrognara/${locale === 'en' ? '?locale=en_US' : '?locale=pt_BR'}`} locale={locale}>
        <p>
          {t('seeMoreOnLinkedin')}
        </p>
        <Image
          src="/icons/arrow-right.svg"
          height={18}
          width={18}
          alt={t('arrowRightAlt')}
        />
      </Link>
    </section>
  );
}

export default Recommendations;