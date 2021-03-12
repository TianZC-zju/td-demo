import {Route, Switch} from "react-router-dom"
import React from "react"
import ActivityList from "./activity/ActivityList"
import CertificateList from "./certificate/CertificateList"
const MyRoute = ()=>{

    return(
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Switch>
                <Route path="/CA/activity"><ActivityList/></Route>
                <Route path="/CA/certificate"><CertificateList/></Route>
            </Switch>
        </div>
    )
}
export default MyRoute