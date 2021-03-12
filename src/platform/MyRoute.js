import {Route, Switch} from "react-router-dom"
import StudentList from "./studentMange/StudentList"
import NewIns from "./insManage/NewIns"
import React from "react"
import NewCA from "./insManage/NewCA"


const MyRoute = ()=>{

    return(
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Switch>
                <Route path="/platform/stuManage"><StudentList/></Route>
                <Route path="/platform/insManage"><StudentList/></Route>
                <Route path="/platform/addIns"><NewIns/></Route>
                <Route path="/platform/addCA"><NewCA/></Route>

            </Switch>


        </div>
    )
}
export default MyRoute