import React from 'react'

import styles from './Card.module.scss';
import { ButtonPrimary } from '../ButtonPrimary';

export const Card = ({ cardTitle, cardText }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
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
