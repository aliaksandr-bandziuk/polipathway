'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="26" viewBox="0 0 33 26" fill="none" transform="rotate(45)">
                <line x1="0" y1="13" x2="33" y2="13" stroke="url(#paint0_linear_13_83)" strokeWidth="3" />
                <line x1="16.5" y1="0" x2="16.5" y2="26" stroke="url(#paint1_linear_13_83)" strokeWidth="3" />
                <defs>
                  <linearGradient id="paint0_linear_13_83" x1="-8.62252e-09" y1="3.46667" x2="36.0395" y2="3.46666" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" />
                    <stop offset="1" stopColor="#ffa800" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_13_83" x1="-3.90789" y1="26" x2="33" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" />
                    <stop offset="1" stopColor="#ffa800" />
                  </linearGradient>
                </defs>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="26" viewBox="0 0 33 26" fill="none">
                <rect width="33" height="3.71429" rx="1.85714" fill="url(#paint0_linear_13_83)" />
                <rect y="22.2857" width="33" height="3.71429" rx="1.85714" fill="url(#paint1_linear_13_83)" />
                <rect y="11.1429" width="33" height="3.71429" rx="1.85714" fill="url(#paint2_linear_13_83)" />
                <defs>
                  <linearGradient id="paint0_linear_13_83" x1="-8.62252e-09" y1="3.46667" x2="36.0395" y2="3.46666" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" />
                    <stop offset="1" stopColor="#ffa800" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_13_83" x1="-3.90789" y1="26" x2="33" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" />
                    <stop offset="1" stopColor="#ffa800" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_13_83" x1="5.21062" y1="13" x2="33.0001" y2="13" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" />
                    <stop offset="1" stopColor="#ffa800" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}