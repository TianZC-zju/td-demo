import React from 'react';
import './App.css';

import InstIndex from './trainingInst/index'
import StuIndex from "./stu/index"
import Header from "./public/Header"
import HomePage from "./stu/activityManage/HomePage"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () => (
    <Router className="App">
            <Header />
            <Switch>
                <Route exact path="/"><HomePage/></Route>
                <Route path="/ins"><InstIndex/></Route>
                <Route  path="/stu"><StuIndex/></Route>
            </Switch>

    </Router>
);

export default App;