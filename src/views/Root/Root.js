import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from "../../components/Navigation/Navigation";
import AboutView from "../AboutView/AboutView";
import ContactView from "../ContactView/ContactView";
import HomeView from "../HomeView/HomeView";

const Root = () => (
    <BrowserRouter>
        <>
            <Navigation/>
            <h1>Hello React.js</h1>
            <Switch>
                <Route exact path='/' component={HomeView} />
                <Route path='/about' component={AboutView} />
                <Route path='/contact' component={ContactView} />
            </Switch>
        </>
    </BrowserRouter>
)

export default Root;
