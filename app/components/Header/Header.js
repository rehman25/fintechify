// components/Header.js
"use client"
import Link from 'next/link';
import { useState } from 'react';
import styles from '../assets/css/header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="FinPoan Logo" />
        <h1>FinPoan</h1>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/news">News</Link></li>
          <li><Link href="/pages">Pages</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <div className={styles.search}>
          <span>🔍</span> <span>Search</span>
        </div>
        <div className={styles.signin}>
          <span>👤</span> <span>Sign In</span>
        </div>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>
    </header>
  );
}
