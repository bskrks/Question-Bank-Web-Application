import React from 'react';
import styles from './styles.module.scss'

function SideBar() {
    return (
        <div className={styles.sideBarWrapper}>
            <img src="./icons/logo.svg" alt=''  className={styles.logo}/>
            <ul className={styles.optionsList}>
                <li className={styles.options}>
                    <a href="/" title="Anasayfa"><img src='./icons/anasayfa.svg' alt="Anasayfa" /></a>
                </li>
                <li className={styles.options}>
                    <a href="/" title="Dersler"><img src="./icons/dersler.svg" alt="Dersler" /></a>
                </li>
                <li className={styles.options}>
                    <a href="/" title="Soru Bankası"><img src="./icons/soru-bankasi.svg" alt="Soru Bankası" /></a>
                </li>
                <li className={styles.options}>
                    <a href="/" title="Deneme Sınavları"><img src="./icons/deneme-sinavlari.svg" alt="Deneme Sınavları" /></a>
                </li>
                <li className={styles.options}>
                    <a href="/" title="Rehberlik Videoları"><img src="./icons/rehberlik-videolari.svg" alt="Rehberlik Videoları" /></a>
                </li>
                <li className={styles.options}>
                    <a href="/" title="İstatistik"><img src="./icons/istatistik.svg" alt="İstatistik" /></a>
                </li>
                <li className={styles.options}>
                    <a href="/" title="Ölçme Değerlendirme"><img src="./icons/olcme-degerlendirme.svg" alt="Ölçme Değerlendirme" /></a>
                </li>
            </ul>
            <ul className={styles.appList}>
                <li className={styles.options}>
                    <a href="/"><img src="./icons/cozucu.svg" alt="Çözücü App" /></a>
                </li>
                <li className={styles.options}>
                    <a href="/"><img src="./icons/simdi-anladim.svg" alt="Şimdi Anladım" /></a>
                </li>
                <li className={styles.options}>
                    <a href="/"><img src="./icons/kocum-yanimda.svg" alt="Koçum Yanımda" /></a>
                </li>
            </ul>
            <a href="/"><img src="./icons/gorus-oneri.svg" alt="Görüş Öneri" className={styles.message} /></a>
        </div>
    );
}

export default SideBar;