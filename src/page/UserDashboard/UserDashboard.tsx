import React from "react";
import style from "./UserDashboard.module.scss";

const UserDashboard = () => {
    return (
        <>
            <section className={style.dashboard}>
                <div className={"dashboard-title"}>
                    <h2>Hello User!</h2>
                    <h3>Here you can change your data</h3>
                </div>
                <div className={style.dashboard_edit_form}>
                    <form method={"POST"} action={""}>
                        <label htmlFor={"nickName"}>Nickname</label>
                        <input type="text" name={"nickName"} id={"nickName"} placeholder={"Enter your Nickname"}/>
                        <label htmlFor={"email"}>Email</label>
                        <input type="email" name={"email"} id={"email"} placeholder={"Enter your Email"}/>
                        <label htmlFor={"password"}>Password</label>
                        <input type="text" name={"password"} id={"password"} placeholder={"Enter your Password"}/>
                        <button type={"submit"}>Save Change</button>
                    </form>
                </div>
                <div className={style.dashboard_delete_user}>
                    <button>Delete your account</button>
                </div>
            </section>
        </>
    );
}

export default UserDashboard;