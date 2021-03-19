import NameIndex from "./NameIndex"
import {Input, Button, message} from "antd"
import {useState} from "react"
import "./InformationManage.css"
import UploadLogo from "../../public/UploadLogo"

const InformationManage = ()=>{
    const {logo, name, introduction} =NameIndex
    const dataInit ={
        [logo]:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2f7a5de2bb24de7ba7ef36275542d5f~tplv-k3u1fbpfcp-watermark.image",
        [name]:"天天培训",
        [introduction]:"专业的培训机构"
    }
    const [Information, setInformation]=useState(dataInit)

    const dataInit2={
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [{
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },]
    }


    const changeInput =(e,key)=>{
        setInformation(state=>({...state,[key]:e.target.defaultValue}))
    }
    const submitInf =()=>{
        const nameToMassage={
            [name]:"活动名称",
            [introduction]:"活动简介",
        }
        for(let key in Information){
            if(Information[key] === ''){
                message.error(`${nameToMassage[key]} 不能为空!`)
                return
            }
        }
        message.success("修改成功")
    }
    return(
        <div className="information">
            <div className="logo">
                <UploadLogo/>

            </div>

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

            <Button type="primary" onClick={()=>submitInf()}>确定</Button>
        </div>
    )
}
export default InformationManage