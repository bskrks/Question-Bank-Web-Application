import React from 'react';
import styles from './styles.module.scss';

function TestButton(props) {

    const listResponse = props.responseList;

    const handleSubmit = (e) => {
        console.log(("listResponse",listResponse))
        e.preventDefault();
    }

    return (
        <button onClick={()=>handleSubmit} className={styles.buttonWrapper}>
            <img src="./icons/complete.svg" alt="" className={styles.buttonIcon} />
            <p className={styles.buttonText}>Testi Bitir</p>
        </button>
    );
}

export default TestButton;