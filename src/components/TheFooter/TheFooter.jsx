import React from 'react'
import { FaTelegramPlane, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa'

import styles from './TheFooter.module.scss';
import Link from 'next/link';
import { FooterBullet } from '../FooterBullet';
import { FormMain } from '../FormMain';

import Logo from '../../assets/images/logo.png'
import Image from 'next/image';

const footerBullets = [
  'Admission',
  'Visas',
  'Transfers',
  'Residency',
];

export const TheFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className="container">
          <div className={styles.footerTopWrapper}>
            <div className={styles.footerTopLeft}>
              <h3 className={styles.footerTitle}>Study with PoliPathWay</h3>
              <p className={styles.footerDesctiption}>Make the first step into your future right now.</p>
              <div className={styles.footerBullets}>
                {footerBullets.map((bullet, index) => (
                  <FooterBullet key={index} bulletText={bullet} />
                ))}
              </div>
              <div className={styles.footerText}>
                <p>
                  If you have always dreamed of getting an education abroad or migration, don't shelve that dream! PoliPathWay is here to help you with every step on your pathway. We offer a variety of services that help to make the admission process as easy and comfortable as possible. Don't miss your opportunity to study abroad!
                </p>
              </div>
              <h4 className={styles.footerSubtitle}>Contact us in any convenient way!</h4>
              <p className={styles.footerDesctiption}>Consulting and support</p>
              <div className={styles.footerContacts}>
                <div className={styles.footerContactsItem}>
                  <div className={styles.footerContactsItemIcon}>
                    <FaTelegramPlane color="#01b8f6" fontSize="1.5em" padding="5px" background="#032540" />
                  </div>
                  <div className={styles.footerContactsItemText}>
                    <Link href="https://t.me/+zLBhFlT7W1Q0MWM0">PoliPathWay</Link>
                  </div>
                </div>
                <div className={styles.footerContactsItem}>
                  <div className={styles.footerContactsItemIcon}>
                    <FaWhatsapp color="#40c351" background="#fff" fontSize="1.5em" />
                  </div>
                  <div className={styles.footerContactsItemText}>
                    <Link href="https://wa.me/message/5EJRNM3WEDXAC1">PoliPathWay</Link>
                  </div>
                </div>
                <div className={styles.footerContactsItem}>
                  <div className={styles.footerContactsItemIcon}>
                    <FaRegEnvelope color="#b00509" fontSize="1.5em" />
                  </div>
                  <div className={styles.footerContactsItemText}>
                    <Link href="mailto:polipathway@gmail.com">polipathway@gmail.com</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footerTopRight}>
              <div className={styles.formWrapper}>
                <h3 className={styles.footerTitle}>Have Any Questions?</h3>
                <p className={styles.footerDesctiption}>Fill out the contact form below!</p>
                <FormMain />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.divider}></div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <div className={styles.footerBottomWrapper}>
            <div className={styles.footerBottomGrid}>
              <div className={styles.gridItem}>
                <div className={styles.footerBottomLogo}>
                  <Link href="/">
                    <Image
                      src={Logo}
                      alt="PoliPathWay"
                      className={styles.footerBottomLogoImage}
                    />
                  </Link>
                </div>
              </div>
              <div className={styles.gridItem}></div>
              <div className={styles.gridItem}></div>
              <div className={styles.gridItem}></div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.copyrigth}>
              <p>© 2023 PoliPathWay</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
