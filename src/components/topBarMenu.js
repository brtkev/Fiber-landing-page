
import React from 'react';
import styles from '../styles/topBarMenu.module.css';



const buttonNames = [ 'Fiber', 'Community', 'Pricing', 'Features', 'Sign in', 'Sign up' ]

class Button extends React.Component {

    render(){

        return (
            <button className={this.props.className} >{this.props.text}</button>
        );
    };
}

class TopBarMenu extends React.Component {


    render(){

        return(
            <div className={styles["main-container"]}>
                <div className={styles["button-container"]}>
                    <Button text={buttonNames[0]} className={[styles["button"], styles["button-bold-text"]].join(' ')} /> 
                </div>
                
                <div className={styles["button-container"]}>
                    <Button text={buttonNames[1]} className={styles["button"]} /> 
                    <Button text={buttonNames[2]} className={styles["button"]} /> 
                    <Button text={buttonNames[3]} className={styles["button"]} /> 
                </div> 

                <div className={styles["button-container"]}>
                    <Button text={buttonNames[4]} className={[styles["button"], styles["button-bold-text"]].join(' ')} /> 
                    <Button text={buttonNames[5]} className={[styles["button"], styles["button-bold-text"], styles["button-purple-style"]].join(' ')} /> 
                </div>
                
            </div>
        );
    };
}

export default TopBarMenu;