import React from 'react'
import styles from './ContactSection.module.scss';
import { ButtonPrimary } from '../ButtonPrimary';

export const ContactSection = () => {
  return (
    <section className={styles.contact}>
      <div className="container">
        <div className={styles.contactWrapper}>
          <h2 className={styles.title}>You&apos;re One Click Away From Your Dream Education!</h2>
          <p className={styles.text}>Education abroad is not as difficult and expensive as it seems</p>
          <ButtonPrimary buttonPrimaryText="Contact Us" />
        </div>
      </div>
    </section>
  )
}
