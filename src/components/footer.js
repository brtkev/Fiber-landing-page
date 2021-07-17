import React from 'react';
import styles from '../styles/footer.module.css';

class Footer extends React.Component{

    render(){

        return(
            <div id={styles['main-container']}>
                <div id={styles['description-container']}>
                    <h3>
                        Fiber
                    </h3>
                    <p>With Fiber, you can setup your own personal portfolio in minutes with dozens of premade, beautiful templates.</p>

                    <p>Made with ♥ in Venezuela</p>
                </div>

                <div id={styles["nav-container"]}>
                    <div className={styles["nav"]}>
                        <h3>Sitemap</h3>
                        <button>Homepage</button>
                        <button id={styles['button']}>Pricing</button>
                        <button>Testimonials</button>
                        <button>Features</button>
                    </div>
                    <div className={styles["nav"]}>
                        <h3>Resources</h3>
                        <button>Support</button>
                        <button>Contact</button>
                        <button>FAQ</button>
                    </div>
                    <div className={styles["nav"]}>
                        <h3>Company</h3>
                        <button>About</button>
                        <button>Customers</button>
                        <button>Blog</button>
                    </div>
                    <div className={styles["nav"]}>
                        <h3>Portfolios</h3>
                        <button className={styles['userName-button']}>Sarah Andrews</button>
                        <button className={styles['userName-button']}>Mathew Higgins</button>
                        <button className={styles['userName-button']}>Janice Dave</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;