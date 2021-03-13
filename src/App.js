import React from 'react';
import './App.css';
import { withRouter } from 'react-router';
import InstIndex from './trainingInst/index'
import StuIndex from "./stu/index"
import Header from "./public/Header"
import HomePage from "./stu/activityManage/HomePage"
import ActivityDetail from "./public/ActivityDetail"
import CAIndex from "./CA/index"
import PlatformIndex from "./platform/index"
import Login from "./loginAndRegister/Login"
import Register from "./loginAndRegister/Register"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const App = () =>{

    return (
        <Router className="App">
            <Switch>
                <Route exact path="/"><Login/></Route>
                <Route exact path="/Register"><Register/></Route>
                <Route path="/ins"><InstIndex/></Route>
                <Route exact path="/HomePage"><HomePage/></Route>
                <Route  path="/stu"><StuIndex/></Route>
                <Route  path="/ActivityDetail"><ActivityDetail/></Route>
                <Route  path="/CA"><CAIndex/></Route>
                <Route  path="/platform"><PlatformIndex/></Route>
            </Switch>

        </Router>
    );
}


export default withRouter(App);