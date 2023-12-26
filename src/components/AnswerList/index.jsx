import React from 'react';
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
import styles from './styles.module.scss'

function AnswerList() {
    console.log("data",data.questions);
    return (
        <div className={styles.listWrapper}>
            <ul>
                {data.questions.map((item,i) => (
                    <li className={styles.options}>
                        <p className={styles.number}>{i+1}.Soru</p>
                        <img src={unselectedA} alt="" className={styles.option} />
                        <img src={unselectedB} alt="" className={styles.option} />
                        <img src={unselectedC} alt="" className={styles.option} />
                        <img src={unselectedD} alt="" className={styles.option} />
                        <img src={unselectedE} alt="" className={styles.option} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AnswerList;