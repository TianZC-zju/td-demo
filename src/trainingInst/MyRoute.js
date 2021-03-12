import {Route, Switch} from "react-router-dom"
import ActivityList from "./activityManage/ActivityList"
import CourseList from "./courseManage/CourseList"
import React from "react"
import NewActivity from "./activityManage/NewActivity"
import NewCourse from "./courseManage/NewCourse"
import StudentList from "./studentMange/StudentList"
import InformationManage from "./informationManage/InformationManage"

const MyRoute = ()=>{

    return(
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Switch>
                <Route path="/ins/ActivityManagement"><ActivityList/></Route>
                <Route path="/ins/NewActivity"><NewActivity/></Route>
                <Route path="/ins/CourseManagement"><CourseList/></Route>
                <Route path="/ins/NewCourse"><NewCourse/></Route>
                <Route path="/ins/StudentManage"><StudentList/></Route>
                <Route path="/ins/InformationManage"><InformationManage/></Route>
            </Switch>


        </div>
    )
}
export default MyRoute