"use client"

import React from 'react';
import Image from 'next/image'
import styles from './Stack.module.css'
import { useTranslations } from 'next-intl';

const Stack: React.FC = () => {
  const t = useTranslations('Common')

  return (
    <section id="stack" className={styles.Container}>
      <h3 className={styles.Title}>{t('mainStack')}</h3>
      <div className={styles.Technologies}>
        <div>
          <Image
            src="/icons/react.svg"
            height={39}
            width={39}
            alt={t('reactIconAlt')}
          />
          <p>ReactJS</p>
        </div>
        <div className={styles.NextJS}>
          <Image
            src="/icons/next.svg"
            height={12}
            width={39}
            alt={t('nextIconAlt')}
          />
          <p>Next.js</p>
        </div>
        <div>
          <Image
            src="/icons/node.svg"
            height={39}
            width={39}
            alt={t('nodeIconAlt')}
          />
          <p>Node.js</p>
        </div>
      </div>
      <div className={styles.Technologies}>
        <div>
          <Image
            src="/icons/typescript.svg"
            height={39}
            width={39}
            alt={t('typescriptIconAlt')}
          />
          <p>Typescript</p>
        </div>
        <div>
          <Image
            src="/icons/javascript.svg"
            height={39}
            width={39}
            alt={t('javascriptIconAlt')}
          />
          <p>Javascript</p>
        </div>
      </div>
    </section>
  );
}

export default Stack;