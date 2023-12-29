import React from 'react';
import SwitchBox from '../SwitchBox/index.jsx';

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

function AnswerList(props) {
    const response = props?.res;
    const responseOptions = ["A", "B", "C", "D", "E"];

    const numberOfQuestions = new Array(10).fill(null).map((_, i) => i + 1);

    const selectedImg = {
        "A" : selectedA,
        "B" : selectedB,
        "C" : selectedC,
        "D" : selectedD,
        "E" : selectedE,
    }

    const unselectedImg = {
        "A" : unselectedA,
        "B" : unselectedB,
        "C" : unselectedC,
        "D" : unselectedD,
        "E" : unselectedE,
    }

    return (
        <div className={styles.testWrapper}>
            <div className={styles.buttonWrapper}>
                <SwitchBox />
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
                    {numberOfQuestions.map((item,i) => (
                        <button className={styles.questionButton}>
                            <li className={styles.options}>
                                <p className={styles.number}>{i+1}.Soru</p>
                                {
                                    responseOptions.map((opt) => {
                                        if(response?.length > 0 && response?.[i]?.resNumber == item  ) {
                                            if(response?.[i]?.name === opt) {
                                                return <img src={selectedImg[response?.[i]?.name]} alt="" className={styles.option} />
                                            } else {
                                                return <img src={unselectedImg[opt]} alt="" className={styles.option} />
                                            }
                                        } else {
                                            return <img src={unselectedImg[opt]} alt="" className={styles.option} />
                                        }
                                    })
                                }
                            </li>
                        </button>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AnswerList;