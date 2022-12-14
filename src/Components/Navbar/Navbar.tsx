import * as React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
            <div className={styles.topnav}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/portofolio">Portofolio</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
    )
}
export default Navbar;