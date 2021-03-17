import React, {useState}from 'react';
import 'antd/dist/antd.css'
import {Card, Input, Button, Spin, message, Row, Col} from 'antd'
import {UserAddOutlined, KeyOutlined, PropertySafetyFilled } from '@ant-design/icons'
import './Login.css'
import axios from 'axios'
import API from "../config/apiUrl"
import { useHistory } from "react-router-dom";

function Login(props){
    let history = useHistory()
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    let pydPost = `http://pydaaa.e1.luyouxia.net:28026/customer/test/testLogin`
    let ldtPost = `http://3699174jk6.wicp.vip:12535/certificate/login`
    let zyPost = `http://lyxkaka.e1.luyouxia.net:29133/login`
    let zjxPost = `http://zjxzjx.e1.luyouxia.net:29144/sys/login?userName=zs&pwd=123`
    const checkLogin=()=>{
        setIsLoading(true)
        if(!username){
            message.error("用户名不能为空")
            setTimeout(()=>{setIsLoading(false)}, 500)
            return false
        }else if(!password){
            message.error("密码不能为空")
            setTimeout(()=>{setIsLoading(false)}, 500)
            return false
        }
        let dataProps = {
            'username': username,
            'password':password
        }
        axios({
            method:'post',
            url:API.fakeLogin.postLogin,
            data:dataProps,
            withCredentials:true //查看资料才知道跨域请求要想带上cookie，必须要在ajax请求里加上xhrFields: {withCredentials: true
        }).then(
            res=>{
                setIsLoading(false)
                const userInfo = res.data.data.userInfo
                if(userInfo !== null ){
                    localStorage.setItem('openId', res.data.openId)
                    history.push({ pathname: `/${userInfo.type}/${userInfo.userId}`})
                }else{
                    //console.log()
                    message.error('用户名密码错误')
                }
            }
        )

        setTimeout(()=>{
            setIsLoading(false)
        }, 1000)
    }
    const register=()=>{
        history.push({ pathname: '/Register' })
    }
    return (
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="区块链培训平台" bordered={true} style={{width:400}}>
                    <Input
                        id="username"
                        size="large"
                        placeholder="Enter your username"
                        prefix={<UserAddOutlined style={{color:'rgb(0, 0, 0, .25)'}}/>}
                        onChange={(e)=>{setusername(e.target.value)}}
                    />
                    <br/><br/>
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        prefix={<KeyOutlined style={{color:'rgb(0, 0, 0, .25)'}}/>}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <br/><br/>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={12}>

                        <Button type="primary" size="middle" block onClick={register} > 注册 </Button>
                        </Col>
                        <Col className="gutter-row" span={12}>
                        <Button type="primary" size="middle" block onClick={checkLogin} > 登陆 </Button>
                        </Col>
                    </Row>

                </Card>
            </Spin>

        </div>
    )
}

export default Login