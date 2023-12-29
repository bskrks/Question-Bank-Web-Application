import React, { useState } from 'react';
import styles from './styles.module.scss'
import data from '../../questions.json'
import TestButton from '../TestButton/index.jsx'

import { Radio, Space, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

function TestForm (props) {

    const questionData = data.questions;

    const [currentNumber, setCurrentNumber] = useState(1);
    const [responseValue, setResponseValue] = useState();
    const [isChecked, setIsChecked] = useState(responseValue);
    const [savedResponses, setSavedResponses] = useState([]);
    
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
        const resObj = {
            name: `${responseValue}`,
            resNumber: `${currentNumber}`
        }

        if(savedResponses.length === 0) {
            setSavedResponses(savedResponses => [...savedResponses, resObj]);
        }
                
        if(currentNumber > 1) {
            setCurrentNumber(currentNumber-1);
        }else if(currentNumber === 1) {
            setCurrentNumber(1);
        }

        setIsChecked(false);
    }

    const nextQuestion = () => {
        let sameQuestion = false;

        const resObj = {
            name: `${responseValue}`,
            resNumber: `${currentNumber}`
        }
        
        if(currentNumber < 10) {
            setCurrentNumber(currentNumber+1);
        }else if(currentNumber === 10) {
            setCurrentNumber(1);
        }

        if(savedResponses.length === 0) {
            setSavedResponses(savedResponses => [...savedResponses, resObj]);
        }  if(savedResponses.length > 0) {
            savedResponses.map((item, index) =>  {
                if(+item.resNumber === currentNumber) {
                    let newArr = [...savedResponses];
                    newArr[index] = resObj;
                    sameQuestion = true;
                
                    setSavedResponses(newArr);
                }
            })
            if(sameQuestion === false) {
                setSavedResponses(savedResponses => [...savedResponses, resObj]);
            }
        }
        setIsChecked(false);
    }

    useEffect(() => {
        props.resFunc(savedResponses);
      }, [props, savedResponses]);

    const onChange = (e) => {
        setResponseValue(e.target.value);
        setIsChecked(e.target.value);
    };

    const handleSubmit = (e) => {
        const listObj = Object.assign({}, savedResponses); 
        const fileData = JSON.stringify(listObj);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'answersFile.json';
        link.href = url;
        link.click();

        e.preventDefault();
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
                    <Radio.Group onChange={onChange} value={isChecked}>
                        <Space direction="vertical">
                            {optionLetters.map((item, index) => (
                                <Radio value={item} defaultChecked={isChecked} className={styles.radio}>{questionData[currentNumber-1].options[index].optionDescripton}</Radio>
                            ))}
                        </Space>
                    </Radio.Group>
                    <TestButton 
                        responseList={savedResponses}
                    />
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