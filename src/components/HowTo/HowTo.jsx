import React from 'react'
import styles from './HowTo.module.scss';
import { HowToSlider } from './HowToSlider';

export const HowTo = () => {
  return (
    <section className={styles.howTo}>
      <div className="container">
        <div className={styles.howToContent}>
          <h2 className={styles.title}>How we can help you</h2>
          <p className={styles.description}>We offer a variety of services for those who want to study and start a career in Europe.</p>
        </div>
        <div className={styles.sliderWrapper}>
          <HowToSlider />
        </div>
      </div>
    </section>
  )
}