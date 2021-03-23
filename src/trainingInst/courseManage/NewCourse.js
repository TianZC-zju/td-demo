import NameIndex from "./NameIndex"
import {useContext, useEffect, useState} from "react"
import {Button, DatePicker, Input, message, Cascader} from "antd"
import "./NewCourse.css"
import axios from "axios"
import API from "../../config/apiUrl"
import Context from "../studentMange/MyContext"


const { RangePicker } = DatePicker;
const optionLists = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',

    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',

    },
];
const NewCourse=()=>{
    const {state, dispatch} = useContext(Context)
    const [value, setValue] = useState();
    const [hackValue, setHackValue] = useState();
    const [dates, setDates] = useState([]);
    const [activityList, setactivityList] = useState([])
    const [teacherList, setteacherList] = useState([])
    const disabledDate = current => {
        if (!dates || dates.length === 0) {
            return false;
        }
        // const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
        // const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
        return false;
    };
    const onChange = (value, selectedOptions) => {
        console.log(value, selectedOptions);
    };
    const onOpenChange = open => {
        if (open) {
            setHackValue([]);
            setDates([]);
        } else {
            setHackValue(undefined);
        }
    };
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
    useEffect(()=>{
        axios.get(API.insApi.getAllTeacherAndActivityByInsId+state.insId)
            .then(res=>{
                setteacherList(res.data.teacherList)
                setactivityList(res.data.activityList)
            })
    },[])
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
                <Cascader options={teacherList.map(item=>({value:item.id, label:item.name}))}  onChange={onChange} changeOnSelect style={{width:"200px"}} />
            </div>
            <div className="StartTime">
                <label >选择时间: </label>
                <RangePicker
                    value={hackValue || value}
                    disabledDate={disabledDate}
                    onCalendarChange={val => setDates(val)}
                    onChange={val => setValue(val)}
                    onOpenChange={onOpenChange}
                    style={{width:"200px"}}
                />
            </div>

            <div className="activityName">
                <label >所属活动: </label>
                <Cascader options={activityList.map(item=>({value:item.id, label:item.topic}))}  onChange={onChange} changeOnSelect style={{width:"200px"}} />

            </div>



            <Button type="primary" onClick={()=>submitInf()}>确定</Button>
        </div>
    )
}

export default NewCourse