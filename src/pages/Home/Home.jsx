import React from 'react'
import styles from './Home.module.css'
import { NavLink } from 'react-router-dom'
function Home() {
    return (
        <><div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.SubContainer}>
                    <h1>Welcome to Feel the Rhythm</h1>
                    <p>Dive into the world of beats and moves with Himanshi.Discover Amazing music,learn incredible dance moves,and let your passion flow</p>

                </div>
            </div>
           <div >
             <div className={styles['card-container']}>

                <div className={styles.card}>
                    <img src="/vinyl.png" alt="dance" />
                    <h2>Explore Music</h2>
                    <p>Discover trending songs and create your own playlist</p>
                    <NavLink to='/music'><button> {'\u{1F3A7}'} start Listening</button></NavLink>
                </div>
                <div  className={styles.card}>
                    <img src="/dance.png" alt="" />
                    <h2>Dive into Dance</h2>
                    <p>learn amazing dance styles from professional instructors</p>
                    <NavLink to='/video'><button>{'\u{1F483}'} Start Dancing</button></NavLink>
                </div>
            </div>

           </div>
            </div>
        </>
    )
}

export default Home
