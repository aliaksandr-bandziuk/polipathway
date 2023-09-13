import React from 'react'

import styles from './ButtonPrimary.module.scss';

export const ButtonPrimary = ({ buttonPrimaryText }) => {
  return (
    <button className={styles.buttonPrimary}>
      {buttonPrimaryText}
    </button>
  )
}
