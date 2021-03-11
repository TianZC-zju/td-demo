import {Route, Switch} from "react-router-dom"
import ActivityList from "./activityManage/ActivityList"
import InformationManage from "./informationManage/InformationManage"
import CertificateList from "./certificate/CertificateList"
import React from "react"

const MyRoute = ()=>{

    return(
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Switch>
                <Route path="/stu/ActivityManagement"><ActivityList/></Route>
                <Route path="/stu/informationManage"><InformationManage/></Route>
                <Route path="/stu/certificate"><CertificateList/></Route>
            </Switch>


        </div>
    )
}
export default MyRoute