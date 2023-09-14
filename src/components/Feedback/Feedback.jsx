import React from 'react'
import styles from './Feedback.module.scss';

export const Feedback = () => {
  return (
    <section className={styles.feedback}>
      <div className="container">
        <h2 className={styles.title}>Feedback</h2>
        <p className={styles.text}>Our customer feedback speaks for itself.</p>
      </div>
    </section>
  )
}
