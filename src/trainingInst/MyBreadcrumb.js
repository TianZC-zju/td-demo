import {Breadcrumb} from "antd"
import {Route, Switch} from "react-router-dom"
import React from "react"

const MyBreadcrumb=()=>{
    return(
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>培训机构管理</Breadcrumb.Item>
            <Switch>
                <Route path="/ins/ActivityManagement"><Breadcrumb.Item>活动管理</Breadcrumb.Item></Route>
                <Route path="/ins/CourseManagement"><Breadcrumb.Item>课程管理</Breadcrumb.Item></Route>
                <Route path="/ins/NewActivity"><Breadcrumb.Item>创建活动</Breadcrumb.Item></Route>
                <Route path="/ins/StudentManage"><Breadcrumb.Item>学员管理</Breadcrumb.Item></Route>
                <Route path="/ins/InformationManage"><Breadcrumb.Item>信息管理</Breadcrumb.Item></Route>
            </Switch>
        </Breadcrumb>
    )
}
export default MyBreadcrumb