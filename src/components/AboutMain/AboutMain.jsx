import React from 'react'

import styles from './AboutMain.module.scss';
import Link from 'next/link';
import { Card } from '../Card';
import AboutMainSlider from './AboutMainSlider';

export const AboutMain = () => {
  return (
    <section className={styles.aboutMain}>
      <div className="container">
        <div className={styles.aboutMainWrapper}>
          <div className={styles.aboutMainContent}>
            <div className={styles.aboutTitle}>
              <h2 className={styles.aboutMainTitle}>About Us</h2>
              <Link className={styles.aboutMainLink} href="/">More About Us</Link>
            </div>
            <div className={styles.aboutDescription}>
              <h3 className={styles.aboutDescriptionTitle}>PoliPathWay was created to help students from different countries around the world to discover their potencial</h3>
              <p className={styles.aboutDescriptionText}>We believe that education is a fundamental right, and we are dedicated to helping students from different countries and continents access the resources and opportunities they need to succeed.</p>
              <p className={styles.aboutDescriptionText}>Our professionals guide students through the entire process, from selecting a university to study into picking the right course. Your dream of studying abroad could quickly become a reality if you turn to us for help!</p>
            </div>
          </div>
          <AboutMainSlider />
        </div>
      </div>
    </section>
  )
}
