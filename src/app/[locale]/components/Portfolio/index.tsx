"use client"

import { useEffect, useMemo, useState, useRef } from 'react';
import { useTranslations } from 'next-intl'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectsSlider from './ProjectsSlider'
import { useLocale } from 'next-intl';

import styles from './Portfolio.module.css'
import { Company } from '@/interfaces/Company';
import companies from '../../../../constants/companies'
import { MobileDetect } from '@/hooks/MobileDetect';
import { useScroll } from '@/hooks/useScroll';

export default function Portfolio() {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('personal')
  const [selectedCompany, setSelectedCompany] = useState<Company>(companies[companies.length-1])
  const [carouselWidth, setCarouselWidth] = useState(0);
  const { isMobile } = MobileDetect();
  const { isAtTop } = useScroll()
  const t = useTranslations('Common')
  const locale = useLocale();

  const carousel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carousel.current?.scrollWidth && isMobile && carousel.current.scrollWidth > carouselWidth) {
      setCarouselWidth(carousel.current.scrollWidth)
    }
  }, [carousel.current?.scrollWidth, isMobile, carouselWidth])

  useEffect(() => {
    const company = companies.find(({ id }) => id === selectedCompanyId)

    if (company) setSelectedCompany(company)
  }, [selectedCompany, selectedCompanyId])

  return (
    <section id="portfolio" className={styles.Container}>
      <Link href={`${locale}/#portfolio`} className={styles.PortfolioLink}>
        <h3>{t('portfolio')}</h3>

        <motion.div
          initial={{ opacity: isAtTop ? 0 : 1 }}
          animate={{ opacity: isAtTop ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={styles.ScrollDowns}
            initial={{ display: isAtTop ? 'none' : 'block' }}
            animate={{ display: isAtTop ? 'block' : 'none' }}
            transition={{ delay: 1 }}
          >
            <div className={styles.Mousey}>
              <div className={styles.Scroller}></div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: isAtTop ? 1 : 0 }}
          animate={{ opacity: isAtTop ? 0 : 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={styles.ScrollDowns}
            initial={{ display: isAtTop ? 'block' : 'none' }}
            animate={{ display: isAtTop ? 'none' : 'block' }}
            transition={{ delay: 1 }}
          >
            <Image
              src="/icons/arrow-down.svg"
              height={24}
              width={24}
              alt={t('portfolioArrowDownAlt')}
            />
          </motion.div>
        </motion.div>
      </Link>

      <h3 className={styles.ExploreProjects}>{t('exploreProjects')}</h3>
      
      <motion.nav 
        className={styles.Companies}
        ref={carousel}
        {
          ...(isMobile && {
            whileTap: { cursor: 'grabbing' }
          })
        }
      >
        <motion.ul
          {
            ...(isMobile && {
              drag: 'x',
              dragConstraints: { right: 0, left: 340 - carouselWidth },
              initial: { x: 0 },
              animate: { x: -90 },
              transition: { duration: 1 },
            })
          }
        >
          {
            companies.map(company => (
              <li
                key={company.id}
                className={selectedCompanyId === company.id ? styles.SelectedCompany : ''}
                onClick={() => setSelectedCompanyId(company.id)}
              >
                <span>
                  <Image
                    src={`/images/${company.id}-projects.jpg`}
                    height={64}
                    width={64}
                    alt={t('portfolioArrowDownAlt')}
                    quality={100}
                  />
                </span>
                <span>
                  {t(`${company.id}Projects`)}
                </span>
              </li>
            ))
          }
        </motion.ul>
      </motion.nav>

      <ProjectsSlider projects={selectedCompany.projects}  />
    </section>
  )
}