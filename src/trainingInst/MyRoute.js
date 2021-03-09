import {Route, Switch} from "react-router-dom"
import ActivityList from "./activityManage/ActivityList"
import CourseList from "./courseManage/CourseList"
import React from "react"

const MyRoute = ()=>{

    return(
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Switch>
                <Route path="/ins/ActivityManagement"><ActivityList/></Route>
                <Route path="/ins/CourseManagement"><CourseList/></Route>
            </Switch>


        </div>
    )
}
export default MyRoute