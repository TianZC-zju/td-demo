import React from 'react';
import "./Header.css"
import {Menu} from 'antd'
import SuperIcon from './iconfront'

const Header=()=>{

    return(
        <div id="header">
            <div className="logo">区块链培训平台</div>
            <div className="listAll">
                <Menu mode="horizontal" theme="dark">
                    <Menu.Item style={{fontSize:"1.1rem"}}>
                        <SuperIcon type="icon-shouye" />
                        首页
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
            <div className="personInformation">
                <SuperIcon type="icon-wodedianji" width="30px"/>
                <div className="personHub">个人中心</div>
            </div>
        </div>
    )
}
export  default Header
