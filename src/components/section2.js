import React from 'react';
import styles from '../styles/section2.module.css';
import featureCardStyles from '../styles/section2-featureCard.module.css';
import middleSubSectionStyles from '../styles/section2-middleSubSection.module.css';
import UserReviewCardStyles from '../styles/section2-userReviewCard.module.css';

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

const userReviews = [
    {
        avatar : 'User Avatar.svg',
        name : 'Sarah Andrews',
        revenue : '100k',
        review : 'Setting up my portfolio with Fiber took no more thna 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.'
    },
    {
        avatar : 'User Avatar 32.svg',
        name : 'Mathew Higgins',
        revenue : '20k',
        review : "I have been getting A LOT of leads ever since I used Fiber's premade templates, now I just need to work on my case studies and I'll be ready to go!"
    },
    {
        avatar : 'User Avatar 2.svg',
        name : 'Janice Dave',
        revenue : '30k',
        review : "I only just started freelancing this yet have already made more than I ever did in my full-time job. The templates are so amazing."
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


class UserReviewCard extends React.Component{


    render(){
        return(
            <div id={UserReviewCardStyles['main-container']}>
                <div id={UserReviewCardStyles['user-container']} >
                    <img id={UserReviewCardStyles['user-avatar']} src={require(`../Assets/${this.props.avatar}`).default} alt="user Avatar" /> 
                    <div id={UserReviewCardStyles['user-info-container']}>
                        <p id={UserReviewCardStyles['user-info-container__name']}>{this.props.name}</p>
                        <p id={UserReviewCardStyles['user-info-container__revenue']}>${this.props.revenue} in revenue</p>
                    </div>

                </div>
                <p id={UserReviewCardStyles['text']}>
                    {this.props.review}
                </p>
                <button id={UserReviewCardStyles['button']}>View {this.props.name.split(' ')[0]}'s portfolio</button>
                
            </div>
        );
    }
}



class Section2 extends React.Component{

    featureCardSection = (props) => {
        const cards =  props.cardsInfo.map( ( card, key) => {
            return(
                <FeatureCard key={"featureCard-"+key} iconUrl={card.iconUrl} iconAlt={card.iconAlt} header={card.header} text={card.text} />
            );
        });
        
        return(
            <div id={styles['top-container']}>
                {cards}
            </div>
        );
    }

    ReviewCardSection = (props) => {
        const cards =  props.cardsInfo.map( ( card, key) => {
            return(
                <UserReviewCard key={"reviewCard"+key} avatar={card.avatar} name={card.name} revenue={card.revenue} review={card.review} />
            );
        });
        
        return(
            <div id={styles['bottom-container']}>
                {cards}
            </div>
        );
    }

    render(){

        return(
            <div id={styles['main-container']}>
                <button id={styles['why-button']}>Why Fiber?</button>
                <h2 id={styles['header']}>A good portfolio means good employability.</h2>

                <this.featureCardSection cardsInfo={featureCardsInfo} />

                <MiddleSubSection />

                <this.ReviewCardSection cardsInfo={userReviews} />

            </div>
        );
    }
}

export default Section2;