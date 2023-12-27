import React from 'react';
import styles from './styles.module.scss';

function TestButton() {
    return (
        <div className={styles.buttonWrapper}>
            <img src="./icons/complete.svg" alt="" className={styles.buttonIcon} />
            <p className={styles.buttonText}>Testi Bitir</p>
        </div>
    );
}

export default TestButton;