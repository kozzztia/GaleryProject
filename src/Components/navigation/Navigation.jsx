import React, {useState} from 'react'
import styles from './navigation.module.css'
import { NavLink } from 'react-router-dom';
import {navigationContent} from '../../Store/staticStore.js';



const Navigation = () => {
    const [items] = useState(navigationContent);
  return (

    <div className={styles.nav}>
        {
            items.map(item => {
                return <NavLink 
                className={styles.item}
                key={item.id} 
                to={item.link}>
                    {item.title}
                </NavLink>
            })
        }
    </div>
  )
}

export default Navigation
