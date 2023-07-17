"use client"

import Image from 'next/image';
import { useTranslations } from 'next-intl'; import React from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const Socials: React.FC = () => {
  const t = useTranslations('Common');
  const locale = useLocale();


  return (
    <>
      <Link target='_blank' href="https://github.com/cbrognara">
        <Image
          src="/icons/github.svg"
          width={24}
          height={23.4}
          alt={t('githubIconAlt')}
        />
      </Link>

      <Link target='_blank' href={`https://www.linkedin.com/in/camilabrognara/${locale === 'en' ? '?locale=en_US' : '?locale=pt_BR'}`}>
        <Image
          src="/icons/linkedin.svg"
          width={24}
          height={24}
          alt={t('linkedinIconAlt')}
        />
      </Link>

      <Link target='_blank' href="https://www.instagram.com/camilabrognara/">
        <Image
          src="/icons/instagram.svg"
          width={24}
          height={23.99}
          alt={t('instagramIconAlt')}
        />
      </Link>

      <Link target='_blank' href={`https://wa.me/5511946001066?text=${t('whatsappMessage')}`}>
        <Image
          src="/icons/whatsapp.svg"
          width={24}
          height={24}
          alt={t('whatsappIconAlt')}
        />
      </Link>
    </>
  );
}

export default Socials;