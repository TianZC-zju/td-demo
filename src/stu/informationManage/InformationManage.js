import NameIndex from "./NameIndex"
import {Input,Image, Button, Radio } from "antd"
import {useEffect, useState} from "react"
import "./InformationManage.css"
import moment from 'moment';
import { DatePicker, Space, message } from 'antd';
import axios from "axios"
import API from "../../config/apiUrl"
const { RangePicker } = DatePicker;


const dateFormat = 'YYYY/MM/DD';


const InformationManage = ()=>{
    const [id, setid] =useState(1)
    const [name, setname] =useState("")
    const [phone, setphone] =useState("")
    const [introduction, setintroduction] =useState("")
    const [gender, setgender] =useState(1)
    const [avatar, setavatar] =useState("")
    const changeInput =(e,setF)=>{
        setF(e.target.value)
    }
    const submitInf =()=>{
        axios.post(API.stuApi.updateStuInfo,{
            id,name,phone,avatar,
            introduction, gender,
        }).then(res=>{
            if(res.data.updateSuccess === true){
                message.success("修改成功")
            }else{
                message.error("修改失败")
            }
        }).catch(er=>{
            console.log(er)
            message.error("修改失败")
        })
    }

    useEffect(()=>{
        axios.get(API.stuApi.getStuInfoById+"1").then(res=>{
            setavatar(res.data.data[0].avatar)
            setgender(res.data.data[0].gender)
            setname(res.data.data[0].name)
            setphone(res.data.data[0].phone)
            setintroduction(res.data.data[0].introduction)
            setid(res.data.data[0].id)
        })
    },[])
    return(
        <div className="information">
            <Image src={avatar} style={{width:"200px"}}/>

            <div className="name">
                <label >姓名:</label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={name}
                    placeholder={name}
                    onChange={(e)=>changeInput(e,setname)}
                />
            </div>
            <div className="phoneNumber">
                <label >手机: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={phone}
                    placeholder={phone}
                    onChange={(e)=>changeInput(e,setphone)}
                />
            </div>
            <div className="gender">
                <label >性别: </label>
                <Radio.Group
                    onChange={(e)=>changeInput(e,setgender)}
                    value={gender}
                    style={{width:"200px"}}
                >
                    <Radio value={0}>女</Radio>
                    <Radio value={1}>男</Radio>
                </Radio.Group>

            </div>
            <div className="birthday">
                <label >生日: </label>
                <DatePicker
                    defaultValue={moment('2015/01/01', dateFormat)}
                    format={dateFormat}
                    style={{width:"200px"}}
                />

            </div>
            <div className="introduction">
                <label >简介: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={introduction}
                    placeholder={introduction}
                    onChange={(e)=>changeInput(e,setintroduction)}
                />
            </div>
            <Button type="primary" onClick={()=>submitInf()}>确定</Button>
        </div>
    )
}
export default InformationManage