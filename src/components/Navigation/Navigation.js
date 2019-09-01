import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => (
    <nav>
        <ul className={styles.wrapper}>
            <li className={styles.navItem}>
                <NavLink exact activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/">Home</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/about">About</NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
)

export default Navigation;