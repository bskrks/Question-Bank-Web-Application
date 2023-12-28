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

function AnswerList(props) {
    const response = props?.res ;

    const responseOptions = ["A", "B", "C", "D", "E"];
    const unselectedSources = [unselectedA, unselectedB, unselectedC, unselectedD, unselectedE];
    const selectedSources = ["selectedA","selectedB","selectedC","selectedD","selectedE"];

    const filteredOptions = responseOptions.filter((item) => item !== response);

    console.log("filteredOptions",filteredOptions);

    console.log("response buse ", response)
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
                            {/* {filteredOptions.map((item) => {
                                response ? <img src={selectedImg[response]} alt="" className={styles.option} /> : 
                                            <img src={unselectedImg[item]} alt="" className={styles.option} />})
                            } */}
                            {
                                responseOptions.map((item) => {
                                    if(item !== response) {
                                        return (<img src={unselectedImg[item]} alt="" className={styles.option} />)
                                    } else if(item === response){
                                        return (<img src={selectedImg[response]} alt="" className={styles.option} />)
                                    }
                                })
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AnswerList;