import NameIndex from "./NameIndex"
import {useState} from "react"
import {Button, Image, Input} from "antd"
import "./NewCourse.css"

const NewCourse=()=>{
    const {attendNumber,introduction,name,score,teachers,StartTime,EndTime,ActivityName} =NameIndex
    const dataInit ={
        [score]:60,
        [name]:"语文",
        [introduction]:"3个月教你快速造火箭.  课程内容涵盖面广，工程实践性强，具有理论和实践紧密结合的特点",
        [attendNumber]:100,
        [teachers]:[{id:23,name:"李老师"},{id:33,name:"王老师"}],
        [StartTime]:"2020-12-1",
        [EndTime]:"2021-12-1",
        [ActivityName]:"火箭制造"
    }
    const [Information, setInformation]=useState(dataInit)
    const changeInput =(e,key)=>{
        setInformation(state=>({...state,[key]:e.target.defaultValue}))
    }
    return(
        <div className="NewActivity">

            <div className="name">
                <label >课程名称: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[name]}
                    onChange={(e)=>changeInput(e,name)}
                />
            </div>

            <div className="attendNumber">
                <label >课程人数: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[attendNumber]}
                    onChange={(e)=>changeInput(e,introduction)}
                />
            </div>

            <div className="introduction">
                <label >课程简介: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[introduction]}
                    onChange={(e)=>changeInput(e,introduction)}
                />
            </div>
            <div className="score">
                <label >及格分数: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[score]}
                    onChange={(e)=>changeInput(e,introduction)}
                />
            </div>
            <div className="teachers">
                <label >任课老师: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[score]}
                    onChange={(e)=>changeInput(e,introduction)}
                />
            </div>
            <div className="StartTime">
                <label >开始时间: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[StartTime]}
                    onChange={(e)=>changeInput(e,introduction)}
                />
            </div>
            <div className="EndTime">
                <label >结束时间: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[EndTime]}
                    onChange={(e)=>changeInput(e,introduction)}
                />
            </div>
            <div className="activityName">
                <label >所属活动: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[ActivityName]}
                    onChange={(e)=>changeInput(e,introduction)}
                />
            </div>



            <Button type="primary">确定</Button>
        </div>
    )
}

export default NewCourse