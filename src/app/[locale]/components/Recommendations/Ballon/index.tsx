"use client"

import React, { useState, ReactElement } from 'react';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html'
import ReactDOMServer from 'react-dom/server';

import styles from './Ballon.module.css'
import { useTranslations } from 'next-intl';
import { MobileDetect } from '@/hooks/MobileDetect';

type Props = {
  children: ReactElement
}

const Ballon: React.FC<Props> = ({ children }) => {
  const t = useTranslations('Common')
  const { isMobile } = MobileDetect()
  const [isOpen, setIsOpen] = useState(false)
  
  const textHtmlAsString = ReactDOMServer.renderToStaticMarkup(children);

  return (
    <div className={styles.Balloon}>
      {
        isOpen ? children : <HTMLEllipsis
          unsafeHTML={textHtmlAsString}
          maxLine={isMobile ? '2' : '1'}
          ellipsis='...'
          basedOn='words'
          component='span'
        />
      }

      <span className={styles.Link} onClick={() => setIsOpen(!isOpen)}>{isOpen ? t('readLess') : t('readMore')}</span>
    </div>
  );
}

export default Ballon;