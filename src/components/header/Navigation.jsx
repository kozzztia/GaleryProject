import React from 'react';
import styles from './navigation.module.css';
import {NavLink} from 'react-router-dom';
const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <NavLink to ='/GamesContainer'className={styles.navigationItem}>Games</NavLink>
      <NavLink to ='/PlatformsContainer'className={styles.navigationItem}>Platforms</NavLink>
      <NavLink to ='/GenresContainer'className={styles.navigationItem}>Genres</NavLink>
    </div>
  )
}

export default Navigation
