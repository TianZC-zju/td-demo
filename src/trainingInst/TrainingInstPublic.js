import React from 'react';
import "../App.css"
import { Layout, Menu, Breadcrumb } from 'antd';

import SuperIcon from "../public/iconfront"
import CourseList from "./CourseList"
import TIActivityManagement from './TrainingInstActivityManagement'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const {  Content, Footer, Sider } = Layout;


class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        const switchItem =e=>{
            console.log(e)
        }
        const { collapsed } = this.state;
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse} >
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={e=>{switchItem(e)}}>
                            <Menu.Item key="1" icon={<SuperIcon type="icon-caidaniconwodehui"/>}>
                                创建活动
                            </Menu.Item>
                            <Menu.Item key="2" icon={<SuperIcon type="icon-huodong"/>}>
                                <Link to="/ActivityManagement">活动管理</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<SuperIcon type="icon-zhengshu"/>}>
                                创建课程
                            </Menu.Item>
                            <Menu.Item key="4" icon={<SuperIcon type="icon-caidaniconwodehui"/>}>
                                <Link to="/CourseManagement">课程管理</Link>
                            </Menu.Item>
                            <Menu.Item key="5" icon={<SuperIcon type="icon-huodong"/>}>
                                学员管理
                            </Menu.Item>
                            <Menu.Item key="6" icon={<SuperIcon type="icon-zhengshu"/>}>
                                机构信息维护
                            </Menu.Item>

                        </Menu>
                    </Sider>
                    <Layout className="site-layout">

                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>培训机构管理</Breadcrumb.Item>
                                <Breadcrumb.Item>课程管理</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
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
}

export default SiderDemo