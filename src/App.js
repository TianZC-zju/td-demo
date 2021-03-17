import React from 'react';
import './App.css';
import InstIndex from './trainingInst/index'
import StuIndex from "./stu/index"
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
                <Route path="/ins/:userId"><InstIndex/></Route>
                <Route exact path="/HomePage"><HomePage/></Route>
                <Route  path="/stu/:userId"><StuIndex/></Route>
                <Route  path="/ActivityDetail/:ActivityId/:userId"><ActivityDetail/></Route>
                <Route  path="/CA/:userId"><CAIndex/></Route>
                <Route  path="/platform/:userId"><PlatformIndex/></Route>
            </Switch>

        </Router>
    );
}


export default App;