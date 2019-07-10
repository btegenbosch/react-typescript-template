import { Routes } from 'app/Routes';
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './Header.css';

export function Header() {
  return (
    <div className={styles.header}>
      <h1>React template</h1>
      <div className={styles.menu}>
        <Link to={Routes.HOMEPAGE}>Home</Link>
        <Link to={Routes.ABOUT}>About</Link>
      </div>
    </div>
  );
}
