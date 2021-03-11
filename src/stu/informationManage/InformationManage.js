import NameIndex from "./NameIndex"
import {Input,Image, Button} from "antd"
import {useState} from "react"
import "./InformationManage.css"


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
    return(
        <div className="information">
            <Image src={Information[logo]}></Image>

            <div className="name">
                <label >姓名: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[name]}
                    onChange={(e)=>changeInput(e,name)}
                ></Input>
            </div>
            <div className="phoneNumber">
                <label >手机: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[phoneNumber]}
                    onChange={(e)=>changeInput(e,phoneNumber)}
                ></Input>
            </div>
            <div className="wechat">
                <label >微信: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[wechat]}
                    onChange={(e)=>changeInput(e,wechat)}
                ></Input>
            </div>
            <div className="birthday">
                <label >生日: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[birthday]}
                    onChange={(e)=>changeInput(e,birthday)}
                ></Input>
            </div>
            <div className="introduction">
                <label >简介: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[introduction]}
                    onChange={(e)=>changeInput(e,introduction)}
                ></Input>
            </div>
            <Button type="primary">确定</Button>
        </div>
    )
}
export default InformationManage