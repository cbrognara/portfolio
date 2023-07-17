"use client"

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Link from 'next/link';

import styles from './ProjectDescription.module.css'
import { Project } from '@/interfaces/Project'
import { useLocale } from 'next-intl';

type Props = { project: Project }

const ProjectDescription: React.FC<Props> = ({ project }) => {
  const { id, tags } = project
  const t = useTranslations('Common')
  const locale = useLocale();

  return (
    <>
      <div className={styles.GoBack}>
        <Link href="/" locale={locale}>
          <Image
            src="/icons/back.svg"
            height={16}
            width={16}
            alt={t('goBackIconAlt')}
          />
          <p>{t('goBack')}</p>
        </Link>
      </div>

      <div className={styles.Cover}>
        <Image
          fill
          src={`/images/${id}-project-cover.png`}
          sizes='100vw'
          alt={t(`projects.${id}.coverAlt`)}
        />
      </div>
      <div className={styles.CardTextsContainer}>
        <h3 className={styles.ProjectCardTitle}>{t(`projects.${id}.title`)}</h3>
        <div className={styles.TagsContainer}>
          {tags.map(tag => (<span key={tag} className={styles.ProjectCardTag}>{tag}</span>))}
        </div>
        
        <p className={styles.Text}>{t(`projects.${id}.detailedDescription`)}</p>

        <p className={styles.Subtitle}>{t('whatIDidInThisProject')}</p>

        <p className={styles.Text}>{t(`projects.${id}.whatIDidInThisProjectDescription`)}</p>
        
        {
          (!!project?.design ||
          !!project?.apiSourceCode ||
          !!project?.appSourceCode ||
          !!project?.siteSourceCode ||
          !!project?.demo) && (
            <p className={styles.Subtitle}>{t('artifacts')}</p>
          )
        }
        

        {
          !!project?.design && (
            <Link target='_blank' href={project.design} locale={locale}>
              <p className={styles.Link}>{t('design')}</p>
            </Link>
          )
        }

        {
          !!project?.apiSourceCode && (
            <Link target='_blank' href={project.apiSourceCode} locale={locale}>
              <p className={styles.Link}>{t('apiSourceCode')}</p>
            </Link>
          )
        }

        {
          !!project?.appSourceCode && (
            <Link target='_blank' href={project.appSourceCode} locale={locale}>
              <p className={styles.Link}>{t('appSourceCode')}</p>
            </Link>
          )
        }
        
        {
          !!project?.siteSourceCode && (
            <Link target='_blank' href={project.siteSourceCode} locale={locale}>
              <p className={styles.Link}>{t('siteSourceCode')}</p>
            </Link>
          )
        }

        {
          !!project?.demo && (
            <Link target='_blank' href={project.demo} locale={locale}>
              <p className={styles.Link}>{t('demo')}</p>
            </Link>
          )
        }
      </div>
    </>
  );
}

export default ProjectDescription;