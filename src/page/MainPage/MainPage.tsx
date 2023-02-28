import React from "react";
import style from "./MainPage.module.scss";

class MainPage extends React.Component{
    render() {
        return (
            <section className={style.homePage}>
                <h1>Welcome to your Board List</h1>
                <div className="boardList">
                    <ul>
                    </ul>
                </div>
            </section>
        );
    }
}

export default MainPage;