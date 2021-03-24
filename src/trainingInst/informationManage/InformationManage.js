import NameIndex from "./NameIndex"
import {Input, Button, message} from "antd"
import {useContext, useEffect, useState} from "react"
import "./InformationManage.css"
import UploadLogo from "../../public/UploadLogo"
import MyRS from './ReducerAndStore'
import StringConst from "./StringConst";
import axios from "axios";
import API from '../../config/apiUrl'
import Context from "../studentMange/MyContext";


const InformationManage = ()=>{
    const {state, dispatch} = useContext(Context)
    const [infoState, infoDispatch] = MyRS()
    const {typeList} = StringConst

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

    const submitInf =()=>{
        axios.post(API.insApi.updateInsInfo, {...infoState, id:state.insId}).then(res=>{
            console.log(res)
            if(res.data.updateSuccess){
                message.success("修改成功")
            }else{
                message.error("修改失败")
            }
        }).catch(error=>{
            console.log(error)
            message.error("修改失败2")
        })

    }
    useEffect(()=>{
        axios.get(API.insApi.getInsInfoByInsId+state.insId).then(res=>{
            infoDispatch({
                type:typeList.setinsInfo,
                value:res.data.insInfo[0]
            })
        })
    }, [])
    return(
        <div className="information">
            <div className="logo">
                <UploadLogo/>

            </div>

            <div className="name">
                <label >姓名: </label>
                <Input
                    style={{width:"200px"}}
                    value={infoState.name}
                    onChange={(e)=>infoDispatch({
                        type:StringConst.typeList.setname,
                        value:e.target.value
                    })}
                />
            </div>
            <div className="introduction">
                <label >简介: </label>
                <Input
                    style={{width:"200px"}}
                    value={infoState.introduction}
                    onChange={(e)=>infoDispatch({
                        type:StringConst.typeList.setintroduction,
                        value:e.target.value
                    })}
                />
            </div>

            <Button type="primary" onClick={()=>submitInf()}>确定</Button>
        </div>
    )
}
export default InformationManage