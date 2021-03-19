import React from 'react';
import "./Header.css"
import {Menu} from 'antd'
import SuperIcon from './iconfront'
import {
    Link, useHistory
} from "react-router-dom"
const Header=()=>{
    let history = useHistory()
    const gotoPage=(e)=>{
        if(e.key === "1"){
            history.push({pathname:"/HomePage"})
            history.go(0)
        }
    }
    return(
        <div id="header">
            <div className="logo">区块链培训平台</div>
            <div className="listAll">
                <Menu mode="horizontal" theme="dark" onClick={(e)=>gotoPage(e)}>
                    <Menu.Item style={{fontSize:"1.1rem"}} key={1} >
                        <SuperIcon type="icon-shouye" />
                        首页
                    </Menu.Item>
                    <Menu.Item style={{fontSize:"1.1rem"}} key={2}>
                        <SuperIcon type="icon-about" />
                        关于
                    </Menu.Item>
                    <Menu.Item style={{fontSize:"1.1rem"}} key={3}>
                        <SuperIcon type="icon-qita" />
                        其他
                    </Menu.Item>
                </Menu>
            </div>
            <Link to="/stu/1">
                <div className="personInformation">
                        <SuperIcon type="icon-wodedianji" width="30px"/>
                        <div className="personHub">个人中心</div>
                </div>
            </Link>
        </div>
    )
}
export  default Header
