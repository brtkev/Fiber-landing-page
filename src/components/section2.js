import React from 'react';
import styles from '../styles/section2.module.css';
import featureCardStyles from '../styles/section2-featureCard.module.css';
import middleSubSectionStyles from '../styles/section2-middleSubSection.module.css';

const featureCardsInfo = [
    {
        iconUrl : 'time.svg',
        iconAlt : 'time-icon',
        header : 'Build in minutes',
        text : 'With a selection of premade templates, you can build out of portfolio in less than 10 minutes.'
    },
    {
        iconUrl : 'code.svg',
        iconAlt : 'code-icon',
        header : 'Add custom CSS',
        text : 'Customize your personal portfolio even more with the ability to add your own custom CSS styles.'
    },
    {
        iconUrl : 'allSizes.svg',
        iconAlt : 'responsive-icon',
        header : 'Responsive',
        text : 'All Fiber templates are fully responsive to ensure the experience is seemless across all devices.'
    }
]

class FeatureCard extends React.Component{

    render(){

        const icon = require('../Assets/'+this.props.iconUrl).default;

        return(
            <div id={featureCardStyles['main-container']}>
                <img id={featureCardStyles['icon']} src={icon} alt={`feature-card ${this.props.iconAlt}`} />
                <h3 id={featureCardStyles['heading']}>{this.props.header}</h3>
                <p id={featureCardStyles['parragraph']}>{this.props.text}</p>
            </div>
        );
    }
}

const MiddleSubSection = ( ) => {


    return(
        <div id={middleSubSectionStyles['main-container']}>
            <div id={middleSubSectionStyles['info-container']}>
                <h3 id={middleSubSectionStyles['header']}>Diversify your portfolio.</h3>
                <p id={middleSubSectionStyles['text']}>Create an even more impressive portfolio by creating case studies for your projects. Simply follow our step-by-step guide.</p>
                <button id={middleSubSectionStyles['button']}>Start Free Trial</button>
            </div>
            
            <div id={middleSubSectionStyles['image-container']}>
                <img id={middleSubSectionStyles['image']} src={require('../Assets/Page Image.png').default} alt="page" />
            </div>
        </div>
    );
}





class Section2 extends React.Component{

    featureCards = (cardsInfo = Array) => {
        return cardsInfo.map( ( card, key) => {
            return(
                <FeatureCard key={"featureCard-"+key} iconUrl={card.iconUrl} iconAlt={card.iconAlt} header={card.header} text={card.text} />
            );
        });
        
    }

    render(){

        return(
            <div id={styles['main-container']}>
                <button id={styles['why-button']}>Why Fiber?</button>
                <h2 id={styles['header']}>A good portfolio means good employability.</h2>

                <div id={styles['top-container']}>
                    {this.featureCards(featureCardsInfo)}
                </div>
                <MiddleSubSection />


            </div>
        );
    }
}

export default Section2;