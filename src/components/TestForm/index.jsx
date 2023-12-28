import React, { useState } from 'react';
import styles from './styles.module.scss'
import data from '../../questions.json'

import { Radio, Space, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';


function TestForm (props) {

    const questionData = data.questions;

    const [currentNumber, setCurrentNumber] = useState(1);
    const [responseValue, setResponseValue] = useState(1);
    
    const imagesSources = ["./icons/brush.svg","./icons/zoom-in.svg","./icons/zoom-out.svg","./icons/alert.svg"];
    const optionLetters = ["A", "B", "C", "D", "E"]; 

    const antButton = (icon, clickFunc, text) => {
        return (<Button
                type="primary"
                icon={icon}
                onClick={clickFunc}
                className={styles.prevNextButton}
                >
                    {text}
                </Button>);
    }

    const previousQuestion = () =>{
        if(currentNumber > 1) {
            setCurrentNumber(currentNumber-1);
        }else if(currentNumber === 1) {
            setCurrentNumber(1);
        }
    }

    const nextQuestion = () =>{
        if(currentNumber < 10) {
            setCurrentNumber(currentNumber+1);
        }else if(currentNumber == 10) {
            setCurrentNumber(1);
        }
    }

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setResponseValue(e.target.value);
        props.resFunc(e.target.value);
    };

    const handleSubmit = async(e) => {
        console.log("e", e);
    }

    return (
        <div className={styles.formWrapper}>
            <div className={styles.titleWrapper}>
                <img src="./icons/arrow-left.svg" alt='' className={styles.arrow}/>
                <h2 className={styles.title}>Konu Tarama Testi #1</h2>
            </div>
            <div className={styles.questionWrapper}>
                <form className={styles.formCont} onSubmit={(e)=> handleSubmit(e)}>
                    <div className={styles.questionBox}>
                        <div className={styles.questionNumber}>
                            <p className={styles.questionNumberText}>Soru: Türkçe  # {currentNumber}</p>
                        </div>
                        <div className={styles.buttonWrapper}>
                            {imagesSources.map((item) => (
                                <img src={item} alt="" />
                            ))}
                        </div>
                    </div>
                    <p className={styles.description}>{questionData[currentNumber-1].description}</p>
                    <p className={styles.question}>{questionData[currentNumber-1].question}</p>
                    <Radio.Group onChange={onChange} value={responseValue}>
                        <Space direction="vertical">
                            {optionLetters.map((item, index) => (
                                <Radio value={item} className={styles.radio}>{questionData[currentNumber-1].options[index].optionDescripton}</Radio>
                            ))}
                        </Space>
                    </Radio.Group>
                </form>
            </div>
            <div className={styles.prevNextWrapper}>
                {antButton(<LeftOutlined />, ()=>previousQuestion(), "Önceki Soru")}
                {antButton(<RightOutlined />, ()=>nextQuestion(), "Sonraki Soru")}
            </div>
        </div>
    );
}

export default TestForm;