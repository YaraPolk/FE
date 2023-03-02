import React from "react";
import style from "./SingUp.module.scss";

const SingUp = () => {
    return (
        <>
            <section className={style.sing_up}>
                <div className={"sing_up__title"}>
                    <h3>Here you can create a new account</h3>
                </div>
                <div className={style.sing_up__form}>
                    <form method={"POST"} action={""}>
                        <label htmlFor={"nickName"}>Nickname</label>
                        <input type="text" name={"nickName"} id={"nickName"} placeholder={"Enter your Nickname"}/>
                        <label htmlFor={"email"}>Email</label>
                        <input type="email" name={"email"} id={"email"} placeholder={"Enter your Email"}/>
                        <label htmlFor={"password"}>Password</label>
                        <input type="text" name={"password"} id={"password"} placeholder={"Enter your Password"}/>
                        <label htmlFor={"confirm_password"}>Confirm Password</label>
                        <input type="text" name={"confirm_password"} id={"confirm_password"} placeholder={"Confirm your Password"}/>
                        <button type={"submit"}>Create account</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default SingUp;