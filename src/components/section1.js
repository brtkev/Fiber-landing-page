import React from 'react';
import styles from '../styles/section1.module.css';

import heroIllustration from '../Assets/hero-Illustration.png'; 
import checkmarkIcon from '../Assets/Checkmark.svg';
import starIcon from '../Assets/star.svg';

function stars( number = 5){
    let stars = []
    for(let i = 0; i < number; i++){
        stars.push(<img key={"starIcon-"+i} className={styles["star-icon"]} src={starIcon} alt="star-icon"/>)
    }
    return stars
}

class Section1 extends  React.Component{

    stars = stars(5)

    render(){
        


        return(
            <div className={styles["main-container"]}>
                <div className={styles["info-container"]}>
                    <div id={styles["info-container__first-label"]}>
                        {this.stars}
                        <p id={styles['info-container__first-label-text']}>Rated 4.8/5 (248 reviews)</p>
                    </div>
                    <h1 id={styles['info-container__heading']}>
                        Create your portfolio in minutes.
                    </h1>
                    <p id={styles['info-container__parragraph']}>With fiber, you can setup your own personal protfolio in minutes with dozens of premade, beautiful templates.</p>
                    <button className={styles['button']} id={styles['free-trial-button']}>Start Free Trial</button>
                    <button className={styles['button']} id={styles['examples-button']}>View Examples</button>

                    <div id={styles['info-container__last-label']}>
                        <img className={styles["checkmark-icon"]} src={checkmarkIcon} alt="checkmark-icon"/>
                        <p className={styles['info-container__last-label-text']}>No Credit Card Required</p>
                        <img className={styles["checkmark-icon"]} src={checkmarkIcon} alt="checkmark-icon"/>
                        <p className={styles['info-container__last-label-text']}>10 Free Templates</p> 

                    </div>
                </div>
                <div className={styles["image-container"]}>
                    <img id={styles["image-hero-illustration"]} src={heroIllustration} alt="hero-illustration" /> 
                </div>
            </div>
        );
    };

}

export default Section1