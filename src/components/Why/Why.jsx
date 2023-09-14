import React from 'react'
import styles from './Why.module.scss';
import { FaUserGraduate, FaHotel, FaRegMoneyBill1 } from "react-icons/fa6";

import whyBg from '../../assets/images/whyImage.jpeg';
import Image from 'next/image';
import { BulletFlex } from '../BulletFlex';
import { ButtonSecondary } from '../ButtonSecondary';

const bulletsData = [
  {
    icon: <FaUserGraduate color="#ffa800" fontSize="1.5em" />,
    text: 'World-Class Education with European Diploma: studying here provides a great opportunity',
  },
  {
    icon: <FaHotel color="#ffa800" fontSize="1.5em" />,
    text: 'Affordable Living: Poland offers a relatively low cost of living with other European countries',
  },
  {
    icon: <FaRegMoneyBill1 color="#ffa800" fontSize="1.5em" />,
    text: 'Job Market Poland is one of the most attractive destinations for career opportunities in Europe',
  },
];

export const Why = () => {
  return (
    <section className={styles.whySection}>
      <div className="container">
        <h2 className={styles.title}>Why Study in Poland?</h2>
        <p className={styles.text}>Select the university and country wisely — it&apos;s a new chapter in your life.</p>
        <div className={styles.whyWrapper}>
          <div className={styles.imageBlock}>
            <Image src={whyBg} alt="Why Study in Poland?" />
          </div>
          <div className={styles.textBlock}>
            <div className={styles.textItem}>
              <p className={styles.textDesc}>As a rapidly growing hub of innovation and academic excellence, Poland has quickly become one of the most attractive destinations for international students. With its state-of-the-art universities, world-class research facilities, and unparalleled cultural experiences, Poland offers a unique and enriching academic experience that is sure to leave a lasting impression.</p>
            </div>
            <div className={styles.bullets}>
              {bulletsData.map((bullet, index) => (
                <BulletFlex key={index} bulletIcon={bullet.icon} bulletText={bullet.text} />
              ))}
            </div>
            <div className={styles.buttonBlock}>
              <ButtonSecondary buttonSecondaryText="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
