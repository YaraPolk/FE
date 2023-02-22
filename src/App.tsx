import React from 'react';
import './assets/scss/App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import WelcomePage from "./page/WelcomePage/WelcomePage";
import MainPage from "./page/MainPage/MainPage";
import Header from "./Components/Root/Header/Header";

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
                    </Routes>
                </section>
            </BrowserRouter>
        );
    }
}

export default App;
