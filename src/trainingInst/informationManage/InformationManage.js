import NameIndex from "./NameIndex"
import {Input,Image, Button} from "antd"
import {useState} from "react"
import "./InformationManage.css"


const InformationManage = ()=>{
    const {logo, name, introduction} =NameIndex
    const dataInit ={
        [logo]:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2f7a5de2bb24de7ba7ef36275542d5f~tplv-k3u1fbpfcp-watermark.image",
        [name]:"天天培训",
        [introduction]:"专业的培训机构"
    }
    const [Information, setInformation]=useState(dataInit)
    const changeInput =(e,key)=>{
        setInformation(state=>({...state,[key]:e.target.defaultValue}))
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
            <div className="introduction">
                <label >简介: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[introduction]}
                    onChange={(e)=>changeInput(e,introduction)}
                />
            </div>
            <div className="logo">
                <label >logo: </label>
                <Button>点击上传</Button>
            </div>
            <Button type="primary">确定</Button>
        </div>
    )
}
export default InformationManage