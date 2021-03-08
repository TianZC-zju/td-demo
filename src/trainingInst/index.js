import React from 'react'

import {BrowserRouter as Router} from "react-router-dom"
import { Layout} from "antd"
import MySiderMenu from "./MyMenu"
import MyBreadcrumb from "./MyBreadcrumb"
import MyRoute from "./MyRoute"
const {  Content, Footer } = Layout;

const Index = ()=>{
    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <MySiderMenu/>
                <Layout className="site-layout">
                    <Content style={{ margin: '0 16px' }}>
                        <MyBreadcrumb />
                        <MyRoute/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Router>
    )
}

export default Index