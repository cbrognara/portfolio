import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { useTranslations } from 'next-intl'
import { motion, useInView } from 'framer-motion';
import styles from './ProjectCard.module.css'
import { MobileDetect } from '@/hooks/MobileDetect';
import { useLocale } from 'next-intl';

type Props = {
  id: string,
  tags: string[],
  whenEnteringTheView(): void,
}

const ProjectCard: React.FC<Props> = ({
  id,
  tags,
  whenEnteringTheView,
}) => {
  const { isMobile } = MobileDetect();
  const t = useTranslations('Common')
  const locale = useLocale();

  const cardRef = useRef<any>(null)
  const isInView = useInView(cardRef, {
    amount: 0.70
  })

  if (isInView) whenEnteringTheView()

  return (
    <motion.article
      className={styles.Project}
      {
        ...(isMobile && {
          initial: { scale: 1 },
          animate: { scale: isInView ? 1 : 0.95 },
          transition: { duration: 0.4 }
        })
      }
      ref={cardRef}
      
    >
      <Link href={`/${locale}/${id}`} locale={locale}>

        <Image
          src={`/images/${id}-project-cover.png`}
          height={isMobile ? 176 : 153.5}
          width={isMobile ? 342 : 298}
          alt={t(`projects.${id}.coverAlt`)}
        />
        <h3 className={styles.ProjectCardTitle}>{t(`projects.${id}.title`)}</h3>
        <div>
          {tags.map(tag => (<span key={tag} className={styles.ProjectCardTag}>{tag}</span>))}
        </div>
        <span className={styles.ProjectCardDetailsLink} >
          <p>
            {t('seeDetails')}
          </p>
          <Image
            src="/icons/arrow-right.svg"
            height={15}
            width={15}
            alt={t('arrowRightAlt')}
          />
        </span>
      </Link>
    </motion.article>
  );
}

export default ProjectCard;