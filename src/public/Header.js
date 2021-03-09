import React from 'react';
import "./Header.css"
import {Menu} from 'antd'
import SuperIcon from './iconfront'
import {
    Link
} from "react-router-dom";
const Header=()=>{

    return(
        <div id="header">
            <div className="logo">区块链培训平台</div>
            <div className="listAll">
                <Menu mode="horizontal" theme="dark">
                    <Menu.Item style={{fontSize:"1.1rem"}}>
                        <SuperIcon type="icon-shouye" />
                        <Link to="/">首页</Link>
                    </Menu.Item>
                    <Menu.Item style={{fontSize:"1.1rem"}}>
                        <SuperIcon type="icon-about" />
                        关于
                    </Menu.Item>
                    <Menu.Item style={{fontSize:"1.1rem"}}>
                        <SuperIcon type="icon-qita" />
                        其他
                    </Menu.Item>
                </Menu>
            </div>
            <Link to="/stu">
                <div className="personInformation">
                        <SuperIcon type="icon-wodedianji" width="30px"/>
                        <div className="personHub">个人中心</div>
                </div>
            </Link>
        </div>
    )
}
export  default Header
