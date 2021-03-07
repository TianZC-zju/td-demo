import React from 'react';
import './App.css';
// import SiderDemo from './stu/ActivityManagement'
import TrainingInstPublic from './trainingInst/TrainingInstPublic'
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
                <Route  path="/personInformation"><TrainingInstPublic/></Route>
            </Switch>

    </Router>
);

export default App;