import * as React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Footer.module.css'
const Footer = () => {
    return (
            <div>
                <footer  className={styles.footer}>
                    <p>Youssef J &#169; Alle rechten voorbehouden | Web Frameworks 2022</p>
                </footer>
            </div>
    )
}
export default Footer;