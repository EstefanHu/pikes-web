import React from 'react'

import styles from './styles/Header.module.scss'

const Header = () => {
    return <nav className={styles.HeaderWrapper}>
        <div className={styles.Header}>
            <h1>Projekt:<span>Pikes</span></h1>
        </div>
    </nav>
}

export default Header