import NameIndex from "./NameIndex"
import {useState} from "react"
import {Button, Image, Input} from "antd"
import "./NewActivity.css"

const NewActivity=()=>{
    const {logo,name, introduction,detail} =NameIndex
    const dataInit ={
        [logo]:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2f7a5de2bb24de7ba7ef36275542d5f~tplv-k3u1fbpfcp-watermark.image",
        [name]:"火箭制造",
        [introduction]:"3个月教你快速造火箭.  课程内容涵盖面广，工程实践性强，具有理论和实践紧密结合的特点",
        [detail]:"3个月教你快速造火箭.  课程内容涵盖面广，工程实践性强，具有理论和实践紧密结合的特点，着重培养学生分析问题和解决问题的能力。3个月教你快速造火箭.  课程内容涵盖面广，工程实践性强，具有理论和实践紧密结合的特点，着重培养学生分析问题和解决问题的能力。"
    }
    const [Information, setInformation]=useState(dataInit)
    const changeInput =(e,key)=>{
        setInformation(state=>({...state,[key]:e.target.defaultValue}))
    }
    return(
        <div className="NewActivity">

            <div className="name">
                <label >活动名称: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[name]}
                    onChange={(e)=>changeInput(e,name)}
                />
            </div>

            <div className="introduction">
                <label >活动简介: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[introduction]}
                    onChange={(e)=>changeInput(e,introduction)}
                />
            </div>

            <div className="detail">
                <label >活动详情: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[detail]}
                    onChange={(e)=>changeInput(e,introduction)}
                />
            </div>
             <div className="logo">
                <label >活动海报: </label>
                <Button type="primary">点击上传</Button>
            </div>


            <Button type="primary">确定</Button>
        </div>
    )
}

export default NewActivity