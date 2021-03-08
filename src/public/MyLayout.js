import React, {useState} from 'react'

import { Layout, Menu, Breadcrumb } from 'antd';

import SuperIcon from "./iconfront"

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
const {  Content, Footer, Sider } = Layout;


const  MyLayout =(props)=>  {

    const [collapsed, setCollapsed] = useState(false)


    const onCollapse = e => {
        setCollapsed( e );
    };

    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={e=>onCollapse(e)} >
                    <div className="logo" />
                    {props.myMenu}
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                        {props.MenuList.map(item=><Menu.Item
                            key={item.key}
                            icon={<SuperIcon type={item.iconType}/>}>
                            <Link to={item.linkTo}>{item.itemName}</Link>
                        </Menu.Item>)}
                    </Menu>
                </Sider>
                <Layout className="site-layout">

                    <Content style={{ margin: '0 16px' }}>
                        {props.myBreadCrumbList}
                        {props.BreadCrumbList.map(item=>(
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Switch>
                                    <Route path="/ActivityManagement"><Breadcrumb.Item>活动管理</Breadcrumb.Item></Route>
                                    <Route path="/CourseManagement"><Breadcrumb.Item>课程管理</Breadcrumb.Item></Route>
                                </Switch>
                            </Breadcrumb>
                        ))}
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item>培训机构管理</Breadcrumb.Item>
                            <Switch>
                                <Route path="/ActivityManagement"><Breadcrumb.Item>活动管理</Breadcrumb.Item></Route>
                                <Route path="/CourseManagement"><Breadcrumb.Item>课程管理</Breadcrumb.Item></Route>
                            </Switch>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {props.myTable}
                            <Switch>
                                <Route path="/ActivityManagement"><TIActivityManagement/></Route>
                                <Route path="/CourseManagement"><CourseList/></Route>
                            </Switch>


                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>



        </Router>

    );

}

export default MyLayout