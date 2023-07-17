"use client"

import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

import ProjectCard from './ProjectCard'

import styles from './ProjectsSlider.module.css'
import { Project } from '@/interfaces/Project';
import { MobileDetect } from '@/hooks/MobileDetect';
import { useTranslations } from 'next-intl';

type Props = {
  projects: Project[]
}

export default function ProjectsSlider({ projects }: Props) {
  const [cardInView, setCardInView] = useState(0);
  const { isMobile } = MobileDetect();
  const t = useTranslations('Common')

  
  const carousel = useRef<HTMLDivElement>(null)
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    if (carousel.current?.scrollWidth && isMobile && carousel.current.scrollWidth > carouselWidth) {
      setCarouselWidth(carousel.current.scrollWidth)
    }
  }, [carousel.current?.scrollWidth, isMobile, carouselWidth])

  return (
    <div className={styles.ProjectsContainer}>
      {
        !projects.length && (
          <h3 className={styles.NoProjects}>{t('noProjectsYet')}</h3>
        )
      }
      <motion.div
        ref={carousel}
        {
          ...(isMobile && {
            className: styles.ProjectsDraggableContainer,
            whileTap: { cursor: 'grabbing' }
          })
        }
      >
        <motion.div
          className={styles.Projects}
          {
            ...(isMobile && {
              drag: "x",
              dragConstraints: { right: 0, left: 370 - carouselWidth },
              initial: { x: 160 },
              animate: { x: 0 },
              transition: { duration: 1 },
            })
          }
        >
          {
            projects?.map((project, i) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                tags={project.tags}
                whenEnteringTheView={() => setCardInView(i)}
              />
            ))
          }
        </motion.div>
      </motion.div>

      {
        isMobile && (
          <nav className={styles.Navigator}>
            <ul>
              {
                projects?.map((project, i) => (
                  <li key={project.id} className={cardInView == i ? styles.NavigatorActive : ''}></li>
                ))
              }
            </ul>
          </nav>
        )
      }
    </div>
  );
}
