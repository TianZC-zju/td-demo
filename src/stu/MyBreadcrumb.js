import {Breadcrumb} from "antd"
import {Route, Switch} from "react-router-dom"
import React from "react"

const MyBreadcrumb=()=>{
    return(
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>用户</Breadcrumb.Item>
            <Switch>
                <Route path="/stu/informationManage"><Breadcrumb.Item>个人信息</Breadcrumb.Item></Route>
                <Route path="/stu/ActivityManagement"><Breadcrumb.Item>活动管理</Breadcrumb.Item></Route>
                <Route path="/stu/certificate"><Breadcrumb.Item>我的证书</Breadcrumb.Item></Route>
            </Switch>
        </Breadcrumb>
    )
}
export default MyBreadcrumb