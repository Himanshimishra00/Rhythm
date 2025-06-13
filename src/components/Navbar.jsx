import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'

function Navbar() {
    return (
        <>
            <header className={styles.container}>
                <div className={styles.logo}>
                    <span>Rhythm</span>
                </div>
                <nav className={styles.navlink}>
                    <ul>
                        <li><NavLink to='/' end className={({ isActive }) => isActive ? styles.active : ''}><span className={styles.navitem}> <span className="material-symbols-outlined">
                            home
                        </span>Home</span></NavLink></li>

                        <li><NavLink to='/music' end className={({ isActive }) => isActive ? styles.active : ''}><span className={styles.navitem}> <span className="material-symbols-outlined">
                            music_note
                        </span>Music</span></NavLink></li>

                        <li><NavLink to='/video' end className={({ isActive }) => isActive ? styles.active : ''}><span className={styles.navitem}> <span className="material-symbols-outlined">
                            video_library
                        </span>Dance</span></NavLink></li>

                        <li><NavLink to='/about' className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Navbar
