import React, {useState,useEffect}from 'react';

import {Card, Input, Button, Spin, message, Row, Col,Select} from 'antd'
import {UserAddOutlined, KeyOutlined, PropertySafetyFilled } from '@ant-design/icons'
import './Login.css'
import axios from 'axios'
const { Option } = Select;
function Register(props){
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const [eName, setEName] = useState('')
    const [typeid, setTypeid] = useState(0)

    const selectTypeId=(value)=>{
        setTypeid(value)

    }
    const register=()=>{
        if(!username){
            message.error('用户名不能为空')
            return false

        }else if(!password){
            message.error('密码不能为空')
            return false
        }else if(!eName){
            message.error('企业名称不能为空')
            return false
        }else if(!typeid){
            message.error('请选择企业类型')
            return false
        }
        let dataProps = {
            'username': username,
            'password':password,
            'typeid':typeid-0,
            'name':eName
        }
        axios({
            method:'post',
            url:"www.baidu.com",
            data:dataProps,
            withCredentials:true //查看资料才知道跨域请求要想带上cookie，必须要在ajax请求里加上xhrFields: {withCredentials: true
        }).then(
            res=>{
                //console.log("resRegister: ",res)

                if(res.data.isSuccess){
                    message.success('用户注册成功')
                    props.history.push({ pathname: '/' })

                }else if(res.data.haveAUser){
                    message.error('该用户名已经被注册')
                }else{
                    message.error("用户注册失败")
                    console.log("resRegister: ",res)
                }
            }
        )
    }

    return (
        <div className="login-div">
            <Spin tip="Loading..." spinning={false} >
                <Card title="用户注册" bordered={true} style={{width:400}}>
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
                    <Input
                        size="large"
                        placeholder="请输入企业名称"
                        onChange={(e)=>setEName(e.target.value)}
                    />
                    <br/><br/>
                    <Row gutter={16}>
                        <Col span={24} >
                            <Select placeholder="请选择企业类型" size="large" style={{ width: 350 }} onChange={selectTypeId}>
                                <Option value="1">供应商</Option>
                                <Option value="2">核心企业</Option>
                                <Option value="3">银行</Option>
                            </Select>
                            <br/><br/>
                        </Col>
                        <Col className="gutter-row" span={24}>

                        <Button type="primary" size="middle" block onClick={register} > 确认提交 </Button>
                        </Col>

                    </Row>

                </Card>
            </Spin>

        </div>
    )
}

export default Register