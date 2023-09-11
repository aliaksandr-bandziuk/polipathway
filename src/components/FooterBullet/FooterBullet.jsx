import React from 'react'
import { FaCheck } from 'react-icons/fa';

import styles from './FooterBullet.module.scss';

export const FooterBullet = ({ bulletText }) => {
  return (
    <div className={styles.footerBullet}>
      <div className={styles.footerBulletIcon}>
        <FaCheck fontSize="12px" />
      </div>
      <div className={styles.footerBulletText}>
        {bulletText}
      </div>
    </div>
  )
}
