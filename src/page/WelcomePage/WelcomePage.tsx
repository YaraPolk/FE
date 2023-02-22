import React from "react";
import style from './WelcomePage.module.scss';
class WelcomePage extends React.Component<any, {token: boolean}>{

    token: boolean = false;

    GetContent = () => {
        if (!this.token) {
            return (
                <section className={style.welcome_page}>
                    <div className="welcome-text">
                        <h1>Welcome to Trello</h1>
                        <h2>You need to sign up or sign in in order to continue</h2>
                    </div>
                </section>
            );
        } else {
            window.location.href = "/main_page";
        }
    }

    render() {
        return (this.GetContent());
    }
}

export default WelcomePage;