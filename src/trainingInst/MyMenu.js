import TrainingInstMenu from "./MenuList"
import { Menu} from "antd"
import SuperIcon from "../public/iconfront"
import {Link} from "react-router-dom"
import React, {createContext, useContext, useState} from "react"
import Sider from "antd/es/layout/Sider"
import Context from "./studentMange/MyContext"

const MyMenu = ()=>{
    const [collapsed, setCollapsed] = useState(false)
    const onCollapse = e => {
        setCollapsed( e );
    };

    const {state, dispatch} = useContext(Context)
    return(
        <Sider collapsible collapsed={collapsed} onCollapse={e=>onCollapse(e)} >
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" >
                {TrainingInstMenu.map(item=><Menu.Item
                    key={item.key}
                    icon={<SuperIcon type={item.iconType}/>}>
                    <Link to={item.linkTo+`/${state.insId}`}>{item.itemName}</Link>
                </Menu.Item>)}
            </Menu>
        </Sider>

    )
}

export default MyMenu