import React, {useState} from 'react'
import "./Header.css"
import {Menu, message} from 'antd'
import SuperIcon from './iconfront'
import {
    Link, useHistory
} from "react-router-dom"
import Modal from "antd/es/modal"
import Mentions from "antd/es/mentions"
import axios from "axios"
import API from "../config/apiUrl"
import generateAPIDoc from "../config/generateAPIDoc";
const Header=()=>{
    const [isModalVisible, setisModalVisible] = useState(false)
    const [chainInfo, setchainInfo] = useState("")
    let history = useHistory()
    const gotoPage=(e)=>{
        if(e.key === "1"){
            history.push({pathname:"/HomePage"})
            history.go(0)
        }else if(e.key === "3"){
            setisModalVisible(true)
        }
    }
    const handleOk =()=>{
        handleUpload()
        setisModalVisible(false)
    }
    const handleCancel =()=>{
        setisModalVisible(false)
    }
    const changeChainInfo = (e)=>{
        setchainInfo(e)
    }
    const handleUpload = () => {

        const formData = new FormData();
        formData.append("file", file1)
        axios.post(API.CaApi.verifyCA,formData,{headers:{'Content-Type': 'multipart/form-data',"seq":chainInfo}}).then(
            res=>{
                generateAPIDoc("verifyCA",API.CaApi.verifyCA,"post", formData,res.data)
                if(res.data.data === true){
                    message.success("验证成功, 你的证书是真实可信的")
                }else{
                    message.error("你的证书有问题")
                }
            }
        )
    };
    const changefile = (e)=>{
        setfile1(e.target.files[0])
    }
    const [file1, setfile1] = useState()
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
                        证书验证
                    </Menu.Item>
                </Menu>
            </div>
            <Link to="/stu/1">
                <div className="personInformation">
                        <SuperIcon type="icon-wodedianji" width="30px"/>
                        <div className="personHub">个人中心</div>
                </div>
            </Link>
            <Modal title="证书验证:请上传证书pdf, 同时输入证书编号" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <input type="file" name="file" onChange={(e)=>changefile(e)}></input>
                <Mentions rows={3} placeholder="请在这输入证书序列号:" onChange={(e)=>changeChainInfo(e)}>

                </Mentions>

            </Modal>
        </div>
    )
}
export  default Header
