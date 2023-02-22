import React from "react";
import './WelcomePage.scss';
class WelcomePage extends React.Component{
    render() {
        return (
            <section className="welcome-page">
                <div className="welcome-text">
                    <h1>Welcome to Trello</h1>
                    <h2>You need to sign up or sign in in order to continue</h2>
                </div>
            </section>
        );
    }
}

export default WelcomePage;