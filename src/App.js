import React from 'react';
import './App.css';
import ActivityManagement from './stu/ActivityManagement'
import InstIndex from './trainingInst/index'
import Header from "./public/Header"
import HomePage from "./stu/HomePage"
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
                <Route  path="/personInformation"><InstIndex/></Route>
            </Switch>

    </Router>
);

export default App;