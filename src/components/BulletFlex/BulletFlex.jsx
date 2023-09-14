import React from 'react'
import styles from './BulletFlex.module.scss';

export const BulletFlex = ({ bulletIcon, bulletText }) => {
  return (
    <div className={styles.bullet}>
      <div className={styles.pic}>
        {bulletIcon}
      </div>
      <div className={styles.text}>
        <p className={styles.desc}>
          {bulletText}
        </p>
      </div>
    </div>
  )
}