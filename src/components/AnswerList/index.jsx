import React from 'react';
import SwitchBox from '../SwitchBox/index.jsx';
import TestButton from '../TestButton/index.jsx'

import data from '../../questions.json'

import unselectedA from '../../images/light-a.svg'
import unselectedB from '../../images/light-b.svg'
import unselectedC from '../../images/light-c.svg'
import unselectedD from '../../images/light-d.svg'
import unselectedE from '../../images/light-e.svg'
import selectedA from '../../images/dark-a.svg'
import selectedB from '../../images/dark-b.svg'
import selectedC from '../../images/dark-c.svg'
import selectedD from '../../images/dark-d.svg'
import selectedE from '../../images/dark-e.svg'

import "@fontsource/manrope";
import styles from './styles.module.scss'

function AnswerList() {
    console.log("data",data.questions.length);
    return (
        <div className={styles.testWrapper}>
            <div className={styles.buttonWrapper}>
                <SwitchBox />
                <TestButton />
            </div>
            <div className={styles.listWrapper}>
                <div className={styles.lessonWrapper}>
                    <img src="./icons/lesson-icon.svg" alt="Ders" className={styles.lessonIcon} />
                    <div className={styles.titleWrapper}>
                        <p className={styles.title}>Türkçe</p>
                        <p className={styles.total}>{data.questions.length} Soru</p>
                    </div>
                </div>
                <ul className={styles.list}>
                    {data.questions.map((item,i) => (
                        <li className={styles.options}>
                            <p className={styles.number}>{i+1}.Soru</p>
                            <img src={unselectedA} alt="A" className={styles.option} />
                            <img src={unselectedB} alt="B" className={styles.option} />
                            <img src={unselectedC} alt="C" className={styles.option} />
                            <img src={unselectedD} alt="D" className={styles.option} />
                            <img src={unselectedE} alt="E" className={styles.option} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AnswerList;