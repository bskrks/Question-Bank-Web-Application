import React, { useState } from 'react';
import styles from './styles.module.scss'
import { Input, Radio, Space } from 'antd';

function TestForm () {

    const [responseValue, setResponseValue] = useState(1);

    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setResponseValue(e.target.value);
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
            <form className={styles.formCont} onSubmit={(e)=> handleSubmit(e)}>
                <div className={styles.questionWrapper}>
                    <p className={styles.description}>“Şair, şiirlerinde hava alacak boşluk bırakmıyor, 
                    her şeyi söylüyor. Okuyucunun adına da kendisi konuşuyor. Bunun için dizleri hayalinizi 
                    perdeliyor, soluğunuzu kesiyor, sizi boğuyor.”</p>
                    <p className={styles.question}>Bu parçada geçen “hava alacak boşluk bırakmamak” sözüyle 
                    anlatılmak istenen aşağıdakilerden hangisidir?</p>
                    <Radio.Group onChange={onChange} value={responseValue}>
                        <Space direction="vertical">
                            <Radio value={'A'}>A- Gece oldu, ışıklar yandı, herkes kendi kabuğuna çekildi</Radio>
                            <Radio value={'B'}>B- Akşama kadar güneş altında kalınca kolları yanmış</Radio>
                            <Radio value={'C'}>C- Odamız yaz günleri çinko damın altında yanar durur</Radio>
                            <Radio value={'D'}>D- Annem, biz temizliği bitirmeden eve gelirse yandık.{responseValue === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                            </Radio>
                        </Space>
                    </Radio.Group>
                </div>
            </form>
        </div>
    );
}

export default TestForm;