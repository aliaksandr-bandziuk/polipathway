'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MdClose, MdDensityMedium, MdDehaze } from "react-icons/md";
import { FaAlignRight } from 'react-icons/fa'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Logo from '../../assets/images/logo.png'

import styles from './TheHeader.module.scss'

export const TheHeader = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('');

  // State for showing/hiding the modal
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  // Add a function to toggle the modal state
  const toggleContactModal = () => {
    setContactModalOpen(!isContactModalOpen);
  };

  const closeMenu = () => {
    setNavVisible(false);
  }

  useEffect(() => {
    if (isNavVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isNavVisible]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      // Get all the sections and their corresponding links
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll(`.${styles.navListItem}`);

      // Find the section that is currently in the viewport
      let activeSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          activeSection = section.getAttribute('id');
        }
      });

      // Update the active navigation item
      setActiveNavItem(activeSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      start: 'top -70',
      end: 99999,
      toggleClass: {
        className: styles.headerScrolled,
        targets: `.${styles.header}`
      }
    });
  }, []);

  return (
    <header className={`${styles.header} ${hasScrolled ? styles.headerScrolled : ''}`}>
      <div className="container">
        <div className={styles.headerWpapper}>
          <div className={styles.headerLogo}>
            <Link
              href="/"
              onClick={closeMenu}
            >
              <Image
                src={Logo}
                alt="Logo"
                className={styles.headerLogoImage}
              />
            </Link>
          </div>
          <div className={`${styles.headerMenu} ${isNavVisible ? styles.navVisible : ''}`} onClick={closeMenu}>
            <nav className={styles.nav}>
              <div className={styles.navList}>
                {/* Add the active class based on activeNavItem */}
                <Link href="#home" className={styles.navListItem}>About us</Link>
                <Link href="#about" className={styles.navListItem}>Why Poland</Link>
                <Link href="#development" className={styles.navListItem}>services & prices</Link>
                <Link href="#portfolio" className={styles.navListItem}>universities & courses</Link>
                <Link href="#portfolio" className={styles.navListItem}>contact</Link>
              </div>
            </nav>
            <div className={styles.langs}>
              <Link href="/" className={styles.langsItem}>EN</Link>
              <Link href="/" className={styles.langsItem}>RU</Link>
            </div>
          </div>
          <div
            className={`${styles.burgerMenu} ${isNavVisible ? styles.open : ''}`}
            onClick={() => {
              setNavVisible(!isNavVisible);
            }}
          >
            {isNavVisible ? (
              <MdClose className={styles.icon} fontSize="1.8em" />
            ) : (
                <MdDehaze className={styles.icon} fontSize="1.8em" />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}