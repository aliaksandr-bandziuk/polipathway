import React from 'react'
import styles from './HeroMain.module.scss';
import { ButtonPrimary } from '../ButtonPrimary';
import { ButtonSecondary } from '../ButtonSecondary';

export const HeroMain = () => {
  return (
    <section className={styles.heroMain}>
      <div className="container">
        <div className={styles.heroMainWrapper}>
          <h1 className={styles.title}>
            PoliPathWay – Discover Your Pathway To Success With Poland!
          </h1>
          <p className={styles.description}>
            Our services offer a full support package to help you achieve a successful relocation and guarantee admission to a university in Poland.
          </p>
          <div className={styles.heroMainBtns}>
            <ButtonPrimary
              buttonPrimaryText="contact us"
            />
            <ButtonSecondary buttonSecondaryText="learn more" />
          </div>
        </div>
      </div>
    </section>
  )
}
