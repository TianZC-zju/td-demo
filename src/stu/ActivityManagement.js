import React from 'react';
import "../App.css"
import { Layout, Menu, Breadcrumb } from 'antd';

import SuperIcon from "../public/iconfront"
import StuList from './StuList2'

const {  Content, Footer, Sider } = Layout;


class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<SuperIcon type="icon-caidaniconwodehui"/>}>
                                个人信息
                            </Menu.Item>
                            <Menu.Item key="2" icon={<SuperIcon type="icon-huodong"/>}>
                                活动管理
                            </Menu.Item>
                            <Menu.Item key="3" icon={<SuperIcon type="icon-zhengshu"/>}>
                                我的证书
                            </Menu.Item>

                        </Menu>
                    </Sider>
                    <Layout className="site-layout">

                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>用户</Breadcrumb.Item>
                                <Breadcrumb.Item>活动管理</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                               <StuList/>

                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>



            </>

        );
    }
}

export default SiderDemo