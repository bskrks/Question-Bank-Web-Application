import React from 'react';
import styles from './styles.module.scss';

import { Switch } from 'antd';

function SwitchBox () {

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
      };

    return (
        <div className={styles.showAnswers}>
            <p className={styles.showAnswersText}>Cevapları Göster</p>
            <Switch defaultChecked onChange={onChange} className={styles.showAnswersSwitch} />
        </div>
    );
}

export default SwitchBox;