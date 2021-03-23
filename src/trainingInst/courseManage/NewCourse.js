import NameIndex from "./NameIndex"
import React, {useContext, useEffect, useReducer} from "react"
import {Button, DatePicker, Input, message, Cascader, Checkbox, Row, Col, Tag} from "antd"
import "./NewCourse.css"
import axios from "axios"
import API from "../../config/apiUrl"
import Context from "../studentMange/MyContext"
import Modal from "antd/es/modal";

const { RangePicker } = DatePicker;


const NewCourse=()=>{

    const {state, dispatch} = useContext(Context)
    const {store, reducer} = NameIndex
    const [cState, cDispatch] = useReducer(reducer, store)

    const disabledDate = current => {
        if (!cState.dates || cState.dates.length === 0) {
            return false;
        }
        return false;
    };

    const onOpenChange = open => {
        if (open) {
            cDispatch({
                type:"sethackValue",
                hackValue:[],
            })
            cDispatch({
                type:"setdates",
                dates:[],
            })
        } else {
            cDispatch({
                type:"sethackValue",
                hackValue:undefined,
            })
        }
    };


    const handleCancel = () => {
        cDispatch({
            type:"setisModalVisible",
            isModalVisible:false,
        })
    };
    const handleOk =()=>{
        cDispatch({
            type:"setisModalVisible",
            isModalVisible:false,
        })
        message.success("修改成功")
    }
    const submitInf =()=>{
        // const nameToMassage={
        //     [name]:"活动名称",
        //     [introduction]:"活动简介",
        // }
        // for(let key in Information){
        //     if(Information[key] === ''){
        //         message.error(`${nameToMassage[key]} 不能为空!`)
        //         return
        //     }
        // }
        axios.post(API.insApi.newACourse,
            {
                courseItem:{
                    name:cState.name,
                    number:cState.number,
                    description:cState.description,
                    pass_score:cState.pass_score,
                    start_time:cState.value[0].format("YYYY/MM/DD"),end_time:cState.value[1].format("YYYY/MM/DD"),
                    edu_institution:state.insId,
                    activity:cState.selectActivityId,
                },
                selectTeacherList:cState.selectTeacherList,

            }).then(res=>{
            if(res.data.insertSuccess === true){
                message.success("新增课程成功1!")
            }else{
                console.log(res)
                message.error("新增课程失败2!")
            }
        }).catch(
            res=>{
                console.log(res)
                message.error("新增课程失败3!")
            }
        )
    }
    function onChange2(checkedValues) {
        cDispatch({
            type:"setselectTeacherList",
            selectTeacherList:checkedValues,
        })
    }
    useEffect(()=>{
        axios.get(API.insApi.getAllTeacherAndActivityByInsId+state.insId)
            .then(res=>{
                cDispatch({
                    type:"setteacherList",
                    teacherList:res.data.teacherList,
                })
                cDispatch({
                    type:"setActivityList",
                    ActivityList:res.data.activityList,
                })
            })
    },[])
    return(
        <div className="NewActivity">

            <div className="name">
                <label >课程名称: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={cState.name}
                    onChange={
                    (e)=>{
                        cDispatch({
                        type:"setname",
                        name:e.target.value,
                    })}}
                />
            </div>

            <div className="attendNumber">
                <label >课程人数: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={cState.number}
                    onChange={(e)=>{
                            cDispatch({
                                type:"setnumber",
                                number:e.target.value,
                            })}}
                />
            </div>

            <div className="introduction">
                <label >课程简介: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={cState.description}
                    onChange={(e)=>{
                        cDispatch({
                            type:"setdescription",
                            description:e.target.value,
                        })}}
                />
            </div>
            <div className="score">
                <label >及格分数: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={cState.pass_score}
                    onChange={(e)=>{
                        cDispatch({
                            type:"setpass_score",
                            pass_score:e.target.value,
                        })}}
                />
            </div>
            <div className="teachers">
                <label >任课老师: </label>
                {cState.selectTeacherList.map(item=>(<Tag>{item.name}</Tag>))}
                <Button onClick={()=>{
                    cDispatch({
                        type:"setisModalVisible",
                        isModalVisible:true,
                    })}}>点击选择</Button>
            </div>
            <div className="StartTime">
                <label >选择时间: </label>
                <RangePicker
                    value={cState.hackValue || cState.value}
                    disabledDate={disabledDate}
                    onCalendarChange={val => cDispatch({
                        type:"setdates",
                        dates:val,
                    })}
                    onChange={val => {
                        cDispatch({
                            type: "setvalue",
                            value: val,
                        })
                    }}
                    onOpenChange={onOpenChange}
                    style={{width:"200px"}}
                />
            </div>

            <div className="activityName">
                <label >所属活动: </label>
                <Cascader options={cState.ActivityList.map(item=>({value:item.id, label:item.topic}))}  onChange={(value, selectedOptions)=>cDispatch({type:"setselectActivityId", selectActivityId:value[0]})} changeOnSelect style={{width:"200px"}} />

            </div>

            <Button type="primary" onClick={()=>submitInf()}>确定</Button>
            <Modal title="请选择授课老师:" visible={cState.isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Checkbox.Group style={{ width: '100%' }} onChange={onChange2}>
                    <Row>
                        {cState.teacherList.map((item, index)=>(
                            <Col span={8}>
                                <Checkbox value={item} key={item.id}>{item.name}</Checkbox>
                            </Col>
                        ))}
                    </Row>
                </Checkbox.Group>

            </Modal>
        </div>
    )
}

export default NewCourse