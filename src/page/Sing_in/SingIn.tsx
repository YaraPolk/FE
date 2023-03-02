import React from "react";
import style from "./SingIn.module.scss";

const SingIn = () => {
    return (
        <>
            <section className={style.sing_in}>
                <div className={"sing_in__title"}>
                    <h3>You need to sign in to continue</h3>
                </div>
                <div className={style.sing_in__form}>
                    <form method={"POST"} action={""}>
                        <label htmlFor={"login"}>Nickname / Email</label>
                        <input type="text" name={"login"} id={"login"} placeholder={"Enter your Nickname or Email"}/>
                        <label htmlFor={"password"}>Password</label>
                        <input type="text" name={"password"} id={"password"} placeholder={"Enter your Password"}/>
                        <button type={"submit"}>Sing in</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default SingIn;