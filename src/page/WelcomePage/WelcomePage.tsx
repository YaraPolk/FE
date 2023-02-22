import React from "react";
import style from './WelcomePage.module.scss';
class WelcomePage extends React.Component{
    render() {
        return (
            <section className={style.welcome_page}>
                <div className="welcome-text">
                    <h1>Welcome to Trello</h1>
                    <h2>You need to sign up or sign in in order to continue</h2>
                </div>
            </section>
        );
    }
}

export default WelcomePage;