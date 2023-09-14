import React from 'react'

import styles from './CardLong.module.scss';
import { ButtonPrimary } from '../ButtonPrimary';

export const CardLong = ({ cardTitle, cardText, cardIcon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.icon}>
          {cardIcon}
        </div>
        <h3 className={styles.title}>
          {cardTitle}
        </h3>
        <p className={styles.text}>
          {cardText}
        </p>
      </div>
      <div className={styles.button}>
        <ButtonPrimary buttonPrimaryText="Learn More" />
      </div>
    </div>
  )
}
