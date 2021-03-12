import NameIndex from "./NameIndex"
import {useState} from "react"
import {Button, Image, Input} from "antd"
import "./NewActivity.css"

const NewCA=()=>{
    const {insName,username,password,} =NameIndex
    const dataInit ={
        [insName]:"天天培训",
        [username]:"ttc",
        [password]:"",
    }
    const [Information, setInformation]=useState(dataInit)
    const changeInput =(e,key)=>{
        setInformation(state=>({...state,[key]:e.target.defaultValue}))
    }
    return(
        <div className="NewActivity">

            <div className="name">
                <label >机构名称: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[insName]}
                    onChange={(e)=>changeInput(e,insName)}
                />
            </div>

            <div className="introduction">
                <label >账号名: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[username]}
                    onChange={(e)=>changeInput(e,username)}
                />
            </div>

            <div className="detail">
                <label >密码: </label>
                <Input.Password
                    style={{width:"200px"}}
                    placeholder="input password"
                    onChange={(e)=>changeInput(e,password)}
                />
            </div>

            <Button type="primary">确定</Button>
        </div>
    )
}

export default NewCA