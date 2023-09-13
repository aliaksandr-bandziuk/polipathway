import React from 'react'

import styles from './ButtonSecondary.module.scss';

export const ButtonSecondary = ({ buttonSecondaryText }) => {
  return (
    <button className={styles.buttonSecondary}>
      {buttonSecondaryText}
    </button>
  )
}
