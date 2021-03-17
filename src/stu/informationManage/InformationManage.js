import NameIndex from "./NameIndex"
import {Input,Image, Button} from "antd"
import {useState} from "react"
import "./InformationManage.css"
import moment from 'moment';
import { DatePicker, Space, message } from 'antd';
const { RangePicker } = DatePicker;


const dateFormat = 'YYYY/MM/DD';


const InformationManage = ()=>{
    const {logo,name, phoneNumber, wechat, birthday, introduction} =NameIndex
    const dataInit ={
        [logo]:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2f7a5de2bb24de7ba7ef36275542d5f~tplv-k3u1fbpfcp-watermark.image",
        [phoneNumber]:"13003069685",
        [name]:"田一",
        [wechat]:"galen",
        [birthday]:"2000-10-31",
        [introduction]:"正直和努力是我做人的原则；沉着和冷静是我遇事的态度；爱好广泛使我非常充实；众多的朋友使我倍感富有！我很强的事业心和责任感使我能够面对任何困难和挑战。"
    }
    const [Information, setInformation]=useState(dataInit)
    const changeInput =(e,key)=>{
        setInformation(state=>({...state,[key]:e.target.defaultValue}))
    }
    const submitInf =()=>{
        const nameToMassage={
            [logo]:"logo",
            [phoneNumber]:"手机号码",
            [name]:"姓名",
            [wechat]:"微信号",
            [birthday]:"生日",
            [introduction]:"个人简介"
        }
        for(let key in Information){
            if(Information[key] === ''){
                message.error(`${nameToMassage[key]} 不能为空!`)
                return
            }
        }
        console.log(Information)
        message.success("修改成功")
    }
    const changeDate=(e, key)=>{
        e&&setInformation(state=>({...state,[key]:e.format(dateFormat)}))
    }
    return(
        <div className="information">
            <Image src={Information[logo]}/>

            <div className="name">
                <label >姓名: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[name]}
                    onChange={(e)=>changeInput(e,name)}
                />
            </div>
            <div className="phoneNumber">
                <label >手机: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[phoneNumber]}
                    onChange={(e)=>changeInput(e,phoneNumber)}
                />
            </div>
            <div className="wechat">
                <label >微信: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[wechat]}
                    onChange={(e)=>changeInput(e,wechat)}
                />
            </div>
            <div className="birthday">
                <label >生日: </label>
                <DatePicker
                    defaultValue={moment('2015/01/01', dateFormat)}
                    format={dateFormat}
                    style={{width:"200px"}}
                    onChange={e=>changeDate(e,birthday)}
                />

            </div>
            <div className="introduction">
                <label >简介: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[introduction]}
                    onChange={(e)=>changeInput(e,introduction)}
                />
            </div>
            <Button type="primary" onClick={()=>submitInf()}>确定</Button>
        </div>
    )
}
export default InformationManage