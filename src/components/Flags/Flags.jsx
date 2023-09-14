"use client";
import React from 'react'
import styles from './Flags.module.scss';
import Slider from 'react-infinite-logo-slider'

import Flag1 from '../../assets/images/flag1.png';
import Flag2 from '../../assets/images/flag2.png';
import Flag3 from '../../assets/images/flag3.png';
import Flag4 from '../../assets/images/flag4.png';
import Flag5 from '../../assets/images/flag5.png';
import Flag6 from '../../assets/images/flag6.png';
import Flag7 from '../../assets/images/flag7.png';
import Flag8 from '../../assets/images/flag8.png';
import Flag9 from '../../assets/images/flag9.png';
import Flag10 from '../../assets/images/flag10.png';
import Flag11 from '../../assets/images/flag11.png';
import Flag12 from '../../assets/images/flag12.png';
import Image from 'next/image';

const flags = [
  {
    id: 1,
    img: Flag1,
    alt: 'India'
  },
  {
    id: 2,
    img: Flag2,
    alt: 'Turkey'
  },
  {
    id: 3,
    img: Flag3,
    alt: 'Morocco'
  },
  {
    id: 4,
    img: Flag4,
    alt: 'Nigeria'
  },
  {
    id: 5,
    img: Flag5,
    alt: 'Ethiopia'
  },
  {
    id: 6,
    img: Flag6,
    alt: 'Zimbabwe'
  },
  {
    id: 7,
    img: Flag7,
    alt: 'Ukraine'
  },
  {
    id: 8,
    img: Flag8,
    alt: 'Belarus'
  },
  {
    id: 9,
    img: Flag9,
    alt: 'Kazakhstan'
  },
  {
    id: 10,
    img: Flag10,
    alt: 'Kyrgyzstan'
  },
  {
    id: 11,
    img: Flag11,
    alt: 'Moldova'
  },
  {
    id: 12,
    img: Flag12,
    alt: 'Azerbaijan'
  },
];

export const Flags = () => {
  return (
    <section className={styles.flags}>
      <div className="container">
        <h2 className={styles.title}>We Have Experience Working With Students From</h2>
        <Slider
          width="400px"
          duration={40}
          spacing={20}
          pauseOnHover={true}
          blurBorders={false}
          blurBoderColor={'#fff'}
          className={styles.technologieslogos}
        >
          {flags.map((flag) => (
            <Slider.Slide
              key={flag.id}
              className={styles.slide}
            >
              <div className={styles.flag}>
                <Image src={flag.img} alt={flag.alt} />
                <p className={styles.flagText}>
                  {flag.alt}
                </p>
              </div>
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </section>
  )
}
