import React from 'react';
import './assets/scss/App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WelcomePage from "./page/WelcomePage/WelcomePage";
import MainPage from "./page/MainPage/MainPage";
import Header from "./Components/Root/Header/Header";
import UserDashboard from "./page/UserDashboard/UserDashboard";
import SingIn from "./page/Sing_in/SingIn";
import SingUp from "./page/SIng_up/SingUp";

class App extends React.Component<any, {checkScroll: number}> {
    constructor(props: any) {
        super(props);
        this.state = {
            checkScroll: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', ()=>this.setState({checkScroll: window.scrollY}));
    }

    render() {
        return (
            <BrowserRouter>
                <Header checkScrollTop={this.state.checkScroll}/>
                <section className="App">
                    <Routes>
                        <Route path={'/'} element={<WelcomePage/>}/>
                        <Route path={'/main_page'} element={<MainPage/>}/>
                        <Route path={"/edit_profile"} element={<UserDashboard/>}/>
                        <Route path={"/sing_in"} element={<SingIn/>}/>
                        <Route path={"/sing_up"} element={<SingUp/>}/>
                    </Routes>
                </section>
            </BrowserRouter>
        );
    }
}

export default App;
