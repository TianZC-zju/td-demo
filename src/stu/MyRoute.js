import {Route, Switch} from "react-router-dom"
import ActivityList from "./activityManage/ActivityList"
import InformationManage from "./informationManage/InformationManage"
import CertificateList from "./certificate/CertificateList"
import CertDetail from "./certificate/CertDetail"
import React from "react"

const MyRoute = ()=>{

    return(
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Switch>

                <Route path="/stu/ActivityManagement/"><ActivityList/></Route>
                <Route path="/stu/informationManage/"><InformationManage/></Route>
                <Route exact path="/stu/certificate"><CertificateList/></Route>
                <Route path="/stu/certificate/detail"><CertDetail/></Route>

                <Route path="/stu/:userId"><InformationManage/></Route>
            </Switch>
        </div>
    )
}
export default MyRoute