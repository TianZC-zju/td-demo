import {Breadcrumb} from "antd"
import {Route, Switch} from "react-router-dom"
import React from "react"
import MenuList from "./MenuList"

const MyBreadcrumb=()=>{
    return(
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>认证机构管理</Breadcrumb.Item>
            <Switch>
                {MenuList.map(it=>(
                    <Route path={it.linkTo}><Breadcrumb.Item>{it.itemName}</Breadcrumb.Item></Route>
                ))}
            </Switch>
        </Breadcrumb>
    )
}
export default MyBreadcrumb